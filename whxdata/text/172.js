rh._.exports({"0":["Set Global Variable"],"1":["DnD™ Action - Set Global Variable"],"2":["Set Global Variable"],"3":["\n  ","\n  ","\n  ","This action is used to either assign a global variable a value (creating it in the process) or for changing the value of an existing global variable. Global variables are variables that \"belong\" to no specific instance, but rather the whole\n    project, and as such can be accessed and changed by any instance, script or code. For more advanced information on global variables please see ","here",".","\n  ","You give the name of the global variable and then the value, which can be added ","relative"," to the original value if required. If you give a new variable name (ie: a variable that has never been assigned previously in the entire game) then this\n    will create the new global variable and assign it the value you give, while if you give the name of an existing global variable, it will simply change the value to the new one. Note that checking ","Relative"," will add the value to the existing\n    global variable value (use a negative number to subtract) and you can also use ","expression","s"," and variables created previously as the value.","\n  ","It is worth noting that when we talk about \"values\", we don't just mean numeric values, as a variable can be a string, a pointer, a resource ID or anything else that a function can return or use. In the case of a string, checking ","Relative","    will concatenate the value with whatever the variable previously held, so if your variable was \"Hello\" and you assign \" World\" to it using the relative check, the final variable value will be \"Hello World\". Care must\n    be taken, however, to ensure that the variable values are both of the same ","data type",", as trying to add, for example, an integer and a string, will result in a compiler error.","\n  ","You can also add additional variables in the same action by clicking the plus icon"," "," beside the action, and giving another global variable\n    name and value. For more advanced information on variables please see the section on ","Variables And Variable Scope",".","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Name","\n        ","The name of the new global variable to create, or the name of an existing global variable to change.","\n      ","\n      ","\n        ","Value","\n        ","The value that the global variable should hold.","\n      ","\n      ","\n        ","Relative","\n        ","Check this to set the value relative to the previous one.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code checks for a collision between the calling instance and the object\n    \"","obj_player","\", and if one is found 1 is subtracted from the global variable \"","player_hp","\" and the global variable \"","player_score","\" is set\n    to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Common Actions","\n        ","Next: ","Get Global Variable","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Set Global Variable"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"172"})