const gkm = require('gkm');
const AudioStreamMeter = require('audio-stream-meter');
const keyLogic = require('../app/keyLogic.js');
const mouseLogic = require('../app/mouseLogic.js');
const character = document.getElementById('character');
const win = nw.Window.get();

win.setAlwaysOnTop(true);
win.showDevTools();
document.getElementById('app-title').innerText += ' ' + nw.App.manifest.version;

// === Decibel Meter Logic ===
navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  let audioContext = new AudioContext();
  let mediaStream = audioContext.createMediaStreamSource(stream);
  let audioConfig = { volumeFall: 0.2 };

  let meter = AudioStreamMeter.audioStreamProcessor(audioContext, function () {
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

// === WASD | Mouse Logic ===
var pupil = document.getElementsByClassName('pupil');
var eyes = document.getElementsByClassName('test-eyes');

gkm.events.on('mouse.moved', function (data) {
  var mousePosition = data.toString().split(',');
  pupil[0].style.top = mousePosition[1] / (window.screen.height / 30) + "px";
  pupil[0].style.left = mousePosition[0] / (window.screen.width / 30) + "px";
  pupil[1].style.top = mousePosition[1] / (window.screen.height / 30) + "px";
  pupil[1].style.left = mousePosition[0] / (window.screen.width / 30) + "px";

  document.getElementById("demo").innerText = this.event + ' ' + data;
});

gkm.events.on('key.*', function (data) {
  keyLogic.keyPress(this.event, data, character, eyes);
});

// === Text To Speech Logic ===
win.on('focus', function () {
  console.log('This window is focused');
});