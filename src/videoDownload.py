from pytube import YouTube
import sys
link = sys.argv[1]
file = sys.argv[2]
yt = YouTube(link)
stream = yt.streams.get_highest_resolution()
stream.download(filename=str(file))