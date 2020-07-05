rh._.exports({"0":["audio_emitter_exists"],"1":["audio_emitter_exists"],"2":["audio_emitter_exists"],"3":["\n  ","\n  ","\n  ","This function returns whether an audio emitter exists (","true",") or not (","false","). Note that if the index you search for has not been initialised previously, this function will cause an error as it is searching for non-existent indices.","\n  "," ","\n  ","\n  ","audio_emitter_exists(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the emitter to check the existence of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if audio_emitter_exists(s_emit)","    {\n    ","    audio_play_sound_on(s_emit, snd_Explode, false, 1);","    }\n    "," else\n    ","    {\n    ","    s_emit = audio_emitter_create();","    audio_play_sound_on(s_emit, snd_Explode, false, 1);","    }\n  ","\n  ","The above code checks to see if an emitter exists, indexed in the (previously initialised) variable \"s_emit\". If it does then a sound is played through it, but if it does not, it is created and then the sound is played.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Emitters","\n        ","Next: ","audio_emitter_position","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_emitter_exists"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"695"})