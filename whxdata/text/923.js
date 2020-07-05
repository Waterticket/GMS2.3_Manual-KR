rh._.exports({"0":["instance_activate_region"],"1":["instance_activate_region"],"2":["instance_activate_region"],"3":["\n  ","\n  ","\n  ","With this function you can define a region within the room to activate instances that have previously been deactivated. This region can either be flagged as \"inside\" or \"outside\" as demonstrated in the following image:","\n  ","You can see in the image above that the \"apple\" instance is always active\n    because, even if the sprite itself doesn't overlap the region, the bounding box does. So, instances are considered to be within the region specified when their ","bounding box"," overlaps with it, and the state of the collision mask (precise\n    or not) is not taken into consideration. Note that activation is not instantaneous, and an instance that has been activated in this way will not be considered to be active until the end of the event in which the function was called.","\n  "," ","\n  ","\n  ","instance_activate_region(left, top, width, height, inside);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","left","\n        ","The x coordinate of the left of the rectangular region to activate.","\n      ","\n      ","\n        ","top","\n        ","The y coordinate of the top of the rectangular region to activate.","\n      ","\n      ","\n        ","width","\n        ","The width of the region to activate.","\n      ","\n      ","\n        ","height","\n        ","The height of the region to activate.","\n      ","\n      ","\n        ","inside","\n        ","Whether to activate instances on the inside of the region (true) or the outside (false).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","instance_deactivate_all(true);"," var _vx = camera_get_view_x(view_camera[0]);"," var _vy = camera_get_view_y(view_camera[0]);"," var _vw = camera_get_view_width(view_camera[0]);"," var _vh = camera_get_view_height(view_camera[0]);"," instance_activate_region(_vx\n    - 64, _vy - 64, _vw + 128, _vh + 128, false);","\n  ","The above code deactivates all instances except the one that is running the code and then activates a region within the room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Deactivating Instances","\n        ","Next: ","instance_activate_layer","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["instance_activate_region"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"923"})