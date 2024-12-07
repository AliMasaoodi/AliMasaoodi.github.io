window.onload = function() {
    var x = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"; // Image URL
    
    // Get all divs where the image needs to be placed
    var divs = document.querySelectorAll(".image-container");
    
    divs.forEach(function(div) {
        // Create a new image element
        var img = document.createElement("img");
        img.src = x;
        img.alt = "Google Logo";
        img.style.width = "100px"; // Optional: Style the image as needed
        
        // Append the image to the current div
        div.appendChild(img);
    });
}