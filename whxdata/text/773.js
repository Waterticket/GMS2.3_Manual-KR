rh._.exports({"0":["path_delete_point"],"1":["path_delete_point"],"2":["path_delete_point"],"3":["\n  ","\n  ","\n  ","With this function you can remove a point from the specified path. Path points are numbered from 0 so the first point is always the 0th point and the last path point will be ","path_get_number()"," -\n    1. If you call this function on a path asset, ","then the removal of the point will be permanent"," and all instances assigned the path in the future will be missing the point that was removed. If this is not what you require, then you\n    should use a function like ","path_duplicate()"," to create a copy of the path first, then call this function on the duplicated asset (don't forget to call ","path_delete()","    on the asset when it is no longer required).","\n  "," ","\n  ","\n  ","path_delete_point(ind, n);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the path to delete a point from.","\n      ","\n      ","\n        ","n","\n        ","The defining point to delete.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var _col = true;"," while (_col)"," {\n    "," var _num = path_get_number(mypath) - 1;"," if (_num > 2)","     {","     var _x1 = path_get_pount_x(my_path, _num);","     var _y1 = path_get_point_y(my_path, _num);","     var _x2 = path_get_pount_x(my_path, _num -1);","   \n    var _y2 = path_get_point_y(my_path, _num -1);","     if collision_line(_x1, _y1, _x2, _y2, obj_Wall, true, false)","         {","         path_delete_point(mypath, _num);","         _num -= 1;","         }","     else _col = false;","        }"," else _col = false;"," }\n  ","\n  ","The above code generates a loop that checks the points on a backwards from the end for a collision with the given object. If a collision is found, a path point is deleted, until there is no collision, or the path is only 2 points long.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Path Manipulation","\n        ","Next: ","path_clear_points","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["path_delete_point"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"773"})