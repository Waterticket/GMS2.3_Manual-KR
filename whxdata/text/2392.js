rh._.exports({"0":["working_directory"],"1":["working_directory"],"2":["working_directory"],"3":["\n  ","\n  ","\n  ","Working_directory"," can actually return two different values depending on what you are using it for. If you are writing a file to disk, ","working_directory"," points to the area of local storage that is reserved for your game on the target\n    device (in windows this is \"","%LOCALAPPDATA%/gamedir/","\" where the \"gamedir\" is the directory with the name of your game). However, when reading from disk, ","working_directory"," can be ","either","    the local storage ","or"," the area where the included files are stored.","\n  ","NOTE",": The ","working_directory"," variable will return the path ","including"," the final backslash.","\n  ","For example, if you have a default ","*.txt"," file included with your game and read it into memory using ","working_directory",", then that file will be taken from the area where the included files are stored. If you then choose to write that\n    information to a text file using ","working_directory",", this will write the file to the target platforms local storage, where it will be read from the next time unless you instruct GameMaker Studio 2 to delete the file, in which case ","working_directory","    will once more point to the area where the included files are stored.","\n  ","It is worth noting that ","in general"," you do not need to use this and simply calling the file name (plus any additional path information) is sufficient, for example this:","\n  ","file_text_open_read(working_directory + \"my_file.txt\");","\n  ","would be better done as this:","\n  ","file_text_open_read(\"my_file.txt\");","\n  ","WARNING!"," This function may not work as you expect due to GameMaker Studio 2 being sandboxed! Please see the section on the ","File System"," for more information.","\n  "," ","\n  ","\n  ","working_directory","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","ini_open(working_directory + \"temp_ini.ini\");","\n  ","This will open an ini file from the working directory of the game (creating it if it does not already exist). This could be the local storage, or the area where the included files are depending on whether the file being looked for exists in either place.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Directories","\n        ","Next: ","program_directory","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["working_directory"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2392"})