import random
import os
import playsound


def get_random_soundfx():
    music_dir = './sound_effects'
    songs = os.listdir(music_dir)
    song = random.choice(songs)
    output = os.path.join(song)
    newoutput = str(output.rstrip())
    print(newoutput)
    playsound.playsound("./sound_effects/"+newoutput)


get_random_soundfx()
