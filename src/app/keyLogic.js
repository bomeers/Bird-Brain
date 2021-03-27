var top = 0;
var left = 0;
var eyeLeft = 0;
var keyList = [];

function keyPress (event, data, character, eyes, megaphone) {
  if (event + data == 'key.pressedW' && !keyList.includes('W')) {
    top = top - 20;
    left = left - 50;
    keyList.push('W');
    character.style.top = top.toString() + 'px';
    character.style.left = left.toString() + 'px';
    character.style.height = '305px';
  }
  else if (event + data == 'key.releasedW') {
    top = top + 20;
    left = left + 50;
    wActive = false;
    arrayRemove('W');
    character.style.top = top.toString() + 'px';
    character.style.left = left.toString() + 'px';
    character.style.height = '255px';
    if (keyList.length === 0) resetPigeon();
  }
  else if (event + data == 'key.pressedS' && !keyList.includes('S')) {
    top = top + 20;
    left = left + 50;
    keyList.push('S');
    character.style.top = top.toString() + 'px';
    character.style.left = left.toString() + 'px';
    character.style.height = '205px';
  }
  else if (event + data == 'key.releasedS') {
    top = top - 20;
    left = left - 50;
    arrayRemove('S');
    character.style.top = top.toString() + 'px';
    character.style.left = left.toString() + 'px';
    character.style.height = '255px';
    if (keyList.length === 0) resetPigeon();
  }
  else if (event + data == 'key.pressedA' && !keyList.includes('A')) {
    left = left - 20;
    eyeLeft = eyeLeft - 20;
    keyList.push('A');
    character.style.left = left.toString() + 'px';
    eyes[0].style.left = eyeLeft.toString() + 'px';
    eyes[1].style.left = eyeLeft.toString() + 'px';
  }
  else if (event + data == 'key.releasedA') {
    left = left + 20;
    eyeLeft = eyeLeft + 20;
    arrayRemove('A');
    character.style.left = left.toString() + 'px';
    eyes[0].style.left = eyeLeft.toString() + 'px';
    eyes[1].style.left = eyeLeft.toString() + 'px';
    if (keyList.length === 0) resetPigeon();
  }
  else if (event + data == 'key.pressedD' && !keyList.includes('D')) {
    left = left + 20;
    eyeLeft = eyeLeft + 20;
    keyList.push('D');
    character.style.left = left.toString() + 'px';
    eyes[0].style.left = eyeLeft.toString() + 'px';
    eyes[1].style.left = eyeLeft.toString() + 'px';
  }
  else if (event + data == 'key.releasedD') {
    left = left - 20;
    eyeLeft = eyeLeft - 20;
    arrayRemove('D');
    character.style.left = left.toString() + 'px';
    eyes[0].style.left = eyeLeft.toString() + 'px';
    eyes[1].style.left = eyeLeft.toString() + 'px';
    if (keyList.length === 0) resetPigeon();
  }
  else if (event + data == 'key.pressedF19') {
    megaphone.style.display = "inline";
  }
  else if (event + data == 'key.pressedF21') {
    megaphone.style.display = "none";
  }
}

function arrayRemove(value) {
  let index = keyList.indexOf(value);
  if (index >= 0) {
    keyList.splice(index, 1);
  }
};

function resetPigeon(character, eyes) {
  top = 0;
  left = 0;
  eyeLeft = 0;
  character.style.height = '255px';
  character.style.top = top.toString() + 'px';
  character.style.left = left.toString() + 'px';
  eyes[0].style.top = top.toString() + 'px';
  eyes[1].style.top = top.toString() + 'px';
  eyes[0].style.left = eyeLeft.toString() + 'px';
  eyes[1].style.left = eyeLeft.toString() + 'px';
}

module.exports = {
  keyPress,
  resetPigeon
};
