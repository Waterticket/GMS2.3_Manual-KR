rh._.exports({"0":["draw_surface_tiled_ext"],"1":["draw_surface_tiled_ext"],"2":["draw_surface_tiled_ext"],"3":["\n  ","\n  ","\n  ","This function will take a surface and then repeatedly tile it across the whole room, starting from the coordinates that you give in the function and with each tile scaled, colour blended and with the alpha that you define (these properties are the same\n    as those used in ","draw_surface_ext()",").","\n  ","NOTE",": When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()","    before referencing them directly.","\n  "," ","\n  ","\n  ","draw_surface_tiled_ext(id, x, y, xscale, yscale, col, alpha);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The unique ID value of the surface to draw.","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of where to draw the surface.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of where to draw the surface.","\n      ","\n      ","\n        ","xscale","\n        ","The horizontal scaling of the surface.","\n      ","\n      ","\n        ","yscale","\n        ","The vertical scaling of the surface.","\n      ","\n      ","\n        ","h","\n        ","The height of the area the stretched surface will occupy.","\n      ","\n      ","\n        ","col","\n        ","The colour with which to blend the surface.","\n      ","\n      ","\n        ","alpha","\n        ","The alpha of the surface.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_surface_tiled_ext(surf, x, y, 2, 2, c_red, 0.5);","\n  ","This will draw the surface indexed in \"surf\" at the instances own x and y position, double its stored size and tiled in every direction in the room, as well as blended with the colour red and partially transparent.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","draw_surface_general","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_surface_tiled_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1417"})