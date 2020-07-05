rh._.exports({"0":["Get Gamepad Axis"],"1":["DnD™ Action - Get Gamepad Axis"],"2":["Get Gamepad Axis"],"3":["\n  ","\n  ","\n  ","You can use this action to get the value of the different axes from a given gamepad. You supply the gamepad index (this is the number of \"slot\" that a gamepad occupies) and select the axis to check from either the left or right stick, horizontal\n    or vertical. The value returned will be between -1 and 1 for each of the available horizontal and vertical axes: -1 is left and 1 is right for horizontal axis, and -1 is up and 1 is down for the vertical axis. This returned value will be stored in\n    the target variable that you supply for future use, which you can flag as a \"Temp\" variable, meaning that the action will create a new temporary (local) variable to hold the return value for you, as shown in the example below.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Gamepad","\n        ","The gamepad index.","\n      ","\n      ","\n        ","Axis","\n        ","The axis to check (left stick/right stick, horizontal/vertical)","\n      ","\n      ","\n        ","Target","\n        ","The target variable to store the returned value in.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code creates two local (temporary) variables and then stores the current\n    values for the horizontal and vertical axis of the gamepad left stick. These values are then used to set the direction of the instance.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Actions","\n        ","Next: ","Gamepad Get Trigger","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Get Gamepad Axis"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"227"})