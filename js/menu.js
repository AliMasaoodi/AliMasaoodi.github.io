// menu.js

function loadNavbar() {
    fetch('../menu.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
      })
      .catch(err => console.error('Failed to load the navbar:', err));
  }
  
  // Call the function to load the navbar
  loadNavbar();
  