rh._.exports({"0":["layer_background_get_id"],"1":["layer_background_get_id"],"2":["layer_background_get_id"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve the unique ID value of the background element on a layer. You supply the layer ID (which you get when you use the layer name along with ","layer_get_id()",")\n    and the function will return the ID value associated with the background element on the layer. Note that this function is specifically designed for use with backgrounds that have been added in the IDE, as if you add a background to a layer through\n    code using the function ","layer_background_create()",", then it will return the unique ID for the background element added.","\n  "," ","\n  ","\n  ","layer_background_get_id(layer_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the layer to target","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Background element ID value (Real)","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Background_trees\");"," var back_id = layer_background_get_id(lay_id);"," layer_background_sprite(back_id, bck_Trees_Winter);","\n  ","The above code will get the layer ID for the layer named \"Background_trees\" and then use that to get the ID of the background element on that layer. This ID is then used to change the element sprite.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_exists","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_background_get_id"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1057"})