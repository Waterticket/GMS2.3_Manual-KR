rh._.exports({"0":["mp_grid_add_instances"],"1":["mp_grid_add_instances"],"2":["mp_grid_add_instances"],"3":["\n  ","\n  ","\n  ","This function uses the instance collision mask (decided by the sprite properties or the mask index of the calling instance) to mark cells as forbidden or not in an MP grid, where forbidden cells cannot be crossed by any of the pathfinding functions.\n    You can specify in the function whether to consider precise collisions or not and the forbidden cells marked will change depending on this setting. This image illustrates this behaviour:","\n  ","The two instances above have been added into the MP grid using the ","mp_grid_add_instances()","    function with precise being set as true. As you can see the, green instance has only marked the grid squares it \"touches\" as forbidden, due to the fact that its sprite mask is also set to precise. However the second instance has marked other\n    cells too which don't ","appear"," to be touching. This is because the sprite mask is ","not"," set to precise, meaning that even if you are using the precise setting in the function, only the bounding box of the sprite will be considered. This\n    is also what would happen if you set the precise argument of the function to false - even instances with a precise sprite mask will be added into the grid based on their bounding boxes.","\n  "," ","\n  ","\n  ","mp_grid_add_instances(id, obj, prec);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","Index of the mp_grid that is to be used","\n      ","\n      ","\n        ","obj","\n        ","Object index, or instance id, of the instances to be added into the mp_grid","\n      ","\n      ","\n        ","prec","\n        ","Whether the check is based on pixel-perfect collisions (true = slow) or its bounding box in general (false = fast).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","mp_grid_add_instances(grid, obj_Wall, true);","\n  ","The above code will add all instances of \"obj_Wall\" into the mp_grid indexed in the variable \"grid\" using the precise collision mask rather than the bounding box.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Motion Planning","\n        ","Next: ","mp_grid_add_rectangle","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["mp_grid_add_instances"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1177"})