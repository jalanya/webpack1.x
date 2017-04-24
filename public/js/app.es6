//require('./login');
import {login} from "./login";
/*
var img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require('../images/webpack_logo.png');

document.getElementById('img_container').appendChild(img);
*/
require('../css/bootstrap.css');
//require('../css/app.scss');
require('../css/app.less');

login('admin', 'radical');
document.write("Welcome to Big Hair Concerts!!");

console.log("App loaded");

//Imports below are not working on.
//import '../css/bootstrap.css';
//import '../css/app.css';
