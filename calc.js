const renderer = require('./renderer.js');
const hotkeys = require('hotkeys-js');

// gather element IDs
const sidebar = document.getElementById("sidebar");
const history = document.getElementById("history");
const display = document.getElementById("display");

function insert_number(val) {
  // Display data on display
  history.innerHTML = renderer.number(val);
  display.innerHTML = renderer.result();
}

function clear_number() {
  history.innerHTML = renderer.clear();
  display.innerHTML = renderer.clear();
}

function operator(op) {
  history.innerHTML = renderer.operators(op);
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
  if(evn.type === 'keyup') { insert_number(handler.key) }
});
