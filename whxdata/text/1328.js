rh._.exports({"0":["draw_sprite_pos"],"1":["draw_sprite_pos"],"2":["draw_sprite_pos"],"3":["\n  ","\n  ","\n  ","With this function you can draw a sprite distorted over the area defined by the four corner coordinates. The first two arguments are the sprite to draw and the sub-image of the sprite (the same as in the function ","draw_sprite()",")\n    but the next ones are those that define the position of each of the four corners of the ","bounding box"," of the given sprite. These should be given in ","clockwise"," order, so the first coordinate is the top left, then the top right, then bottom\n    right and finally the bottom left. You can also set a value for the alpha of the sprite to draw it with transparency. The image below illustrates how this function works:","\n  ","\n  ","WARNING!"," The image above is only for illustrative purposes, and if you use this function on a sprite, you will get different results and may experience texture \"shearing\" due to the way that a sprite is constructed from a quad of primitives.","\n  ","NOTE",": This function is only useful for ","bitmap"," sprites and will not work with SWF or JSON (Spine) sprites.","\n  ","NOTE",": When using this function, you should have the ","Automatically Crop"," setting disabled for texture pages.","\n  "," ","\n  ","\n  ","draw_sprite_pos(sprite, subimg, x1, y1, x2, y2, x3, y3, x4, y4, alpha);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite","\n        ","The index of the sprite to draw.","\n      ","\n      ","\n        ","subimg","\n        ","The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object).","\n      ","\n      ","\n        ","x1","\n        ","The first x coordinate.","\n      ","\n      ","\n        ","y1","\n        ","The first y coordinate.","\n      ","\n      ","\n        ","x2","\n        ","The second x coordinate.","\n      ","\n      ","\n        ","y2","\n        ","The second y coordinate.","\n      ","\n      ","\n        ","x3","\n        ","The third x coordinate.","\n      ","\n      ","\n        ","y3","\n        ","The third y coordinate.","\n      ","\n      ","\n        ","x4","\n        ","The fourth x coordinate.","\n      ","\n      ","\n        ","y4","\n        ","The fourth y coordinate.","\n      ","\n      ","\n        ","alpha","\n        ","The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_sprite_pos(sprite_index, image_index, x - 100, y - 50, x - 50, y +150, x + 100, y + 200, x + 100, y, 1);","\n  ","The above code will draw the sprite associated with the instance running the code distorted around the x / y position of the instance and with a fully opaque alpha.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprites And Tiles","\n        ","Next: ","draw_sprite_tiled","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_sprite_pos"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1328"})