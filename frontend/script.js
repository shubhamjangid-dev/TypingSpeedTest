
const words = "The brown dog jumped over the lazy fox chasing its tail through the green meadow Birds chirped melodiously above while a gentle breeze rustled the leaves of the tall trees Sunlight filtered through the canopy casting dappled shadows on the forest floor The scent of pine and earth filled the air mingling with the sweet fragrance of wildflowers Butterflies danced among the blooms their colorful wings fluttering gracefully In the distance a stream gurgled softly its clear waters reflecting the azure sky above Nature symphony played on a tranquil melody in this serene wilderness".split(' ');
const wordCount = words.length;

let gameStart = false;
let startTime, endTime;
const clock = document.getElementById('timer');
let flagOfNewLine = false;
let noOfWords = 0;

const gamePage = `
<div class="logo">
  <img src="app-preview.jpeg">
</div>
<div class="navbar">
  <div class="menu"><i class="fa-solid fa-bars fa-xs"></i></div>
  <div class="s"></div>
  <div class="s"></div>
</div>
<div class="main">
  <div class="levelBar">
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
  </div>
  <div class = "article">
    <div id="header">
      <div id="timer">0 : 0</div>
      <div id="reset">
          <button>Reset</button>
      </div>
    </div>
    <div id="game">
      <div id="words">

      </div>
    </div>
    <div class="result" id="WordsPerMin">24 <br>Words Per Minute</div>
    <div class="result" id="accuracy">97%<br>Accuracy</div>
  </div>
</div>
<script src="../login.js"></script>`

function addClass(element,name){
    element.className += " " + name;
}

function removeClass(element,name){
    element.className = element.className.replace(name,'');
}


function randomWord(){
    const randomIndex = Math.floor(Math.random()*wordCount)
    return words[randomIndex];
}

function formatWord(word){
    return `<div class = "word"><span class = "letter">${word.split('').join('</span><span class = "letter">')}</span><span class = "letter">&nbsp</span></div>`
}


document.getElementById("reset").addEventListener("click",()=>{
    gameStart = false;
    flagOfNewLine = false;
    noOfWords = 0;
    clock.innerText = `0 sec`;
    clearInterval(myInterval);
    document.getElementById('accuracy').innerHTML = `100%<br>Accuracy`
    document.getElementById('WordsPerMin').innerHTML = `0<br>Words Per Minute`
    newGame();
});
function newGame(){
    const typingArea = document.getElementById('words');
    typingArea.innerHTML="";
    for(let i=0; i<200;i++)
    {
        typingArea.innerHTML += formatWord(randomWord());
    }
    addClass(document.querySelector('.word'),'current');
    addClass(document.querySelector('.letter'),'current');
}

function updateTime(){
    endTime = new Date().getTime();
    let seconds = ((endTime - startTime)/1000).toFixed(0);
    clock.innerText = `${seconds} sec`
}
const myInterval = setInterval(updateTime,1000);

window.addEventListener('keydown', function (e) {
    const key = e.key;
    const currentWord = document.querySelector('.word.current');
    const currentKey = document.querySelector('.letter.current');
    const currentLetter = currentKey.innerHTML;
    
    if(gameStart == false)
    {
        gameStart = true;
        startTime = new Date().getTime();
        endTime = startTime;
        myInterval();
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
    const WPM = ((noOfWords)/((endTime-startTime)/60000)).toFixed(0);
    this.document.getElementById('accuracy').innerHTML = `${Accuracy}%<br>Accuracy`
    this.document.getElementById('WordsPerMin').innerHTML = `${WPM}<br>Words Per Minute`
})
newGame();

let menuHidden = true;
document.querySelector('.menu').addEventListener('click',()=>{
    if(menuHidden)
    {
        document.querySelector('.levelBar').style.width = '20%';
        document.querySelector('.article').style.width = '80%';
        document.querySelector('.article').style.left = '22%';

        menuHidden = false;
    }
    else{
        document.querySelector('.levelBar').style.width = '0%';
        document.querySelector('.article').style.width = '100%';
        document.querySelector('.article').style.left = '4%';
        menuHidden = true;
    }
})






// let loginHidden = false;
// document.querySelector('#login').style.display = 'block';
// document.querySelector('#register').style.display = 'none';
// document.querySelector('.switch').addEventListener('click',()=>{
//   console.log("Login hidden");
//   if(loginHidden)
//   {
//     document.querySelector('#login').style.display = 'block';
//     document.querySelector('#register').style.display = 'none';
//     loginHidden = false;
//     document.querySelector('.switch').innerText = `Don't have account?`
//   }
//   else{
//     document.querySelector('#login').style.display = 'none';
//     document.querySelector('#register').style.display = 'block';
//     loginHidden = true;
//     document.querySelector('.switch').innerText = `Already have account?`
//   }
// })



// document.getElementById("login").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Get input values
//     var username = document.getElementById("usernameL").value;
//     var password = document.getElementById("passwordL").value;
  
//     // Replace with your API endpoint
//     var apiUrl = "http://localhost:4500/api/v1/users/login";
  
//     // Prepare data to send
//     var data = {
//       username: username,
//       password: password
//     };
  
//     // Make POST request to the API
//     fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         document.getElementById("response").innerText = "Login successful!";
//         // document.querySelector("body").innerHTML = gamePage;
//         // newGame();
//         // pageReloded = true;
//         // window.location.href = "./frontend/index.html";
//         // Perform actions after successful login, like redirecting to another page
//       } else {
//         document.getElementById("response").innerText = "Login failed. Please check your credentials.";
//       }
//     })
//     .catch(error => {
//       console.error("Error:", error);
//       document.getElementById("response").innerText = "An error occurred. Please try again later.";
//     });
//   });


// document.getElementById("register").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Get input values
//     var username = document.getElementById("usernameR").value;
//     var password = document.getElementById("passwordR").value;
//     var fullname = document.getElementById("fullnameR").value;
//     var email = document.getElementById("emailR").value;
  
//     // Replace with your API endpoint
//     var apiUrl = "http://localhost:4500/api/v1/users/register";
  
//     // Prepare data to send
//     var data = {
//       username: username,
//       password: password,
//       fullname: fullname,
//       email: email
//     };
  
//     // Make POST request to the API
//     fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         document.getElementById("response").innerText = "Registered successfully!";
//         // window.location.href = "./frontend/index.html";
//         // Perform actions after successful login, like redirecting to another page
//       } else {
//         document.getElementById("response").innerText = "failed. somthing went wrong.";
//       }
//     })
//     .catch(error => {
//       console.error("Error:", error);
//       document.getElementById("response").innerText = "An error occurred. Please try again later.";
//     });
//   });
  


//   function logout(){
//     var apiUrl = "http://localhost:4500/api/v1/users/register";
//     fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: {}
//       })
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           document.getElementById("response").innerText = "Logout successful!";
//           // document.querySelector("body").innerHTML = gamePage;
//           // newGame();
//           // pageReloded = true;
//           // window.location.href = "./frontend/index.html";
//           // Perform actions after successful login, like redirecting to another page
//         } else {
//           document.getElementById("response").innerText = "Logout failed. Please check your credentials.";
//         }
//       })
//       .catch(error => {
//         console.error("Error:", error);
//         document.getElementById("response").innerText = "An error occurred. Please try again later.";
//       });
//   }

  