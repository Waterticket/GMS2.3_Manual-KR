rh._.exports({"0":["audio_group_name"],"1":["audio_group_name"],"2":["audio_group_name"],"3":["\n  ","\n  ","\n  ","This function will return a string containing the name of the given audio group for displaying or checking. When you define an audio group in the Game Options, you give it a unique \"name\" which is really a constant to use as an ID ","v","alue\n    for the group. All this function does is take the ID and return a string of the ID name you gave.","\n  "," ","\n  "," ","\n  ","\n  ","audio_group_name(groupID);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","groupID","\n        ","The index value constant of the audio group to check (as defined in the ","Audio Groups Window",")","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","var name= audio_group_name(audiogroup_level1);"," draw_text(32, 32, \"Now Playing Group: \" + name);","\n  ","The above code retrieves the name of the given audio group constant and displays it on the screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Groups","\n        ","Next: ","audio_group_stop_all","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_group_name"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"730"})