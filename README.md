# Bird Brain


### A small NW.js desktop app used to animate illustrated images.

<br>

***Note:** if you are running jdk v15 or later, this application may not work on startup. Follow the steps in "JDK v15 Workaround" section*

*To start the application, run this:*

```
npm install
npm start
```

<br>

---

### Requirements

- [Oracle JDK](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html)
- [jnativehook.zip](https://github.com/kwhat/jnativehook/releases/tag/2.1.0) (for JDK v15 or later)

<br>

---
### JDK v15 Workaround



1. Download [jnativehook-2.1.0.zip](https://github.com/kwhat/jnativehook/releases/tag/2.1.0)
2. Open `jnativehook-2.1.0.zip` and navigate to `jnativehook\jar\jnativehook-2.1.0.jar`
3. Extract `jnativehook-2.1.0.jar` to `<project-path>\node_modules\gkm\lib\lib\`
4. Delete file `JNativeHook.jar` in `<project-path>\node_modules\gkm\lib\lib\`
5. Re-name `jnativehook-2.1.0.jar` to `JNativeHook.jar`

<br>

---

### Future Goals

* [Add twitch events](https://dev.twitch.tv/docs/eventsub)
* Add animated images instead of still image
* [Speech bubble TTS when typing with window in focus](https://www.npmjs.com/package/google-tts-api)
* [React to mouse capture](https://www.npmjs.com/package/gkm)
* Faster you type, the more the bird sweats
* Find a way to build application into .exe format ("nw-builder": "^3.5.7" no longer works with node v15)
* move to [iohook](https://www.npmjs.com/package/iohook) to replace gkm
