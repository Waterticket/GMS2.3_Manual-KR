rh._.exports({"0":["audio_is_paused"],"1":["audio_is_paused"],"2":["audio_is_paused"],"3":["\n  ","\n  ","\n  ","This function will check the given sound to see if it is currently paused. The sound can either be a single instance of a sound (the index for individual sounds being played can be stored in a variable when using the ","audio_play_sound()"," or\n    ","audio_play_sound_at()"," functions) or a sound asset, in which case ","all"," instances of the given sound will be checked and if any of them are paused the function will return ","true"," otherwise\n      it will return ","false",".","\n  "," ","\n  ","\n  ","audio_is_paused(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the sound to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if audio_is_paused(snd_Waterfall)","    {\n    ","    audio_resume_sound(snd_Waterfall);\n    ","    }\n  ","\n  ","The above code checks to see if the sound indexed in the variable \"snd_Waterfall\" is currently paused and if it returns ","true"," then the playing of the sound will be resumed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_create_stream","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_is_paused"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"673"})