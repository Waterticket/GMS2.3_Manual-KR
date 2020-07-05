rh._.exports({"0":["ds_list_read"],"1":["ds_list_read"],"2":["ds_list_read"],"3":["\n  ","\n  ","\n  ","With this function you can recreate a saved DS list (one that has previously been written as a string using ","ds_list_write()","). You must first create a new DS list to read the string into, and if the DS list already\n    exists and has information stored in it, then this will be cleared before reading. This function is of vital importance when creating save/load mechanisms for your game.Note that if the data structure was created with previous versions of ","GameMaker","    you should add the optional argument \"legacy\", setting it to ","true"," as the string format has changed with this version.","\n  "," ","\n  ","\n  ","ds_list_read(id, str [, legacy]);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the data structure to read into.","\n      ","\n      ","\n        ","str","\n        ","The string to read from.","\n      ","\n      ","\n        ","legacy (","optional",")","\n        ","Can be either ","true"," or ","false"," or omitted completely.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","list = ds_list_create();"," ini_open(\"save.ini\");\n    "," var str = ini_read_string(\"Lists\", \"0\", \"\");"," if str != \"\"","     {\n    ","     ds_list_read(list, str);","     }\n    "," ini_close();\n  ","\n  ","The above code creates a list and stores the index in the variable \"list\". It then opens an ","ini"," file and reads a string from that, checking to make sure that the string is not returned as empty first. This string is then read into\n    the newly created ds_list.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Lists","\n        ","Next: ","ds_list_write","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_list_read"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1789"})