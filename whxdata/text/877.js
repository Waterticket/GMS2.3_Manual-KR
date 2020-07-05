rh._.exports({"0":["event_perform_object"],"1":["event_perform_object"],"2":["event_perform_object"],"3":["\n  ","\n  ","\n  ","This functions works the same as ","event_perform()"," except that this time you can specify events from another object. There are many options here which allow complete simulation of all\n    possible events, but note that this literally just performs all the code in the event and the game will not modify anything to make it trigger itself manually, for example if you choose to perform a keyboard press event, the event will be triggered\n    but the relevant key will not be recognised as having been pressed. Or if you perform an alarm event, the alarm counter will not be set to -1 but rather continue to count down. You can find a complete list of the available constants this function\n    requires from the the page for the function ","event_perform()",".","\n  ","NOTE",": Actions in the event called with this function are applied to the ","current instance",", and not to instances of the given object.","\n  "," ","\n  ","\n  ","event_perform_object(obj, type, numb);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","obj","\n        ","The object that should have its event triggered.","\n      ","\n      ","\n        ","type","\n        ","The type of event to perform. See below.","\n      ","\n      ","\n        ","numb","\n        ","The specific event, if one is necessary (otherwise, just use 0).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","event_perform_object(obj_Player, ev_keypress, ord(\"W\"));","\n  ","This would perform the event associated with Keyboard Check Pressed > W key from the object \"obj_Player\" in the current instance.","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Generating Object Events","\n        ","Next: ","event_user","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["event_perform_object"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"877"})