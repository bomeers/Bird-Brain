var gkm = require('gkm');
var pjson = require('../package.json');
var character = document.getElementById("change-me");


document.getElementById("app-title").innerText += " " + pjson.version;

gkm.events.on('key.*', function (data) {

  if (data == "W") { character.innerText = "W" }
  else if (data == "A") { character.innerText = "A" }
  else if (data == "S") { character.innerText = "S" }
  else if (data == "D") { character.innerText = "D" }

  if (this.event == "key.released") { character.innerText = "nothing pressed"; }
});