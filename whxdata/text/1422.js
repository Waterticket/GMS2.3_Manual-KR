rh._.exports({"0":["application_surface_draw_enable"],"1":["application_surface_draw_enable"],"2":["application_surface_draw_enable"],"3":["\n  ","\n  ","\n  ","You can use this function to enable or disable the automatic drawing of the application surface. By default this is enabled, but in many cases you will want to take over when and how the surface is drawn (when using shaders for example), in which case\n    you would use this function to set it to false so that you can draw it yourself when and how you require. It's important to note that when you switch off automatic drawing and draw the application surface yourself, that you may see certain issues\n    with the alpha component of sprites and the surface itself. This is because GameMaker Studio 2 will draw the application surface ","without alpha blending"," when the automatic drawing is on. If you switch off automatic drawing then you need\n    to handle this yourself, using the following code (for example):","\n  ","gpu_set_blendenable(false);"," draw_surface_ext(application_surface, 0, 0, 1, 1, 0, c_white, 1);"," gpu_set_blendenable(true);\n  ","\n  "," ","\n  ","\n  ","application_surface_draw_enable(flag);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","flag","\n        ","The flag will be either ","true"," (enabled, the default value) or ","false"," (disabled).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","application_surface_draw_enable(false);","\n  ","The above code will switch off the automatic drawing of the application surface.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","surface_exists","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["application_surface_draw_enable"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1422"})