const gkm = require('gkm');
const AudioStreamMeter = require('audio-stream-meter');
const keyLogic = require('../app/keyLogic.js');
const character = document.getElementById('character');

// Set window to always on top (This helps with some games)
nw.Window.get().setAlwaysOnTop(true);

// Get app version
document.getElementById('app-title').innerText += ' ' + nw.App.manifest.version;

// === Decibel Meter Logic ===
navigator.mediaDevices.getUserMedia({ audio: true })
  .then((stream) => {
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

// === WASD Logic ===
gkm.events.on('key.*', function (data) {
  keyLogic.doSomething(this.event, data, character);
});
