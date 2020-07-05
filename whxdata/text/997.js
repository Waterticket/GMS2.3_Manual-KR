rh._.exports({"0":["layer_add_instance"],"1":["layer_add_instance"],"2":["layer_add_instance"],"3":["\n  ","\n  ","\n  ","This function can be used to move a given instance from the layer it is currently on to another layer. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as\n    a string - this will have a performance impact) and the instance ID of the instance to move between layers. For example, say your player is on a layer that is at a lower depth than another layer and you want it to appear behind the layers between\n    the two. You can use this function to switch the player from the foreground layer to the background layer and make it appear behind the other layers being drawn.","\n  ","NOTE:"," This function cannot be used to add a new instance to a layer. You ","must"," have created the instance previously and stored its ID to a variable.","\n  ","NOTE",": This function is only valid within the scope of the current room and cannot be used when the scope has been changes using the function ","layer_set_target_room()",".","\n  "," ","\n  ","\n  ","layer_add_instance(layer_id, instance_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the instance layer to target (or the layer name as a string)","\n      ","\n      ","\n        ","instance_id","\n        ","The unique instance ID value of the instance to move over to the target layer","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var near = instance_nearest(x, y, obj_Tree);"," var layer_id = layer_get_id(\"Instances Front\");"," layer_add_instance(layer_id, near);","\n  ","The above code will first get the index of the nearest instance to the given x/y position and store it in a local variable. It then gets the unique instance layer ID for the layer named \"Instances Front\", and moves the found instance onto\n    that layer.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_has_instance","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_add_instance"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"997"})