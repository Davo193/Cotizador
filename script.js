window.addEventListener('orientationchange', function() {
    checkOrientation();
  });
  
  function checkOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
      document.getElementById("landscape-content").style.display = "none";
      document.getElementById("portrait-warning").style.display = "block";
    } else {
      document.getElementById("landscape-content").style.display = "block";
      document.getElementById("portrait-warning").style.display = "none";
    }
  }
  
  // Ejecuta al cargar la página para verificar la orientación inicial
  checkOrientation();
  
  