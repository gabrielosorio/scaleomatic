// Creates the Audio Context
var context;
window.addEventListener('load', init, false);
function init() {
  try {
    context =  new webkitAutioContext();
  } catch(e) {
    throw "Your browser doesn't support Audio Context."
  }
}
