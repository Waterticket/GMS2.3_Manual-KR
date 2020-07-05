rh._.exports({"0":["sprite_assign"],"1":["sprite_assign"],"2":["sprite_assign"],"3":["\n  ","\n  ","\n  ","This function takes two previously created (or included) sprite indexes, and copies the image from one to the other. In this way you can copy (or \"clone\") one sprite into another index. Note that ","you cannot copy to a game resource",".\n    You have to have created the sprite to be copied to previously using the ","sprite_add()"," or  ","sprite_duplicate()"," functions.","\n  "," ","\n  ","\n  ","sprite_assign(index, sprite);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the sprite to be copied to (ie: overwritten).","\n      ","\n      ","\n        ","sprite","\n        ","The sprite to be copied from.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if sprite_exists(global.Player_Sprite)","     {\n    ","     var t_spr = sprite_add(\"player.png\", 16, true, true, 0, 0);","     sprite_assign(global.Player_Sprite, t_spr);","     sprite_delete(t_spr);\n    ","     }\n    "," else\n    ","     {\n    ","     global.Player_Sprite = sprite_add(\"player.png\", 16, true, true, 0, 0);","     }\n  ","\n  ","The above code checks to see if the global variable \"Player_Sprite\" contains a sprite and if it does it uses sprite_assign to change it for one that has been loaded from an external file. If it does not contain a sprite one is loaded and its\n    index is stored in that variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Manipulation","\n        ","Next: ","sprite_merge","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sprite_assign"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns","Example:"],"id":"573"})