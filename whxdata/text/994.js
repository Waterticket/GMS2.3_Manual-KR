rh._.exports({"0":["layer_destroy"],"1":["layer_destroy"],"2":["layer_destroy"],"3":["\n  ","\n  ","\n  ","This function will destroy the given layer. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and this\n    will remove it from the current room. If the layer is one that has been designed in the room editor, then the next time you leave the room and then return, the layer will be recreated again with the original contents, however if the room is persistent,\n    the layer will be removed unless room persistence is switched off again. When you destroy a layer in this way, all it's contents will be removed too, so any reference IDs for backgrounds or tile maps, etc... will no longer be valid and any instances\n    assigned to the layer will be destroyed (performing their ","Destroy Event"," at the same time, if they have one, as well as the ","Clean Up Event",").","\n  "," ","\n  ","\n  ","layer_destroy(layer_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the layer to destroy (or the layer name as a string)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if !instance_exists(obj_Bullet_Parent)","    {\n    ","    layer_destroy(global.Bullet_Layer);\n    ","    }\n  ","\n  ","The above code will check to see if any instances of the object \"obj_Bullet_Parent\" exists, and if they don't it will destroy the layer with the ID stored in the global variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_x","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_destroy"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"994"})