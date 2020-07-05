rh._.exports({"0":["gesture_get_rotate_time"],"1":["gesture_get_rotate_time"],"2":["gesture_get_rotate_time"],"3":["\n\n\n\n  ","\n  ","\n  ","This function is used to get the time within which a pair of touches must be rotating in a consistent direction for a ","Rotate Start Gesture"," to be triggered. The time is\n    measured in seconds and has a default value of 0.16s.","\n  ","IMPORTANT!"," Currently for a 60fps game you can only set this to a maximum of one second otherwise no rotations will be detected. This will increase for a lower framrate, for example a 30fps game can have a maximum time of 2 seconds.","\n  "," ","\n  ","\n  ","gesture_get_rotate_time();","\n  "," ","\n  ","\n  ","Real (inches)","\n  "," ","\n  ","\n  ","if gesture_get_rotate_time() != 0.1","     {\n    ","     gesture_rotate_time(0.1);\n    ","     }\n  ","\n  ","The above code checks to see if the rotate time for gestures is set to 0.1 seconds and if it is not it sets it to that value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gesture Input","\n        ","Next: ","gesture_get_rotate_angle","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gesture_get_rotate_time"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1684"})