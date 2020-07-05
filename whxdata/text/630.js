rh._.exports({"0":["skeleton_attachment_get"],"1":["skeleton_attachment_get"],"2":["skeleton_attachment_get"],"3":["\n  ","\n  ","\n  ","A skeletal animation sprite may have other sprites added as attachments, with these sprites being added to a named slot (the name is given when you create the attachment slot in your animation program) and they will be drawn along with the animation\n    of the current sprite. With this function you can get the name (as a string) of the attachment for the given slot of the currently assigned sprite. Note that attached sprites are referenced through their ","name string"," as\n    assigned in Spine, or when you called ","skeleton_attachment_create",".","\n  "," ","\n  ","\n  ","skeleton_attachment_get(slot);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","slot","\n        ","The slot name (a string) to get the attachment of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","if skeleton_attachment_get(\"slot_leftHand\") == \"\"","     {\n    ","     skeleton_attachment_set(\"slot_leftHand\", choose(\"sword\", \"spear\", \"knife\"));","     }\n  ","\n  ","The above code would check the currently assigned attachment name for the slot named \"slot_leftHand\" and if an empty string is returned, a new sprite is attached.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Attachments","\n        ","Next: ","skeleton_attachment_set","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["skeleton_attachment_get"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"630"})