document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    var formData = new FormData(this); // Get form data
    // You can send the form data to your login script using AJAX or let the form handle the submission
    this.submit(); // Submit the form
  });
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // You can add your login logic here
    var username = document.getElementById("Uname").value;
    var password = document.getElementById("Pass").value;
  
    // Example: Check if username and password are valid (you should replace this with your actual login logic)
    if (username === "your_username" && password === "your_password") {
      // Redirect to dashboard.html
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password. Please try again.");
      // You can add more error handling logic here, such as displaying an error message to the user
    }
  });