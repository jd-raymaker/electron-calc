const numbers = require('./numbers.js');
const hotkeys = require('hotkeys-js');

// gather element IDs
const sidebar = document.getElementById("sidebar");
const history = document.getElementById("history");
const display = document.getElementById("display");

function push_number(val) {
  // Display data on display
  history.innerHTML = numbers.push(val);
  display.innerHTML = numbers.result();
}

function clear_number() {
  history.innerHTML = numbers.clear();
  display.innerHTML = numbers.clear();
}

function operator(op) {
  history.innerHTML = numbers.operators(op);
}

// Open Sidebar
function sidebar_open() {
  sidebar.style.width = "40%";
  sidebar.style.fontSize = "40px";
  sidebar.style.paddingTop = "10%";
  sidebar.style.display = "block";
}

// Close Sidebar
function sidebar_close() {
  sidebar.style.display = "none";
}

// Capture number keys
hotkeys('1,2,3,4,5,6,7,8,9,0', { keyup: true }, function(evn, handler){
  if(evn.type === 'keyup') { push_number(handler.key) }
});
