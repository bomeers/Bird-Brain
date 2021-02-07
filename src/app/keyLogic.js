var top = 0;
var left = 0;
var keyList = [];

function doSomething (event, data, character) {
  if (event + data == 'key.pressedW' && !keyList.includes('W')) {
    top = top - 20;
    left = left - 20;
    keyList.push('W');
    character.style.top = (top - 20).toString() + 'px';
    character.style.left = left.toString() + 'px';
    character.style.height = '250px';
    exportable.doSomething(window);
  }
  else if (event + data == 'key.releasedW') {
    top = top + 20;
    left = left + 20;
    wActive = false;
    arrayRemove('W');
    character.style.top = top.toString() + 'px';
    character.style.left = left.toString() + 'px';
    character.style.height = '200px';
  }
  else if (event + data == 'key.pressedS' && !keyList.includes('S')) {
    top = top + 20;
    left = left + 20;
    keyList.push('S');
    character.style.top = top.toString() + 'px';
    character.style.left = left.toString() + 'px';
    character.style.height = '150px';
  }
  else if (event + data == 'key.releasedS') {
    top = top - 20;
    left = left - 20;
    arrayRemove('S');
    character.style.top = top.toString() + 'px';
    character.style.left = left.toString() + 'px';
    character.style.height = '200px';
  }
  else if (event + data == 'key.pressedA' && !keyList.includes('A')) {
    left = left - 20;
    keyList.push('A');
    character.style.left = left.toString() + 'px';
  }
  else if (event + data == 'key.releasedA') {
    left = left + 20;
    arrayRemove('A');
    character.style.left = left.toString() + 'px';
  }
  else if (event + data == 'key.pressedD' && !keyList.includes('D')) {
    left = left + 20;
    keyList.push('D');
    character.style.left = left.toString() + 'px';
  }
  else if (event + data == 'key.releasedD') {
    left = left - 20;
    arrayRemove('D');
    character.style.left = left.toString() + 'px';
  }
}

function arrayRemove(value) {
  let index = keyList.indexOf(value);
  if (index >= 0) {
    keyList.splice(index, 1);
  }
};

module.exports = {
  doSomething
};
