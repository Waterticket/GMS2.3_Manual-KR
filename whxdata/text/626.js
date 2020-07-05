rh._.exports({"0":["skeleton_attachment_set"],"1":["skeleton_attachment_set"],"2":["skeleton_attachment_set"],"3":["\n  ","\n  ","\n  ","A skeletal animation sprite may have other images added as attachments, with these images being added to a named slot (the name is given when you create the attachment slot in your animation program) and they will be drawn along with the animation of\n    the current sprite. With this function you can set an attachment to a given slot, where you are required to give the names (as strings) of the slot and the attachment. These names are defined by the animation program used, or (in the case of the attachment)\n    when you call ","skeleton_attachment_create()",".","\n  ","Note that you can also pass a ","sprite_index"," in as the attachment, and that sprite will be used, or you can use -1 to remove the attachment from the slot. When you pass a sprite index in as an argument, it will create\n    an attachment slot using the name of the sprite as the string to name the slot (so using ","spr_sword",", for example, will create an attachment slot \"spr_sword\"), and the slot will use the first image index (0) of the the\n    sprite, as well as its x and y origin offset, with a scale of (1,1) and a rotation of 0.","\n  "," ","\n  ","\n  ","skeleton_attachment_set(slot, attachment);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","slot","\n        ","The slot name (a string) to get the attachment of.","\n      ","\n      ","\n        ","attachment","\n        ","The name (as a string or a sprite_index) of the attachment image.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","if skeleton_attachment_get(\"slot_leftHand\") == \"\"","     {\n    ","     skeleton_attachment_set(\"slot_leftHand\", choose(\"sword\", \"spear\", \"knife\"));","     }\n  ","\n  ","The above code would check the currently assigned attachment name for the slot named \"slot_leftHand\" and if an empty string is returned, a new sprite is attached.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Attachments","\n        ","Next: ","skeleton_attachment_create","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["skeleton_attachment_set"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"626"})