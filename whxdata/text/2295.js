rh._.exports({"0":["steam_file_share"],"1":["steam_file_share"],"2":["steam_file_share"],"3":["\n  ","\n  ","\n  ","With this function you can force your game to synchronise the given file with the Steam Cloud. This is not normally necessary due to the fact that the game will synchronise automatically at the end of the player's session, nor is it recommended\n    by Steam, but it can be useful to ensure sensitive information is synchronised immediately. The function will return a value of 0 if it fails for whatever reason and a value greater than 0 if it succeeds.","\n  "," ","\n  ","\n  ","steam_file_share(filename);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","filename","\n        ","The name of the file synchronise.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if !steam_file_persisted(\"Save.txt\")","     {\n    ","     steam_file_share(\"Save.txt\");\n    ","     }\n  ","\n  ","The above code will check to see if a file has been stored to the Steam Cloud, and if it has not it will then synchronise it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Steam Cloud","\n        ","Next: ","steam_file_delete","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_file_share"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2295"})