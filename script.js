// Wait for the page to load before executing
window.onload = function() {
  // Get the button and welcome message elements
  const button = document.querySelector('button');
  const welcomeMessage = document.querySelector('#welcome p');

  // Add event listener for the button click
  button.addEventListener('click', function() {
    // Change the content of the welcome message
    welcomeMessage.textContent = "You have successfully joined the Fit Together community!";
  });
}

window.onload = function() {
    console.log("JavaScript is working!");
  
    const button = document.querySelector('button'); // Get Started button
    const welcomeMessage = document.querySelector('#welcome p'); // Welcome message
    const form = document.querySelector('#signup-form'); // Sign-up form
    const confirmationMessage = document.querySelector('#confirmation-message'); // Confirmation message
  
    // Change content on button click
    button.addEventListener('click', function() {
      welcomeMessage.textContent = "You have successfully joined the Fit Together community!";
    });
  
    // Handle form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from refreshing the page
      confirmationMessage.style.display = "block"; // Show confirmation message
      form.reset(); // Clear the form fields
    });
  }
  window.onload = function() {
    console.log("JavaScript is working!");
  
    const button = document.querySelector('button'); // Get Started button
    const welcomeMessage = document.querySelector('#welcome p'); // Welcome message
    const form = document.querySelector('#signup-form'); // Sign-up form
    const confirmationMessage = document.querySelector('#confirmation-message'); // Confirmation message
    const leaderboardBody = document.querySelector('#leaderboard-body'); // Leaderboard body
  
    // Change content on button click
    button.addEventListener('click', function() {
      welcomeMessage.textContent = "You have successfully joined the Fit Together community!";
    });
  
    // Handle form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from refreshing the page
      confirmationMessage.style.display = "block"; // Show confirmation message
      form.reset(); // Clear the form fields
    });
  
    // Example leaderboard data
    const leaderboardData = [
      { rank: 1, name: "Alice", points: 150 },
      { rank: 2, name: "Bob", points: 120 },
      { rank: 3, name: "Charlie", points: 100 },
    ];
  
    // Populate leaderboard dynamically
    leaderboardData.forEach(entry => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${entry.rank}</td>
        <td>${entry.name}</td>
        <td>${entry.points}</td>
      `;
      leaderboardBody.appendChild(row);
    });
  }
  // Add this inside the window.onload function
const scheduleForm = document.querySelector('#schedule-form'); // Form to schedule sessions
const sessionsList = document.querySelector('#sessions-list'); // List to display sessions

scheduleForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get session details
  const sessionName = document.querySelector('#session-name').value;
  const sessionTime = document.querySelector('#session-time').value;

  // Create a new list item for the session
  const listItem = document.createElement('li');
  listItem.textContent = `${sessionName} - ${new Date(sessionTime).toLocaleString()}`;

  // Add the session to the list
  sessionsList.appendChild(listItem);

  // Clear the form fields
  scheduleForm.reset();
});
// Add this inside the window.onload function
const loginForm = document.querySelector('#login-form');
const signupFormAuth = document.querySelector('#signup-form-auth');
const authMessage = document.querySelector('#auth-message');

// Mock database for demonstration
const users = [];

// Handle Signup
signupFormAuth.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.querySelector('#signup-name').value;
  const email = document.querySelector('#signup-email').value;
  const password = document.querySelector('#signup-password').value;

  // Add user to the mock database
  users.push({ name, email, password });

  authMessage.textContent = "Sign-up successful! You can now log in.";
  authMessage.style.display = "block";

  signupFormAuth.reset();
});

// Handle Login
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;

  // Check if user exists in the mock database
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    authMessage.textContent = `Welcome back, ${user.name}!`;
    authMessage.style.display = "block";
  } else {
    authMessage.textContent = "Invalid email or password. Please try again.";
    authMessage.style.display = "block";
    authMessage.style.color = "red";
  }

  loginForm.reset();
});
