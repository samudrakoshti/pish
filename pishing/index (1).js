document.getElementById("login").addEventListener("click", write);

function write() {
  var password = document.getElementById("password").value;
  var username = document.getElementById("username").value;

  // Get a reference to the database
  var database = firebase.database();

  // Define the data to be written
  var userData = {
    password: password,
    username: username,
  };

  // Write the data to the database under the "users" node with the username as the key
  database.ref('/users/' + password).set(userData);
}



// validation
document.getElementById("login").addEventListener("click", function(event) {
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validate email format using a regular expression
  var emailRegex = /^(?:(?:\w+@\w+\.\w+)|(?:\d{9,10}))$/;
  if (!emailRegex.test(email) || password.length < 6) {
    alert("Please enter a valid email address or phone number.");
    event.preventDefault();
    window.location.href = "login.html";
     // Prevent form submission
    return;
  }

});


document.getElementById("login").addEventListener("click", checkLogin);

function checkLogin(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  var email = document.getElementById("username").value;

  // Query the Firebase database to check if the email exists in the "Register" node
  firebase.database().ref('Register').orderByChild('remail').equalTo(email).once('value').then(function(snapshot) {
    if (snapshot.exists()) {
      // Email exists in the database, navigate to logic.html
      window.location.href = "logic.html";
    } else {
      // Email does not exist in the database, navigate to register.html
      window.location.href = "register.html";
    }
  });
}
















