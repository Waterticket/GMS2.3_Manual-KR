rh._.exports({"0":["layer_tilemap_get_id"],"1":["layer_tilemap_get_id"],"2":["layer_tilemap_get_id"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve the unique ID value of the tilemap element on a layer. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or\n    the layer name (as a string - this will have a performance impact) and the function will return the ID value associated with the tilemap element on the layer. Note that this function is specifically designed for use with tilemaps that have been added\n    in the IDE, as if you add a tilemap to a layer through code using the function ","layer_tilemap_create()",", then it will return the unique ID for the tilemap element added.","\n  "," ","\n  ","\n  ","layer_tilemap_get_id(layer_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the layer to target (or the layer name as a string)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","tilemap element ID value (Real)","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"tilemap_trees\");"," var tile_id = layer_tilemap_get_id(lay_id);"," layer_tilemap_destroy(tile_id);\n  ","\n  ","The above code will get the layer ID for the layer named \"tilemap_trees\" and then use that to get the ID of the tilemap element on that layer. This ID is then used to remove the tilemap from the layer.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","layer_tilemap_exists","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_tilemap_get_id"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1020"})