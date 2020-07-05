rh._.exports({"0":["camera_set_view_border"],"1":["camera_set_view_border"],"2":["camera_set_view_border"],"3":["\n  ","\n  ","\n  ","You can use this function to set the follow border of the view camera within the room. You give the unique camera ID value (as returned by the different ","camera_create"," functions) and then give the x border size and the y border size (horizontal\n    and vertical). These values will only be used when the view camera has been assigned an instance target to follow (either in the Room Editor or using the function ","camera_set_view_target()",") and relate\n    to how far from the border of the view the instance needs to be before the view will update its position to follow.","\n  "," ","\n  ","\n  ","camera_set_view_border(camera_id, x_border, y_border)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","camera_id","\n        ","The unique camera ID value returned when you created the camera.","\n      ","\n      ","\n        ","x_border","\n        ","The border (in pixels) for the view camera along the horizontal axis","\n      ","\n      ","\n        ","y_border","\n        ","The border (in pixels) for the view camera along the vertical axis","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","camera_set_view_border(view_camera[0], 64, 64);","\n  ","The above code will set the view camera border for the camera assigned to view port[0].","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","camera_set_view_angle","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["camera_set_view_border"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1527"})