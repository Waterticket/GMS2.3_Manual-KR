rh._.exports({"0":["position_change"],"1":["position_change"],"2":["position_change"],"3":["\n  ","\n  ","\n  ","This function will check a position for a collision with ","any instances"," at the given point, and if there is one, it will change ","all"," instances in collision to be instances of the chosen object. You can set the \"perf\" argument to\n    ","true"," which will force GameMaker Studio 2 to perform the ","Destroy"," and ","Clean Up"," events of the found instance as well as the ","Create"," event of the new instance, or ","false"," to not\n    perform any of these events. Please note, that if you choose not to perform the Destroy, Clean Up and Create events, any instance created that uses a variable normally defined in the create event will crash the game as that variable will no longer\n    exist.","\n  "," ","\n  ","\n  ","position_change(x, y, obj, perf);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of where to change colliding instances.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of where to change colliding instances.","\n      ","\n      ","\n        ","obj","\n        ","The new object the calling object will change into.","\n      ","\n      ","\n        ","perf","\n        ","Whether to perform that new object's Create event (true) or not (false).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","position_change(200, 200, obj_Bird, true);","\n  ","This will change all instances colliding at point (200,200) into an instance of \"obj_Bird\", performing \"obj_Bird\"s Create event for each of them in the process.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Collisions","\n        ","Next: ","position_destroy","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["position_change"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1191"})