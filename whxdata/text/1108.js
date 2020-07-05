rh._.exports({"0":["layer_sprite_get_y"],"1":["layer_sprite_get_y"],"2":["layer_sprite_get_y"],"3":["\n  ","\n  ","\n  ","This function can be used to get the y position of the sprite element in the room. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()"," or when you\n    use the function ","layer_sprite_get_id()","), and the function will return the y position value.","\n  "," ","\n  ","\n  ","layer_sprite_get_y(sprite_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite_element_id","\n        ","The unique ID value of the sprite element to get the information from","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"sprite_sky\");"," var spr_id = layer_sprite_get_id(lay_id, \"Clouds\");"," if layer_sprite_get_y(spr_id) < 0","     {\n    ","     layer_sprite_y(spr_id, room_height);","     }\n  ","\n  ","The above code will get the layer ID for the layer named \"sprite_sky\" and then use that to get the ID of the sprite element on that layer. This ID is then used to check the element y position and if it is less than 0, then the layer element\n    is moved to a different y position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Layers","\n        ","Next: ","layer_sprite_get_id","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sprite_get_y"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1108"})