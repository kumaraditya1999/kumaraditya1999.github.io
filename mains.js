

document.querySelector('pre').onclick = function() {
    alert('Ouch! Stop poking me!');
}


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/download.jpg') {
      myImage.setAttribute ('src','images/104819285-thor.530x298.jpg');
    } else {
      myImage.setAttribute ('src','images/download.jpg');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}