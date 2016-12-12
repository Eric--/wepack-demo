require("../css/style.css");

//cookie
var cookie = require('./cookie.js');
var $div = document.createElement("div");
cookie.setCookie("daqing", "xiaolong1");
$div.innerHTML = cookie.getCookie();
document.body.appendChild($div);

//es6
let People = require("./es6");
let p = new People("I'm es6!");
p.sayHi();

//react
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./component.jsx');
ReactDOM.render(React.createElement(Hello), document.getElementById('app'));
