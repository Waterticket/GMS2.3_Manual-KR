rh._.exports({"0":["gamepad_set_axis_deadzone"],"1":["gamepad_set_axis_deadzone"],"2":["gamepad_set_axis_deadzone"],"3":["\n\n\n\n  ","\n  ","\n  ","This function can be used to set the \"dead zone\" of the joystick axis. You specify the device slot to set, and then set a value from 0 to 1 and if the input amount is lower than the given value, the joystick axis is considered to be at 0.\n    Note that this is a global setting that will affect ","all"," axis of all joysticks connected to the device slot specified.","\n  "," ","\n  ","\n  ","gamepad_set_axis_deadzone(device, deadzone);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","device","\n        ","Which gamepad device \"slot\" to check.","\n      ","\n      ","\n        ","deadzone","\n        ","The dead zone value from 0 to 1.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if gamepad_is_connected(0) gamepad_set_axis_deadzone(0, 0.05);"," if gamepad_is_connected(1) gamepad_set_axis_deadzone(1, 0.05);"," if gamepad_is_connected(2) gamepad_set_axis_deadzone(2, 0.05);"," if gamepad_is_connected(3) gamepad_set_axis_deadzone(3,\n    0.05);","\n  ","The above code will set the dead zone of the joystick axis on any of 4 connected devices to 0.05.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Input","\n        ","Next: "," gamepad_set_vibration ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gamepad_set_axis_deadzone"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1702"})