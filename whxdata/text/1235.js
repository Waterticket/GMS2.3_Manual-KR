rh._.exports({"0":["gpu_get_cullmode"],"1":["gpu_get_cullmode,cull_noculling,cull_clockwise,cull_counterclockwise"],"2":["gpu_get_cullmode,cull_noculling,cull_clockwise,cull_counterclockwise"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve the backface culling mode. The returned value will be one of the following constants (the default value is ","cull_noculling","):","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","cull_noculling","\n        ","No culling will be done","\n      ","\n      ","\n        ","cull_clockwise","\n        ","All clockwise triangles will be culled","\n      ","\n      ","\n        ","cull_counterclockwise","\n        ","All counter-clockwise triangles will be culled","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","gpu_get_cullmode();","\n  "," ","\n  ","\n  ","Constant (see above for constants)","\n  "," ","\n  ","\n  ","if gpu_get_cullmode() != cull_clockwise","     {\n    ","     gpu_set_cullmode(cull_clockwise);\n    ","     }\n  ","\n  ","The above code gets the current cull mode and if it is not ","cull_clockwise"," it is set to that constant.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_get_blendmode","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_get_cullmode"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1235"})