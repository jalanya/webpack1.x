//require('./login');
var React = require('react');
var ReactDOM = require('react-dom');
var Timer = React.createClass({
  // some es6 magic. Will be compiled.
  getInitialState() {
   return {secondsElapsed: 0};
  },
  // normal es5 stuff.
  tick: function() {
   this.setState({secondsElapsed: this.state.secondsElapsed + 1 });
  },
  componentDidMount: function() {
   this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
   clearInterval(this.interval);
  },
  render: function() {
    //JSX i here gets parsed with the babel loader.
    return (
     <div>
      <h3>It is the final countdown</h3>
      Seconds Elapsed: { this.state.secondsElapsed}
     </div>
    );
  }
});

ReactDOM.render(<Timer />, document.getElementById('container'));

import {login} from "./login";
var config = require('../../config/config.json');

console.log(config.app_loaded_msg);
/*
var img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require('../images/webpack_logo.png');

document.getElementById('img_container').appendChild(img);
*/
$('#testDiv').text('jQuery modified this content(see app.js)');

require('../css/bootstrap.css');
//require('../css/app.scss');
require('../css/app.less');

login('admin', 'radical');
document.write("Welcome to Big Hair Concerts!!");

console.log("App loaded");

//Imports below are not working on.
//import '../css/bootstrap.css';
//import '../css/app.css';
