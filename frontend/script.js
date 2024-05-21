let userLoggedIn = false;
let activeLevelId ;
const url = 'http://localhost:4500/api/v1';

function getCookie(key) { 
  let re = new RegExp(key + "=([^;]+)"); 
  let value = re.exec(document.cookie); 
  return (value != null) ? decodeURIComponent(value[1]) : null; 
}

// TODO verify tokens if expired generate new or login again
if(getCookie('refreshToken') != null)
{
    document.querySelector('.container').style.display = "none";
    document.querySelector('.main').style.filter = "blur(0px)";
    userLoggedIn = true;
}

function loadAllLevels(){
    fetch(`${url}/levels/getAllLevels`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
    //   console.log(data);
        const levelBar = document.querySelector('.levelBar');
        data.forEach(element => {
            levelBar.innerHTML += `<div class="level locked" id="${element._id}" >${element.levelName} <div class="score"></div></div>`;
        });
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("response").innerText = "An error occurred. Please try again later.";
    });
    getScoresOfLevel()
}

function getScoresOfLevel(){
    let refreshToken = getCookie('refreshToken');
    let accessToken = getCookie('accessToken');
    if(refreshToken == null || accessToken == null)return;
    fetch(`${url}/users/getUserLevelBoard`, {
      method: "POST",
      body: JSON.stringify({refreshToken: refreshToken, accessToken: accessToken}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        
        data.forEach(element => {
            // console.log(element);
            document.getElementById(`${element.levelId}`).querySelector('.score').innerText = element.score;
            removeClass(document.getElementById(`${element.levelId}`),'locked');
        });
        removeClass(document.querySelector(`.locked`),'locked');
    })
    .catch(error => {
      console.error("Error:", error);
      console.log("An error occurred. Please try again later.");
    });
}


// GAME RELATED IN FRONTEND
let words = "hjsdgfgfk kjasfhkashfkj kshfdkjashfk kjshdfkjahs".split(' ');

let gameStart = false;
let startTime, endTime;
const clock = document.getElementById('timer');
let flagOfNewLine = false;
let noOfWords = 0;


function addClass(element,name){
    element.className += " " + name;
}

function removeClass(element,name){
    element.className = element.className.replace(name,'');
}

function formatWord(word){
    return `<div class = "word"><span class = "letter">${word.split('').join('</span><span class = "letter">')}</span><span class = "letter">&nbsp</span></div>`
}

function newGame(){
  const typingArea = document.getElementById('words');
  typingArea.innerHTML="";
  let i;
  for( i=0; i<words.length-1;i++)
  {
    typingArea.innerHTML += formatWord(words[i]);
  }
  typingArea.innerHTML += `<div class = "word"><span class = "letter">${words[i].split('').join('</span><span class = "letter">')}</span><span class = "letter lastLetter">&nbsp</span></div>`
  addClass(document.querySelector('.word'),'current');
  addClass(document.querySelector('.letter'),'current');
}

const reset = function(){
    gameStart = false;
    flagOfNewLine = false;
    noOfWords = 0;
    clock.innerText = `0 sec`;
    clearInterval(myInterval);
    document.getElementById('accuracy').innerHTML = `100%<br>Accuracy`
    document.getElementById('WordsPerMin').innerHTML = `0<br>Words Per Minute`
    document.getElementById('words').style.marginTop = '0px';
    newGame();
};

document.getElementById("reset").addEventListener("click",reset);

function updateTime(){
    endTime = new Date().getTime();
    let seconds = ((endTime - startTime)/1000).toFixed(0);
    clock.innerText = `${seconds} sec`
}

let myInterval;
const accuracyEle = document.getElementById('accuracy');
const WordsPerMinEle =document.getElementById('WordsPerMin');
window.addEventListener('keydown', function (e){
    if(userLoggedIn)
    {
    const key = e.key;
    const currentWord = document.querySelector('.word.current');
    const currentKey = document.querySelector('.letter.current');
    const currentLetter = currentKey.innerHTML;
    if(currentKey.className.includes('lastLetter'))
    {
        console.log('result');
        submitGame();
    }
    if(gameStart == false)
    {
        gameStart = true;
        startTime = new Date().getTime();
        endTime = startTime;
        myInterval = setInterval(updateTime,1000)
    }
    // console.log(currentLetter , key , currentLetter ===key) ;
    // console.log(key<='z' && key>='a');
    // console.log(currentKey.offsetTop, currentKey.offsetTop>=180);
    if(currentKey.offsetTop >=180)
    {
        const wordBox = document.getElementById('words');
        const margin = parseInt(wordBox.style.marginTop || '0px');
        wordBox.style.marginTop = (margin-60) + 'px';
        flagOfNewLine = true;
    }
    else if(flagOfNewLine && currentKey.offsetTop <120)
    {
        const wordBox = document.getElementById('words');
        const margin = parseInt(wordBox.style.marginTop || '0px');
        wordBox.style.marginTop = Math.min((margin+60),0) + 'px';
    }
    if(key<='z' && key>='a')
    {
        // console.log(currentKey.nextSibling);
        if(currentLetter === key){
            removeClass(currentKey,' current');
            addClass(currentKey.nextSibling,'current');
            addClass(currentKey,'correct');
        }
        else if(currentLetter === '&nbsp;')
        {
            noOfWords++;
            removeClass(currentKey,' current');
            removeClass(currentWord,' current');
            addClass(currentWord.nextSibling,'current');
            addClass(currentWord.nextSibling.childNodes[0],'current');
            addClass(currentKey,'wrong');
        }
        else{
            removeClass(currentKey,' current');
            addClass(currentKey.nextSibling,'current');
            addClass(currentKey,'wrong');
        }
    }
    else if(key ==='Backspace')
    {
        
        if(currentWord.childNodes[0] === currentKey)
        {
            removeClass(currentKey,' current');
            removeClass(currentWord,' current')
            addClass(currentWord.previousSibling,'current');
            addClass(currentWord.previousSibling.lastChild,'current');
            removeClass(currentWord.previousSibling.lastChild,' correct');
            if(currentWord.previousSibling.lastChild.className.includes('wrong'))
            {
                // console.log("it is wrong word");
                removeClass(currentWord.previousSibling.lastChild,' wrong')
                addClass(currentWord.previousSibling.lastChild,'replaced');
            }
            noOfWords--;
        }
        else{
            removeClass(currentKey,' current');
            addClass(currentKey.previousSibling,'current');
            removeClass(currentKey.previousSibling,' correct');
            if(currentKey.previousSibling.className.includes('wrong'))
            {
                // console.log("it is wrong word");
                removeClass(currentKey.previousSibling,' wrong')
                addClass(currentKey.previousSibling,'replaced');
            }
        }
    }
    else if(key ===' ')
    {
        // console.log("space", currentLetter,currentLetter === '&nbsp;');
        // console.log(currentWord.nextSibling.firstChild,);
        if(currentLetter === '&nbsp;'){
            noOfWords++;
            removeClass(currentKey,' current');
            removeClass(currentWord,' current');
            addClass(currentWord.nextSibling,'current');
            addClass(currentWord.nextSibling.childNodes[0],'current');
            addClass(currentKey,'correct');
        }
        else{
            removeClass(currentKey,' current');
            addClass(currentKey.nextSibling,'current');
            addClass(currentKey,'wrong');
        }
    }
    const noOfCorrectLetters = document.querySelectorAll('.correct').length
    const noOfWrongLetters = document.querySelectorAll('.wrong').length
    const Accuracy = (100* noOfCorrectLetters/(noOfCorrectLetters+noOfWrongLetters)).toFixed(1);
    const dur = (endTime-startTime)/60000;
    const WPM = (noOfWords/dur).toFixed(0);
    accuracyEle.innerHTML = `${Accuracy}%<br>Accuracy`
    if(dur == 0)
    {
      WordsPerMinEle.innerHTML = `0<br>Words Per Minute`
    }
    else
      WordsPerMinEle.innerHTML = `${WPM}<br>Words Per Minute`
}})

let menuHidden = false;
const menuBar = document.querySelector('.menu');
const levelBar = document.querySelector('.levelBar');
const article = document.querySelector('.article');
menuBar.addEventListener('click',()=>{
    if(menuHidden)
    {
      levelBar.style.display = 'block';
      article.style.display = 'none';
        levelBar.style.width = '100%';
        // document.querySelector('.article').style.width = '80%';
        // document.querySelector('.article').style.left = '22%';

        menuHidden = false;
    }
    else{
      levelBar.style.display = 'none';
      article.style.display = 'block';
        // document.querySelector('.levelBar').style.width = '0%';
        // document.querySelector('.article').style.width = '100%';
        // document.querySelector('.article').style.left = '4%';
        menuHidden = true;
    }
})

// POST REQUESTS WITH BACKEND

levelBar.addEventListener('click', (e)=>{
    // console.log(e.target);
    if(e.target.className === 'level ' )
    {
      levelBar.style.display = 'none';
      article.style.display = 'block';
        menuHidden = true;
        // console.log(e.target);
        getLevelContent(e.target.getAttribute('id'))
    }
    else if(e.target.className === 'level locked' )
    {
      alert("This level is locked");
    }
});
function getLevelContent(levelId)
{
    activeLevelId = levelId;
    let data = {
        id : levelId
    }
    fetch(`${url}/levels/getLevelContent`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data.levelContent);
        words = data.levelContent.split(' ');
        document.querySelector('.levelName').innerText = data.levelName;
        reset();
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("response").innerText = "An error occurred. Please try again later.";
    });
    
}
const submitGame = function()
{
    let refreshToken = getCookie('refreshToken');
    let accessToken = getCookie('accessToken');
    let score = parseInt(document.getElementById("WordsPerMin").innerText);
    let levelName = document.querySelector(".levelName").innerText;

    let data = {
      accessToken: accessToken,
      refreshToken: refreshToken,
      levelId : activeLevelId,
      score: score,
    };
  
    fetch(`${url}/score/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        console.log(data.data);
        document.getElementById(`${data.data.level}`).querySelector('.score').innerText = data.data.score;
        clearInterval(myInterval);
        console.log("result submitted");
      } else {
        console.log("result not submitted");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      console.log("An error occurred. Please try again later.");
    });
}
loadAllLevels();

let loginHidden = false;
document.querySelector('#login').style.display = 'block';
document.querySelector('#register').style.display = 'none';
document.querySelector('.switch').addEventListener('click',()=>{
  console.log("Login hidden");
  if(loginHidden)
  {
    document.querySelector('#login').style.display = 'block';
    document.querySelector('#register').style.display = 'none';
    loginHidden = false;
    document.querySelector('.switch').innerText = `Don't have account?`
  }
  else{
    document.querySelector('#login').style.display = 'none';
    document.querySelector('#register').style.display = 'block';
    loginHidden = true;
    document.querySelector('.switch').innerText = `Already have account?`
  }
})

document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    let username = document.getElementById("usernameL").value;
    let password = document.getElementById("passwordL").value;
  
    let data = {
      username: username,
      password: password
    };
  
    fetch(`${url}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.getElementById("response").innerText = "Login successful!";
        // document.querySelector("body").innerHTML = gamePage;
        // window.location.href = "./frontend/index.html";
        // Perform actions after successful login, like redirecting to another page
        document.querySelector('.container').style.display = "none";
        document.querySelector('.main').style.filter = "blur(0px)";
        document.cookie = `accessToken=${encodeURIComponent(data.data.accessToken)}`;
        document.cookie = `refreshToken=${encodeURIComponent(data.data.refreshToken)}`;
        userDetails.innerText = `${data.data.user.username}`;
        userLoggedIn = true;
        getScoresOfLevel()
      } else {
        document.getElementById("response").innerText = "Login failed. Please check your credentials.";
      }
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("response").innerText = "An error occurred. Please try again later.";
    });
  });


document.getElementById("register").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    let username = document.getElementById("usernameR").value;
    let password = document.getElementById("passwordR").value;
    let fullname = document.getElementById("fullnameR").value;
    let email = document.getElementById("emailR").value;
  
    let data = {
      username: username,
      password: password,
      fullname: fullname,
      email: email
    };
  
    fetch(`${url}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.getElementById("response").innerText = "Registered successfully!";
        // window.location.href = "./frontend/index.html";
        // Perform actions after successful login, like redirecting to another page
      } else {
        document.getElementById("response").innerText = "failed. somthing went wrong.";
      }
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("response").innerText = "An error occurred. Please try again later.";
    });
  });
  
document.querySelector('.retry').addEventListener("click", () => {
    reset();
});
document.querySelector('.nextLevel').addEventListener("click", () => {
    reset();
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
document.querySelector('body').addEventListener("click",()=>{
  console.log("adsdf");
  console.log(document.getElementById("myDropdown").className.includes("show"))
  {
    myFunction();
  }
});

function logout(){
  let data = {
    accessToken: getCookie('accessToken'),
    refreshToken: getCookie('refreshToken'),
  }
  fetch(`${url}/users/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      console.log('logged out');
    } else {
      console.log('logout failed');
    }
  })
  .catch(error => {
    console.log("Error while logout:", error);
  });
  document.cookie = `accessToken=`;
  document.cookie = `refreshToken=`;
  window.location.href = "../login.html";
}