rh._.exports({"0":["script_exists"],"1":["script_exists"],"2":["script_exists"],"3":["\n  ","\n  ","\n  ","This function will return ","true"," or ","false"," depending on whether the script or ","script function"," with the given index exists. Note,\n    that this is ","not"," a string, but rather the asset name which holds the unique index for each script (as it would appear in the IDE) or the script function name variable, as defined within the script asset (note that\n    this will not work for ","method variables","). For more information on scripts, see ","The Script Editor",".","\n  "," ","\n  ","\n  ","script_exists(scr);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","scr","\n        ","The name of the script that you want to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","script[0] = -1;"," script[1] = AI_Left;"," script[2] = AI_Right;"," var script_num = choose(0, 1, 2);"," if script_exists(script[script_num])","     {\n    ","     script_execute(script[script_num]);\n    ","     }\n  ","\n  ","The above example adds two script functions and a value into an array, then proceeds to get a random number and use that to choose a script function to run, unless the -1 is chosen in which case nothing will happen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Scripts","\n        ","Next: ","script_get_name","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["script_exists"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"798"})