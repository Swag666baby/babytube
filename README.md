# babytube
babytube is a pytube based library to get data from a given youtube video, download it or just the audio. 

# installation 
```
npm install babytube
```

# examples
to get data from a video like description, title, duration, thumbnail and stuff like that use the **getData** method.

**async:**
```
const babytube = require("babytube");
const response = babytube.getData("https://www.youtube.com/watch?v=h3EJICKwITw");
console.log(response)
```
**not async:** 
```
const babytube = require("babytube")

babytube.getData('https://www.youtube.com/watch?v=h3EJICKwITw').then((data) => {
    console.log(data); 
})
```
# 
to download some music use the **musicDownload** method. 
```
const babytube = require("babytube");
babytube.musicDownload("https://www.youtube.com/watch?v=h3EJICKwITw");
```
or to download the video 
```
const babytube = require("babytube");
babytube.videoDownload("https://www.youtube.com/watch?v=h3EJICKwITw");
```
