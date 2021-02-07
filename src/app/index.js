const gkm = require('gkm');
const AudioStreamMeter = require('audio-stream-meter');

const exportable = require('../app/twitchAuth.js');

const character = document.getElementById('character');

// Tesing twitch auth file
exportable.doSomething(window);

// Set window to always on top (This helps with some games)
nw.Window.get().setAlwaysOnTop(true);

// Get app version
document.getElementById('app-title').innerText += ' ' + nw.App.manifest.version;

// === Decibel Meter Logic ===
navigator.mediaDevices.getUserMedia({audio:true})
  .then((stream) => {
    let audioContext = new AudioContext();
    let mediaStream = audioContext.createMediaStreamSource(stream);
    let audioConfig = { volumeFall: 0.2 };

    let meter = AudioStreamMeter.audioStreamProcessor(audioContext, function() {
        volume.style.width = meter.volume * 100 + '%';
        volume.innerText = meter.volume.toString();

        if (meter.volume >= 0.3) {
          character.src = '../images/pigeon5.png';
        } else if (meter.volume >= 0.15) {
          character.src = '../images/pigeon4.png';
        } else if (meter.volume >= 0.07) {
          character.src = '../images/pigeon3.png';
        } else if (meter.volume >= 0.02) {
          character.src = '../images/pigeon2.png';
        } else {
          character.src = '../images/pigeon1.png';
        }
    }, audioConfig);

    mediaStream.connect(meter);
    stream.onended = meter.close.bind(meter);
});

function wasdLogic () {
  let top = 0;
  let left = 0;
  let keyList = [];

  gkm.events.on('key.*', function (data) {
    if (this.event + data == 'key.pressedW' && !keyList.includes('W')) {
      top = top - 20;
      left = left - 20;
      keyList.push('W');
      character.style.top = (top - 20).toString() + 'px';
      character.style.left = left.toString() + 'px';
      character.style.height = '250px';
      doSomething.doSomething();
    } else if (this.event + data == 'key.releasedW') {
      top = top + 20;
      left = left + 20;
      wActive = false;
      arrayRemove('W');
      character.style.top = top.toString() + 'px';
      character.style.left = left.toString() + 'px';
      character.style.height = '200px';
    } else if (this.event + data == 'key.pressedS' && !keyList.includes('S')) {
      top = top + 20;
      left = left + 20;
      keyList.push('S');
      character.style.top = top.toString() + 'px';
      character.style.left = left.toString() + 'px';
      character.style.height = '150px';
    } else if (this.event + data == 'key.releasedS') {
      top = top - 20;
      left = left - 20;
      arrayRemove('S');
      character.style.top = top.toString() + 'px';
      character.style.left = left.toString() + 'px';
      character.style.height = '200px';
    } else if (this.event + data == 'key.pressedA' && !keyList.includes('A')) {
      left = left - 20;
      keyList.push('A');
      character.style.left = left.toString() + 'px';
    } else if (this.event + data == 'key.releasedA') {
      left = left + 20;
      arrayRemove('A');
      character.style.left = left.toString() + 'px';
    } else if (this.event + data == 'key.pressedD' && !keyList.includes('D')) {
      left = left + 20;
      keyList.push('D');
      character.style.left = left.toString() + 'px';
    } else if (this.event + data == 'key.releasedD') {
      left = left - 20;
      arrayRemove('D');
      character.style.left = left.toString() + 'px';
    }
  });
}
wasdLogic();

function arrayRemove (value) {
  let index = keyList.indexOf(value);
  if (index >= 0) {
    keyList.splice(index, 1);
  }
};
