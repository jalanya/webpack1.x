//require('./login');
import {login} from "./login";
require('../css/bootstrap.css');
//require('../css/app.scss');
require('../css/app.less');

login('admin', 'radical');
document.write("Welcome to Big Hair Concerts!!");

console.log("App loaded");

//Imports below are not working on.
//import '../css/bootstrap.css';
//import '../css/app.css';
