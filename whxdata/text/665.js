rh._.exports({"0":["audio_pause_sound"],"1":["audio_pause_sound"],"2":["audio_pause_sound"],"3":["\n  ","\n  ","\n  ","With this function you can pause any sound that is currently playing. The sound can either be a single instance of a sound (the index for individual sounds being played can be stored in a variable when using the ","audio_play_sound()"," or \n    ","audio_play_sound_at()"," functions) or a sound asset, in which case ","all"," instances of the given sound will be paused.","\n  "," ","\n  ","\n  ","audio_pause_sound(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the sound to pause.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if keyboard_check_pressed(ord(\"P\"))","    {\n    ","    global.Pause = !global.Pause;","    if global.Pause","       {\n    ","       audio_pause_sound(snd_Waterfall);\n    ","       }\n    ","    else\n    ","       {\n    ","       audio_resume_sound(snd_Waterfall);\n    ","       }\n    ","    }\n  ","\n  ","The above code checks for a press of the keyboard key \"P\" and if it detects one it sets the global variable \"Pause\" to ","true"," or false and then either pauses the sound indexed in the variable \"snd_Waterfall\"\n    or it resumes the sound from its paused state.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_pause_all","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_pause_sound"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"665"})