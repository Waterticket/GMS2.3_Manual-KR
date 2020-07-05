rh._.exports({"0":["gml_release_mode"],"1":["gml_release_mode"],"2":["gml_release_mode"],"3":["\n  ","\n  ","\n  ","When your game is compiled, it also includes certain internal functions to error check while running. These internal checks cover many aspects of a games code, including ranges, parameters and some general aspects of the internal GML compiler and are\n    what spawn the final error messages in many cases. However this function can be used to switch these internal checks off (ie: remove them completely from the compiled game), giving a speed boost to your final project.","\n  ","Please note that this means that should you do something in your game code that is incorrect, the compiled game ","may simply crash",", or it may experience some ","very unexpected behaviour",". For example, if a ","DS Grid"," is accessed at a\n    coordinate outside of the defined size, in developer mode you would get a compiler window error message but the checks in place would permit the game to continue running. However in release mode these checks will not be there and so the code could\n    return either a NULL pointer, or a bad pointer which in turn will point to some random memory. So at best you could get the wrong data returned, or at worst you could overwrite something in memory - data, graphics, or even code itself. Another example\n    would be when building primitives - if you supply the colour, position, texture, etc... data in a different order to that which you defined when you created the vertex format, then the game may crash or produce unexpected results when release mode\n    is on.","\n  "," ","\n  ","\n  ","gml_release_mode(flag);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","flag","\n        ","Either ","true"," to set release mode or false for general development.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","gml_release_mode(true);","\n  ","The above example code will set the game to use release mode when compiled.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","OS And Compiler","\n        ","Next: ","gml_pragma","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gml_release_mode"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2538"})