rh._.exports({"0":["view_get_camera"],"1":["view_get_camera"],"2":["view_get_camera"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve the unique camera ID value for the camera assigned to the given view port (from 0 - 7). If no camera is assigned, the function will return -1.","\n  "," ","\n  ","\n  ","view_get_camera(view_port)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","view_port","\n        ","The view port to target (0 - 7)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Camera index (Real)","\n  "," ","\n  ","\n  ","var cam = view_get_camera(0);"," var cw = camera_get_view_width(cam);"," var ch = camera_get_view_height(cam);"," camera_set_view_pos(cam, mouse_x - (cw / 2), mouse_y - (ch / 2));","\n  ","The above code will retrieve the camera ID for the camera assigned to view port[0] and then change its position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","view_get_visible","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["view_get_camera"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1556"})