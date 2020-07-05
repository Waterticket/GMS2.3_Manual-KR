rh._.exports({"0":["tilemap_clear"],"1":["tilemap_clear"],"2":["tilemap_clear"],"3":["\n  ","\n  ","\n  ","Using this function you can clear/set all the tiles on a given tilemap. You give the tilemap element ID (which you get when you create a tilemap element using ","layer_tilemap_create()"," or when you use the\n    function ","layer_tilemap_get_id()","), and then supply the tile data that you wish to clear the layer with. A default value of 0 will clear all the tiles from the layer (essentially making all tiles \"empty\"),\n    while you can use the dedicated ","tile_*"," functions to create your own tile data to clear the tilemap with.","\n  "," ","\n  ","\n  ","tilemap_clear(tilemap_element_id, tiledata)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tilemap_element_id","\n        ","The unique ID value of the tilemap element to change","\n      ","\n      ","\n        ","tiledata","\n        ","The tile data to use to clear the layer","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var layer_id = layer_get_id(\"Forest\");"," var tile_id = layer_tilemap_get_id(layer_id);"," tilemap_clear(tile_id, 0);","\n  ","The above code gets the ID value of a tilemap created in the room editor, and then clears it using \"empty\" tiles.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tilemap_x","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tilemap_clear"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1025"})