rh._.exports({"0":["gamepad_button_check_released"],"1":["gamepad_button_check_released"],"2":["gamepad_button_check_released"],"3":["\n\n\n\n  ","\n  ","\n  ","This function will return ","true"," or ","false"," depending on whether the given gamepad button is detected as having been released or not. Note that this function will only trigger ","once"," for the button the moment it has been released.\n    For it to trigger again the button must first be pressed and then released once more.","\n  "," ","\n  ","\n  ","gamepad_button_check_released(device, button);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","device","\n        ","Which gamepad device \"slot\" to check.","\n      ","\n      ","\n        ","button","\n        ","Which gamepad button ","constant"," to check for.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if gamepad_button_check_released(0, gp_select)","    {\n    ","    audio_play_sound(snd_Button, 0, false);","    global.Pause = !global.Pause;","    }\n  ","\n  ","The above code will detect whether the \"select\" button of the gamepad connected to device \"slot\" 0 has been pressed or not and toggle the global \"Pause\" variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Input","\n        ","Next: ","gamepad_button_count","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gamepad_button_check_released"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1712"})