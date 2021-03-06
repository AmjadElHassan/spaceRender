"use strict";

var newUser = document.querySelector('#newUser');
var newUserDisplay = document.querySelector('.newPlayerResponse');
document.querySelector('.response').addEventListener('click', function () {
  return inputCheck(newUser.value);
});
var url = "https://api.spacetraders.io/";

function serverCheck() {
  fetch(url + "game/status").then(function (x) {
    return x.json();
  }).then(function (x) {
    return x.status.includes('currently online') ? document.querySelector('#serverStatus').innerText = "Game is Online" : document.querySelector('#serverStatus').innerText = "Game is Offline";
  });
}

function inputCheck(x) {
  fetch(url + "users/".concat(x, "/token"), {
    method: 'post'
  }).then(function (x) {
    return x.json();
  }).then(function (x) {
    newUserDisplay.innerText += "username: ".concat(x.user.username, " \n token: ").concat(x.token, " \n please immediatley record username and token");
  })["catch"](function (x) {
    return alert('please choose different username');
  });
}

serverCheck();