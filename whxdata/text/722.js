rh._.exports({"0":["audio_group_load"],"1":["audio_group_load"],"2":["audio_group_load"],"3":["\n  ","\n  ","\n  ","This function will load all the sounds that are flagged as belonging to the given Audio Group into memory. The function will return ","true"," if loading is initiated and ","false"," if the group\n    ID is invalid, or it has already been flagged for loading. The function is asynchronous so your game will continue to run while the audio is loaded in the background. This means that it will also trigger an ","Asynchronous Load/Save Event"," to\n    inform you that the whole group has been loaded into memory and the sounds can now be used.","\n  "," ","\n  ","\n  ","audio_group_load(groupID);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","groupID","\n        ","The index of the audio group to load (as defined in the ","Audio Groups Window",")","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if !audio_group_is_loaded(audiogroup_level1)","    {\n    ","    audio_group_load(audiogroup_level1);\n    ","    }\n  ","\n  ","The above code checks to see if an audio group has been loaded and if not, it loads it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Groups","\n        ","Next: ","audio_group_unload","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_group_load"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"722"})