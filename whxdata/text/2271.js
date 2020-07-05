rh._.exports({"0":[" steam_set_achievement"],"1":["steam_set_achievement"],"2":["steam_set_achievement"],"3":["\n  ","\n  ","\n  ","With this function you can tell the Steam API to award (\"set\") an achievement for the player. These achievements should have been defined on the Steamworks control panel accounts page for your game and the string that is passed to the function\n    should match that used as the ","API Name"," on the control panel. The Steam Game Overlay will display a notification panel to the user informing them of the achievement that they have received, unless the achievement has already been awarded, in\n    which case nothing will happen.","\n  "," ","\n  ","\n  ","steam_set_achievement(ach_name);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ach_name","\n        ","The name of the achievement to set (string).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if hp <= 0","     {\n    ","     global.Deaths += 1;","     if global.Deaths == 10","         {\n    ","         if !steam_get_achievement(\"ach_Player_Dies_Ten_Times\") steam_set_achievement(\"ach_Player_Dies_Ten_Times\");","         }\n    ","     }\n  ","\n  ","The above code will reward the player an achievement if the global variable \"Deaths\" is equal to 10 and if the achievement has not already been awarded.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Achievements And Statistics","\n        ","Next: ","steam_get_achievement","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_set_achievement"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2271"})