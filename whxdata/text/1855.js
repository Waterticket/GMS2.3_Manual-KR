rh._.exports({"0":["ds_stack_destroy"],"1":["ds_stack_destroy"],"2":["ds_stack_destroy"],"3":["\n  ","\n  ","\n  ","This function will remove the given stack data-structure from memory, freeing up the resources it was using and removing all values that it contained. This function should always be used when you are finished using the DS stack to prevent memory leaks\n    that can slow down and crash your game.","\n  ","IMPORTANT!"," When you create a data structure, the index value to identify it is an integer value starting at 0. This means that data structures of different types can have the ","same"," index value, so if in doubt you should be using the\n    ","ds_exists()"," function before accessing them. Also note that indices are re-used, so a destroyed data structure index value may be used by a newly created one afterwards so we recommend\n      always setting the variable that held the DS index to -1 after destroying.","\n  "," ","\n  ","\n  ","ds_stack_destroy(id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the data structure to remove.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if (lives == 0)","     {\n    ","     ds_stack_destroy(AI_stack);\n    ","     AI_stack = -1;","     room_goto(rm_Menu);\n    ","     }\n  ","\n  ","The above code will check the value of the built in global variable \"lives\" and if it is 0, it destroys the DS stack indexed in the variable \"AI_stack\" and then changes rooms.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","ds_stack_create","\n        ","Next: ","ds_stack_clear","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_stack_destroy"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1855"})