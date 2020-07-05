rh._.exports({"0":["draw_triangle"],"1":["draw_triangle"],"2":["draw_triangle"],"3":["\n  ","\n  ","\n  ","With this function you can draw either an outline of a triangle or a filled triangle.","\n  ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the\n    shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.","\n  "," ","\n  ","\n  ","draw_triangle(x1, y1, x2, y2, x3, y3, outline);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the triangle's first corner.","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the triangle's first corner.","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the triangle's second corner.","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the triangle's second corner.","\n      ","\n      ","\n        ","x3","\n        ","The x coordinate of the triangle's third corner.","\n      ","\n      ","\n        ","y3","\n        ","The y coordinate of the triangle's third corner.","\n      ","\n      ","\n        ","outline","\n        ","Whether the triangle is drawn filled (false) or as a one pixel wide outline (true).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_set_colour(c_aqua);"," draw_triangle(50, 50, 200, 50, 50, 200, 0);","\n  ","This will draw a filled aquamarine-coloured isosceles right-angled triangle, with its first corner at (50,50), its second at (200,50) and its third at (50,200).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Basic Forms","\n        ","Next: ","draw_triangle_colour","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_triangle"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1312"})