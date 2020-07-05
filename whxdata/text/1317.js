rh._.exports({"0":["draw_sprite"],"1":["draw_sprite"],"2":["draw_sprite"],"3":["\n  ","\n  ","\n  ","This function draws the given sprite and sub-image at a position within the game room. For the sprite you can use the instance variable ","sprite_index"," to\n    get the current sprite that is assigned to the instance running the code, or you can use any other sprite asset. The same goes for the sub-image, as this can also be set to the instance variable ","image_index","    which will set the sub-image to that selected for the current instance sprite (note, that you can draw a different sprite and still use the sub-image value for the current instance), or you can use any other value for this to draw a specific sub-image\n    of the chosen sprite. If the value is larger than the number of sub-images, then GameMaker Studio 2 will automatically loop the number to select the corresponding image (for example, if the sprite being drawn has 5 sub-images numbered 0 to\n    4 and we set the index value to 7, then the function will draw sub-image 3, numbered 0). Finally, the x and y position is the position within the room that the sprite will be drawn, and it is centered on the sprite ","x offset","    and ","y offset",".","\n  ","NOTE",": This function may not work as expected when using skeleton animation sprites, and you may find that the function only draws the first frame of the default pose. You should be using the ","draw_skeleton_*"," functions instead.","\n  "," ","\n  ","\n  ","draw_sprite(sprite, subimg, x, y);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite","\n        ","The index of the sprite to draw.","\n      ","\n      ","\n        ","subimg","\n        ","The sub-image (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object).","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of where to draw the sprite.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of where to draw the sprite.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_sprite(sprite_index, image_index, x, y);"," draw_sprite(spr_Halo, 0, x, y-32);","\n  ","This will draw the instances assigned sprite (sprite_index) with the current sub-image at the x and y position of the instance within the room. It will then draw the first frame of the sprite indexed by \"spr_Halo\" at the same x and y position\n    but 32 pixels 'above'.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprites And Tiles","\n        ","Next: ","draw_sprite_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_sprite"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1317"})