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

