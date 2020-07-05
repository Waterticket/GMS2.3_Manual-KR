rh._.exports({"0":["directory_exists"],"1":["directory_exists"],"2":["directory_exists"],"3":["\n  ","\n  ","\n  ","This function will return ","true"," if the indicated directory exists or ","false"," if it does not. The specified name must include the full path, not a relative path and by default you cannot access any directories from out-with the game bundle\n    as all games are sandboxed (see the section on the ","File System"," for more information).","\n  "," ","\n  ","\n  ","directory_exists(dname)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","dname","\n        ","The name of the directory to look for.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if directory_exists(working_directory + \"Saves/\")","    {\n    ","    file = file_find_first(working_directory + \"Saves/*.doc\", fa_readonly);","    }\n  ","\n  ","This will check to see if the specified directory exists then, if it does, go there and return the first \"read only\" ","doc"," file found.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Directories","\n        ","Next: ","directory_create","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["directory_exists"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2391"})