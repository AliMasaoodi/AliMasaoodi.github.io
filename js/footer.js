// footer.js

function loadFooter() {
    fetch('../footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      })
      .catch(err => console.error('Failed to load the footer:', err));
  }
  
  // Call the function to load the footer
  loadFooter();
  