from pytube import YouTube
import sys
link = sys.argv[1]
yt = YouTube(link)
stream = yt.streams.get_audio_only()
stream.download(filename=music.mp3)