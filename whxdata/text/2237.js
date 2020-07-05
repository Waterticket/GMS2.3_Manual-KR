rh._.exports({"0":["clickable_change"],"1":["clickable_change"],"2":["clickable_change"],"3":["\n  ","\n  ","\n  ","With this function you can change the sprite and position of a clickable icon previously created with ","clickable_add()",". Please note that the position is based on the window, ","not"," the canvas, (0,0) position\n    and that the sprite must be referenced directly from the texture page (see: ","sprite_get_tpe()",").","\n  "," ","\n  ","\n  ","clickable_change(index, tpe, x, y)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the clickable icon to change.","\n      ","\n      ","\n        ","tpe","\n        ","The texture page entry for the sprite to be used.","\n      ","\n      ","\n        ","x","\n        ","The new x position within the ","window",".","\n      ","\n      ","\n        ","y","\n        ","The new y position within the ","window",".","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","switch (room)","     {\n    ","     case rm_Menu: clickable_change(global.Help_Icon, sprite_get_tpe(spr_MS_Help, 1), 32, 32); break;","     case rm_Game: clickable_change(global.Help_Icon, sprite_get_tpe(spr_MS_Help, 0), 200, 32); break;","     }\n  ","\n  ","The above code will change the image index and position of the clickable icon indexed in the variable \"global.Help\" depending on the current room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Web And HTML5","\n        ","Next: ","clickable_change_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["clickable_change"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2237"})