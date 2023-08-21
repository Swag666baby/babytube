# babytube

babytube is a pytube based library to get data from a given youtube video, download it or just the audio. 

# necessary 
you need python3 and (obviously) nodejs installed on your machine. 

# installation 
```
npm install babytube
```

# examples
to get data from a video like description, title, duration, thumbnail and stuff like that use the **getData** method.

```javascript 
const babytube = require("babytube")

babytube.getData('https://www.youtube.com/watch?v=VIDEO_ID').then((data) => {
    console.log(data); 
})
```
# 
to download some music use the **musicDownload** method. 
```javascript 
const babytube = require("babytube")

babytube.musicDownload('https://www.youtube.com/watch?v=VIDEO_ID', 'FILENAME.mp3').on('finish', () => {
    console.log("completed download.")
})
```
or to download the video 
```javascript 
const babytube = require("babytube")

babytube.videoDownload('https://www.youtube.com/watch?v=VIDEO_ID', 'FILENAME.mp4').on('finish', () => {
    console.log("completed download.")
})
```
