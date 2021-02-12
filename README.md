# Bird Brain


### A small NW.js desktop app used to animate illustrated images.

<br>

***Note:** if you are running jdk v15 or later, this application may not work on startup. Follow the steps in "JDK v15 Workaround" section*

*To start the application, run this:*

```
npm install
npm start
```

---

### Requirements

- [Oracle JDK](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html)

---

### JDK v15 Workaround

*if you are using Oracle JDK v15 or later, run this script:*
```
npm run gkm-update
```

---

### Future Goals

* [Add twitch events](https://dev.twitch.tv/docs/eventsub)
* Add animated images instead of still image
* [Speech bubble TTS when typing with window in focus](https://www.npmjs.com/package/google-tts-api)
* Faster you type, the more the bird sweats (sprite sheet)
* Find a way to build application into .exe format ("nw-builder": "^3.5.7" no longer works with node v15)
* find keyboard/mouse hook to replace gmk (removes need for JDK)
