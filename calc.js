// include renderer
const renderer = require('./renderer.js');

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
  renderer.clear();
  display.innerHTML.trim();
  history.innerHTML.trim();
  display.innerHTML = 0;
  history.innerHTML = 0;
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