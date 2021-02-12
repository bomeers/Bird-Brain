const gkm = require('gkm');
const googleTTS = require('google-tts-api');
const AudioStreamMeter = require('audio-stream-meter');
const keyLogic = require('../app/keyLogic.js');
const mouseLogic = require('../app/mouseLogic.js');
const win = nw.Window.get();

const character = document.getElementById('character');
var pupil = document.getElementsByClassName('pupil');
var eyes = document.getElementsByClassName('test-eyes');

win.setAlwaysOnTop(true);
win.showDevTools();
document.getElementById('app-title').innerText += ' ' + nw.App.manifest.version;

// === Decibel Meter Logic ===
try {
  navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    let audioContext = new AudioContext();
    let mediaStream = audioContext.createMediaStreamSource(stream);
    var volume = document.getElementById('volume');
    let audioConfig = { volumeFall: 0.2 };

    let meter = AudioStreamMeter.audioStreamProcessor(audioContext, function () {
      volume.style.width = meter.volume * 100 + '%';
      volume.innerText = meter.volume;
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
}
catch (error) { console.error(error); }

// === WASD | Mouse Logic ===
try {
  gkm.events.on('mouse.moved', function (data) {
    mouseLogic.mouseMove(data, pupil);
    document.getElementById("demo").innerText = this.event + ' ' + data;
  });

  gkm.events.on('key.*', function (data) {
    keyLogic.keyPress(this.event, data, character, eyes);
  });
}
catch (error) { console.error(error); }

// === Text To Speech Logic ===
win.on('focus', function () {
  console.log('This window is focused');
});

const url = googleTTS.getAudioUrl('Testing google tts', {
  lang: 'en-US',
  slow: false,
  host: 'https://translate.google.com',
});
console.log(url);