rh._.exports({"0":["highscore_name"],"1":["highscore_name"],"2":["highscore_name"],"3":["\n  ","\n  ","\n  ","With this function you can retrieve the name string that has been stored in the high score list at the given position. If no name has been entered, the string \"Unknown\" will be returned.","\n  "," ","\n  ","\n  ","highscore_name(place);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","place","\n        ","The place on the table (1-10).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","var i = 9;"," repeat(10)\n    ","     {\n    ","     name[i] = highscore_name(i + 1);","     i -= 1;","     }\n  ","\n  ","The above code will loop through the high score list and store all the names in an array.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Game Control","\n        ","Next: ","highscore_value","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["highscore_name"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1144"})