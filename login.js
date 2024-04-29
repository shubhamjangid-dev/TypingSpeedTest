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
  
    // Get input values
    var username = document.getElementById("usernameL").value;
    var password = document.getElementById("passwordL").value;
  
    // Replace with your API endpoint
    var apiUrl = "http://localhost:4500/api/v1/users/login";
  
    // Prepare data to send
    var data = {
      username: username,
      password: password
    };
  
    // Make POST request to the API
    fetch(apiUrl, {
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
        window.location.href = "./frontend/index.html";
        // Perform actions after successful login, like redirecting to another page
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
  
    // Get input values
    var username = document.getElementById("usernameR").value;
    var password = document.getElementById("passwordR").value;
    var fullname = document.getElementById("fullnameR").value;
    var email = document.getElementById("emailR").value;
  
    // Replace with your API endpoint
    var apiUrl = "http://localhost:4500/api/v1/users/register";
  
    // Prepare data to send
    var data = {
      username: username,
      password: password,
      fullname: fullname,
      email: email
    };
  
    // Make POST request to the API
    fetch(apiUrl, {
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
<script src="script.js"></script>`