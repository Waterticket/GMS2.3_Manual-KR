rh._.exports({"0":["break"],"1":["break"],"2":["break"],"3":["\n  ","\n  ","\n  ","The ","break"," statement is used to end prematurely a ","for",", ","repeat",", ","while"," or ","do / until","    loop of some kind, or to tell a ","switch"," statement to end at that point, or to prematurely end a ","with"," call. Please see the individual pages for these different functions to get a more\n    in-depth explanation of how it can be used under each circumstance. Note that if ","break"," is used outside of any of these contexts it will give an error.","\n  ","Below you can see a few basic examples of how ","break"," can be used, and its syntax is simply:","\n  ","break;","\n  ","break"," in a ","for"," loop:","\n  ","for (var i = 0; i < 10; i += 1)","     {\n    ","     if (array[i] == 234)","         {\n    ","         break;\n    ","         }\n    ","     }\n    "," num = i;","\n  ","break"," in a ","repeat"," loop:","\n  ","var i = 0;"," var temp = 0;"," repeat (10)","     {\n    ","     temp += array[i];","     if (temp > max_total)","         {\n    ","         break;\n    ","         }\n    ","     else\n    ","         {\n    ","         i += 1;","         }\n    ","     }\n  ","\n  ","break"," in a ","while"," loop:","\n  ","var i = 0;"," while (!place_free(x, y))","     {\n    ","     x = random(room_width);","     y = random(room_height);","     if (i > 50)","         {\n    ","         break;\n    ","         }\n    ","     else\n    ","         {\n    ","         i+=1;\n    ","         }\n    ","     }\n  ","\n  ","break"," in a ","do / until"," loop:","\n  ","var _id = noone;"," do\n    ","     {","     _id = list[| 0];","     if instance_exists(_id)","         {","         _break;","         }","     ds_list_delete(list, 0);","     }"," until (ds_list_empty(list));"," target = _id;","\n  ","break"," when using ","with",":","\n  ","var count = 0;"," with (obj_Enemy)","     {\n    ","     count++;\n    ","     if (count > 10)","         {\n    ","         break;\n    ","         }\n    ","     hp = 100;","     }\n  ","\n  ","break"," in a ","switch",":","\n  ","switch (keyboard_key)","     {\n    ","     case vk_left:","     case ord(\"A\"):","         x -= 4;","         break;\n    ","     case vk_right:","     case ord(\"D\"):","         x += 4;","         break;\n    ","     case vk_up:","     case ord(\"W\"):","         y -= 4;","         break;\n    ","     case vk_down:","     case ord(\"S\"):","         y += 4;","         break;\n    ","     }\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Language Features","\n        ","Next: ","continue","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["break"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"474"})