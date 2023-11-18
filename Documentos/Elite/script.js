// JavaScript para mostrar el formulario y la superposición
function showLoginForm() {
    var overlay = document.getElementById('overlay');
    var loginFormContainer = document.getElementById('login_form_container');
  
    overlay.style.display = 'block';
    loginFormContainer.style.display = 'block';
  }
  
  // JavaScript para ocultar el formulario y la superposición
  function hideLoginForm() {
    var overlay = document.getElementById('overlay');
    var loginFormContainer = document.getElementById('login_form_container');
  
    overlay.style.display = 'none';
    loginFormContainer.style.display = 'none';
  }