rh._.exports({"0":["path_delete"],"1":["path_delete"],"2":["path_delete"],"3":["\n  ","\n  ","\n  ","You can use this code to remove a path from memory. If this path has been created dynamically using ","path_add()",", the variable that holds the path index will no longer be valid for accessing the path as it no longer\n    exists, and if the path was created using the ","Path Editor"," that path can no longer be accessed in the ","whole game"," as you are permanently deleting it.","\n  "," ","\n  ","\n  ","path_delete(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the path to delete.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  "," ","\n  ","var t_path = path_add();"," if mp_grid_path(grid, t_path, x, y, obj_Player.x, obj_Player.y, 1)","     {\n    ","     path_assign(mypath, t_path);","     }\n    "," path_delete(t_path);\n  ","\n  ","The above code will create a path and store its index in a local variable. This path is then used to store an ","mp_grid_path()"," generated path which, if it succeeds\n    in finding its way to the target, is then assigned to the path indexed in \"mypath\". Finally the \"t_path\" is deleted.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Path Manipulation","\n        ","Next: ","path_duplicate","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["path_delete"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"777"})