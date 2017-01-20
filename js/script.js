//Header form
// SELECT ELEMENTS
var form = document.querySelector('header form');
var button = document.querySelector('header nav li:nth-child(3)');

// TOGGLE CLASS FUNCTION
var toggleForm = function () {
  form.classList.toggle('active');
};

// ADD EVENT
button.addEventListener('click', toggleForm);

    
//Header form: forgot password
// SELECT ELEMENTS
var form2 = document.querySelector('header form:nth-of-type(2)');
var buttonP = document.querySelector('.forgotPass');

// TOGGLE CLASS FUNCTION
var toggleForm2 = function () {
form2.classList.toggle('active');
};

// ADD EVENT
buttonP.addEventListener('click', toggleForm2);
buttonP.addEventListener('click', toggleForm);


//Header form: Back button forgot password 
// SELECT ELEMENTS
var form2 = document.querySelector('header form:nth-of-type(2)');
var buttonP = document.querySelector('.backW');

// TOGGLE CLASS FUNCTION
var toggleForm2 = function () {
form2.classList.toggle('active');
};

// ADD EVENT
buttonP.addEventListener('click', toggleForm2);
buttonP.addEventListener('click', toggleForm);


//Header form: new account
// SELECT ELEMENTS
var form3 = document.querySelector('header form:nth-of-type(3)');
var buttonN = document.querySelector('.newAccount');

// TOGGLE CLASS FUNCTION
var toggleForm3 = function () {
  form3.classList.toggle('active');
};

// ADD EVENT
buttonN.addEventListener('click', toggleForm3);
buttonN.addEventListener('click', toggleForm);


//Header form: Back button new account 
// SELECT ELEMENTS
var form3 = document.querySelector('header form:nth-of-type(3)');
var buttonR = document.querySelector('.backR');

// TOGGLE CLASS FUNCTION
var toggleForm3 = function () {
  form3.classList.toggle('active');
};

// ADD EVENT
buttonR.addEventListener('click', toggleForm3);
buttonR.addEventListener('click', toggleForm);


//Aside filter
// SELECT ELEMENTS
var asideF = document.querySelector('aside form > fieldset');
var buttonF = document.querySelector('aside form  button:nth-of-type(1)');

// TOGGLE CLASS FUNCTION
var toggleAsideF = function () {
  asideF.classList.toggle('active');
};

// ADD EVENT
buttonF.addEventListener('click', toggleAsideF);


//Aside filter: close
// SELECT ELEMENTS
var buttonC = document.querySelector('aside fieldset button:last-of-type');

// TOGGLE CLASS FUNCTION
var toggleAsideF = function () {
  asideF.classList.toggle('active');
};

// ADD EVENT
buttonC.addEventListener('click', toggleAsideF);


//bookmark
var bookmark = document.querySelectorAll('article > button');
var bookmarkCount = document.querySelector('header nav:first-of-type li:nth-child(3)');

// TOGGLE CLASS FUNCTION
var toggleBookmark = function (bookmark) {
  var foo = bookmark.target;
  foo.classList.toggle('selected');  
  bookmarkCount.classList.toggle('count');
};

// ADD EVENT
for (var i = 0; i < bookmark.length; i++){
    bookmark[i].addEventListener('click', toggleBookmark);
}