document.addEventListener("DOMContentLoaded", function() {
    const enlaces = document.querySelectorAll("nav a");
    const bloques = document.querySelectorAll("block");
  
    enlaces.forEach(enlace => {
      enlace.addEventListener("click", function(event) {
        event.preventDefault();
  
        const direccionamiento = document.querySelector(this.getAttribute("href"));
        
        bloques.forEach(bloque => {
          bloque.style.display = "none";
        });
  
        direccionamiento.style.display = "block";
      });
    });
 });
 
    
    toggleTheme.addEventListener("click", function() {
      
    const checkform = document.getElementById("toggleTheme");
    const dark = document.getElementById("dark");
    const light = document.getElementById("light");
  
      if (checkform.checked) {
        dark.style.display = "none";
        light.style.display = "block";
        document.documentElement.setAttribute("data-bs-theme", "light");  
        } else {
        dark.style.display = "block";
        light.style.display = "none";
        document.documentElement.setAttribute("data-bs-theme", "dark");
      }
  });

