//Header login menu
// SELECT ELEMENTS
var loginMenu = document.querySelector('header nav:nth-of-type(2)');
var buttonL = document.querySelector('header nav li:nth-child(3)');

// TOGGLE CLASS FUNCTION
var toggleLoginMenu = function () {
  loginMenu.classList.toggle('active');
};

// ADD EVENT
buttonL.addEventListener('click', toggleLoginMenu);