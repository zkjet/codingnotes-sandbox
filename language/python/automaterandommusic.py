import random
import os
import playsound


def get_random_song():
    music_dir = './tiesto_songs'
    songs = os.listdir(music_dir)
    song = random.choice(songs)
    output = os.path.join(song)
    newoutput = str(output.rstrip())
    print(newoutput)
    playsound.playsound("./tiesto_songs/"+newoutput)


get_random_song()
