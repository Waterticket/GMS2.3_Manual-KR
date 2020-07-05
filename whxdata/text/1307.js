rh._.exports({"0":["draw_roundrect_ext"],"1":["draw_roundrect_ext"],"2":["draw_roundrect_ext"],"3":["\n  ","\n  ","\n  ","With this function you can draw either an outline of a rounded rectangle or a filled rounded rectangle where the (x1,y1) position is the top left corner and the (x2,y2) position is the bottom right corner. You must also supply radius values for the\n    x and y axis (in pixels) and the corners will be rounded by these amounts. You can define how precise the drawing of the corners is with the function ","draw_set_circle_precision()",". Please note that\n    the rectangle being drawn may need different values (+/-1 on the x, y, or width or height) to be drawn with the desired dimensions due to differences across the various supported platforms.","\n  ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the\n    shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.","\n  "," ","\n  ","\n  ","draw_roundrect_ext(x1, y1, x2, y2, xrad, yrad, outline);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the top left corner of the rounded rectangle (as if it were a normal rectangle).","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the top left corner of the rounded rectangle (as if it were a normal rectangle).","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the bottom right corner of the rounded rectangle (as if it were a normal rectangle).","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the bottom right corner of the rounded rectangle (as if it were a normal rectangle).","\n      ","\n      ","\n        ","xrad","\n        ","The radius of the curve along the x axis from the rectangle corners.","\n      ","\n      ","\n        ","yrad","\n        ","The radius of the curve along the y axis from the rectangle corners.","\n      ","\n      ","\n        ","outline","\n        ","Whether the rounded rectangle is drawn filled (false) or as a one pixel wide outline (true).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var dist = point_distance(x, y, mouse_x, mouse_y) / 10;"," draw_set_colour(c_lime);\n    "," draw_roundrect_ext(x - 50, y - 50, x + 50, y + 50, dist, dist, 0);","\n  ","This will draw a filled rounded rectangle with the corners being rounded by an amount based on the mouse position relative to the instance doing the drawing.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Basic Forms","\n        ","Next: ","draw_roundrect_colour_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_roundrect_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1307"})