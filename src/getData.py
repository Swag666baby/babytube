from pytube import YouTube
import json
import sys
link = sys.argv[1]
data = {
    "title": YouTube(link).title,
    "description": YouTube(link).description, 
    "author": YouTube(link).author, 
    "publish_date": str(YouTube(link).publish_date),
   "length": str(YouTube(link).length),
   "views": str(YouTube(link).views),
   "thumbnail": YouTube(link).thumbnail_url
}
print(json.dumps(data))