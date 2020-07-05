rh._.exports({"0":["If Gamepad Button Pressed"],"1":["DnD™ Action - If Gamepad Button Pressed"],"2":["If Gamepad Button Pressed"],"3":["\n  ","\n  ","\n  ","With this action you can poll the gamepad to see if any button is currently being pressed. The action will return ","true"," every step that the gamepad button is being pressed (and held) down, or ","false"," otherwise, although if you click the\n    ","not"," modifier you can then check to see if the button is ","not"," being pressed, ie: the action will return ","true"," while no button is pressed and ","false"," if there is. If you only need to check for a single button press then\n    use the action ","if gamepad button down",".","\n  ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:","\n  ","These actions will now be run if the\n    \"if\" evaluates to ","true",", while any actions dropped elsewhere will be performed after the \"if\" block.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Gamepad","\n        ","The gamepad index.","\n      ","\n      ","\n        ","Button","\n        ","The name of the button to check.","\n      ","\n      ","\n        ","Not","\n        ","Negate the check (true becomes false and vice versa)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code polls the button state of gamepad 0 every step and\n    if a button is being held down it checks for the initial button down press. If the check is ","true"," on the initial down press, a sound is played, then, while the button is held down, the instance speed is set to 10. If the button is not being\n    held down, a check is done on the button release to reset the speed to 0 again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Actions","\n        ","Next: ","If Gamepad Button Down","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" If Gamepad Button Pressed"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"234"})