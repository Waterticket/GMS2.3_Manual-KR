rh._.exports({"0":["path_get_name"],"1":["path_get_name"],"2":["path_get_name"],"3":["\n  ","\n  ","\n  ","This function will return the name of the path that is referenced as a string. The name is whatever has been used to define the path in the editor or (if the path has been created through a code function) it will return a string with the format \"\n    ","_newpathXX","\" where \"","XX","\" is the number of the path generated, starting at 0 and incrementing by one every time a new path is created. Please note that this is ","only"," a\n      string and cannot be used to reference the path directly - for that you would need the ","path index ID",". You can, however, use this string to get the ","path index ID"," using the returned string along\n      with the function ","asset_get_index()",".","\n  "," ","\n  ","\n  ","path_get_name(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the path to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","path_name = path_get_name(path_array[0]);","\n  ","This will set \"path_name\" to the name of the path indexed in the given array at position 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Paths","\n        ","Next: ","path_get_number","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["path_get_name"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"759"})