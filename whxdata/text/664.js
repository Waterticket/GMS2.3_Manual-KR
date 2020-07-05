rh._.exports({"0":["audio_play_sound"],"1":["audio_play_sound"],"2":["audio_play_sound"],"3":["\n  ","\n  ","\n  ","With this function you can play any sound resource in your game. You provide the sound index and assign it a priority, which is then used to determine how sounds are dealt with when the number of sounds playing is over the limit set by the function \n    ","audio_channel_num()",". Lower priority sounds will be stopped in favour of higher priority sounds, and the priority value can be any real number (the actual value is arbitrary, and can be from 0 to 1 or 0 to 100, as GameMaker Studio 2 will\n      prioritize them the same). Note that when dealing with priority, the ","higher"," the number the ","higher"," the priority, such that a sound with priority 100 will be favoured over a sound with\n      priority 1. The final argument is for making the sound loop and setting it to ","true"," will make the sound loop until it is stopped and setting it to ","false"," will play the sound once\n      only.","\n  ","This function will also return a unique index number for the sound being played which can then be stored in a variable so that you can then pause it or stop it with the appropriate functions. This means that if you have multiple instances of the same\n    sound playing at any one time you can target just one instance of that sound to deal with using the audio functions.","\n  "," ","\n  ","\n  ","audio_play_sound(index, priority, loop);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the sound to play.","\n      ","\n      ","\n        ","priority","\n        ","Set the channel priority for the sound.","\n      ","\n      ","\n        ","loop","\n        ","Sets the sound to loop or not.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Index (sound ID)","\n  "," ","\n  ","\n  ","if health <= 0","     {\n    ","     lives -= 1;","     audio_play_sound(snd_PlayerDead, 10, false);","     }\n  ","\n  ","The above code checks the \"health\" global variable and if it is less than or equal to 0, it will remove 1 from the \"lives\" global variable and play a sound.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_play_sound_at","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_play_sound"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"664"})