rh._.exports({"0":["device_get_tilt_y"],"1":["device_get_tilt_y"],"2":["device_get_tilt_y"],"3":["\n  ","\n  ","\n  ","This function returns a value between -1 and 1 depending upon the angle of \"tilt\" of the device. The actual correlation between degrees of tilt and the value returned depends on the device and OS that it uses, but generally a value of 1 or\n    -1 is the same as +/-90°. The image below shows how each if the available functions relates to the device:","\n  ","\n  ","\n  ","device_get_tilt_y()","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if display_get_orientation() = display_landscape","    {\n    ","    x += sign(device_get_tilt_y());","    }\n    "," else\n    ","    {\n    ","    x += sign(device_get_tilt_x());","    }\n  ","\n  ","The above code checks the orientation of the display and then uses the corresponding tilt value to move the player along the x axis.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Device Input","\n        ","Next: ","device_get_tilt_z","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["device_get_tilt_y"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1670"})