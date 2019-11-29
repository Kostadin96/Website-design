


window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 230 || document.documentElement.scrollTop > 230) {
    document.getElementById("gridS").className = "slideUp";
  }
});

window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 710 || document.documentElement.scrollTop > 710) {
    document.getElementById("leftcol").className = "slideLeft";
  }
});

window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350) {
    document.getElementById("pro-version-pic").className = "slideRight";
  }
});

