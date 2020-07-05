rh._.exports({"0":["audio_group_unload"],"1":["audio_group_unload"],"2":["audio_group_unload"],"3":["\n  ","\n  ","\n  ","This function will unload all the sounds that are flagged as belonging to the given Audio Group into memory. The function will return ","true"," if unloading is initiated and ","false"," if the\n    group ID is invalid, or it has already been flagged for unloading. Note that any audio currently being played when this function is called will be stopped.","\n  "," ","\n  ","\n  ","audio_group_unload(groupID);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","groupID","\n        ","The index of the audio group to unload (as defined in the ","Audio Groups Window",")","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if audio_group_is_loaded(audiogroup_level1)","    {\n    ","    audio_group_unload(audiogroup_level1);\n    ","    }\n  ","\n  ","The above code checks to see if an audio group has been loaded and if it has it unloads it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Groups","\n        ","Next: ","audio_group_is_loaded","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_group_unload"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"727"})