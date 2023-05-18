from pytube import YouTube
import sys
link = sys.argv[1]
file = sys.argv[2]
yt = YouTube(link)
stream = yt.streams.get_audio_only()
stream.download(filename=str(file))