rh._.exports({"0":["Draw Stacked Sprites"],"1":["DnD™ Action - Draw Stacked Sprites"],"2":["Draw Stacked Sprites"],"3":["\n  ","\n  ","\n  ","This action will draw a sprite a given number of sprites one after another at a given position within the room. You give the sprite to draw and the stack order, which can be either ","Row"," (horizontally, left to right), or ","column"," (vertically,\n    top to bottom), as well as the number of sprites to draw and the position. The position can be an absolute position within the room, or one relative to the position of the instance doing the drawing, and the spacing between images will be based on\n    the width or height of the sprite. Note that this simply draws a static image - the initial single image (frame 0) of the given sprite - and any further frames will be ignored, as will any transforms that have been added through changing the ","instance variables","    (like ","image_xscale"," or ","image_blend",").","\n  ","NOTE",": This action is only for use in the various ","Draw Events",", and will not draw anything if used elsewhere.","\n  "," ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Sprite","\n        ","The sprite to draw","\n      ","\n      ","\n        ","Stack Order","\n        ","The order to draw in (either Row or Column)","\n      ","\n      ","\n        ","Number","\n        ","The number of sprites to draw","\n      ","\n      ","\n        ","x","\n        ","The x position to draw at","\n      ","\n      ","\n        ","y","\n        ","The y position to draw at","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code gets the number of instances of the object \"obj_Player\"\n    and then uses this to draw a number of marker sprites to the screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Drawing Actions","\n        ","Next: ","Draw Rectangle","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Draw Stacked Sprites"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"261"})