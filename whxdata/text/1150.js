rh._.exports({"0":["motion_add"],"1":["motion_add"],"2":["motion_add"],"3":["\n  ","\n  ","\n  ","This function will modify the current ","direction"," and ","speed"," of\n    the instance running the code, combining the values given with the current values. If you wish to simply change these values, you should be using the function ","motion_set()",".","\n  "," ","\n  ","\n  ","motion_add(dir, speed);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","dir","\n        ","The added direction.","\n      ","\n      ","\n        ","speed","\n        ","The added speed.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var pdir;"," pdir = point_direction(other.x, other.y, x, y);"," motion_add(pdir, other.speed);"," if speed > 8 speed = 8;","\n  ","the above code would be called in the collision event with another object. It adds to the direction of motion and the speed of the instance a vector based on the position and speed of the other instance involved in the collision. It then limits the\n    speed if it goes over 8 (pixels per step).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Movement","\n        ","Next: ","motion_set","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["motion_add"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1150"})