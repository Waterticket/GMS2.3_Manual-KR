rh._.exports({"0":["device_mouse_raw_x"],"1":["device_mouse_raw_x"],"2":["device_mouse_raw_x"],"3":["\n  ","\n  ","\n  ","This function returns the raw x position of a touch on the device. What this means is that it returns the actual device definition of the x position that is being touched, ","not"," the GameMaker Studio 2 one, and as such will ignore things\n    like view position and scaling. Note that the maximum number of touches that can be detected will depend very much on the device being used and the OS it runs","\n  ","NOTE",": This function is very much device dependent and you should experiment first with the desired target module and device to see what exactly is returned.","\n  "," ","\n  ","\n  ","device_mouse_raw_x(device);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","device","\n        ","The device (from 0 - ","n",") that is being checked.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if device_mouse_check_button(0, mb_left) && device_mouse_check_button(1, mb_left)","    {\n    ","    x_av = mean(device_mouse_raw_x(0), device_mouse_raw_x(1));","    y_av = mean(device_mouse_raw_y(0), device_mouse_raw_y(1));","    }\n  ","\n  ","The above code checks to see if device1 and device2 are being pressed, and if they are it calculates the average position of the x/y coordinates between each press point.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Device Input","\n        ","Next: ","device_mouse_raw_y","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["device_mouse_raw_x"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1663"})