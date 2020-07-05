rh._.exports({"0":["instance_create_layer"],"1":["instance_create_layer"],"2":["instance_create_layer"],"3":["\n  ","\n  ","\n  ","With this function you can create a new instance of the specified object at any given point within the room and on the layer specified. The layer can be identified using the layer ID value (as returned by the function ","layer_create()",")\n    or by the name of the layer (as a string, for example \"instance_layer\") as defined in the ","room editor",".","\n  ","This function returns the ","id"," of the new instance which can then be stored in a variable or used to access that instance. Note that this function will also call the ","Create Event","    of the instance being created ","before"," continuing with the code or actions for the event that called the function.","\n  ","IMPORTANT!"," There is a minimum and maximum layer depth of -16000 to 16000. Anything placed on a layer outside that range ","will not be drawn"," although all events will still run as normal.","\n  "," ","\n  ","\n  ","instance_create_layer(x, y, layer_id, obj);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x position the object will be created at","\n      ","\n      ","\n        ","y","\n        ","The y position the object will be created at","\n      ","\n      ","\n        ","layer_id","\n        ","The layer ID (or name) to assign the created instance to","\n      ","\n      ","\n        ","obj","\n        ","The object index of the object to create an instance of","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (instance ID value)","\n  "," ","\n  ","\n  ","var inst = instance_create_layer(x, y, \"instance_layer\", obj_Bullet);"," with (inst)","     {\n    ","     speed = other.shoot_speed;","     direction = other.image_angle;","     }\n  ","\n  ","The above code creates a new instance of the object \"obj_Bullet\" and stores the instance id in a variable. This variable is then used to assign ","speed"," and ","direction"," to the new instance.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instances","\n        ","Next: ","instance_create_depth","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["instance_create_layer"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"928"})