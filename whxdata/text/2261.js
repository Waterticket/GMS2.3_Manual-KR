rh._.exports({"0":["steam_activate_overlay"],"1":["steam_activate_overlay,ov_friends,ov_community,ov_players,ov_settings,ov_gamegroup,ov_achievements"],"2":["steam_activate_overlay,ov_friends,ov_community,ov_players,ov_settings,ov_gamegroup,ov_achievements"],"3":["\n  ","\n  ","\n  ","The Steam overlay is a piece of the Steam user interface that can be activated over the top of almost any game launched through Steam. It lets the user access their friends list, web browser, chat, and in-game DLC purchasing. The default key for a user\n    to access the overlay while in a game is SHIFT+TAB, but you can also bring up any page of the overlay using this function. It takes one of six ","constants"," that are listed below:","\n  ","\n    "," ","\n    ","\n      ","\n        ","\n          ","Constant","\n          ","Description","\n        ","\n        ","\n          ","ov_friends","\n          ","The friends page for the current user","\n        ","\n        ","\n          ","ov_community","\n          ","The community page for your game","\n        ","\n        ","\n          ","ov_players","\n          ","The page showing others that are playing the same game or that you have recently played with","\n        ","\n        ","\n          ","ov_settings","\n          ","The Steam client overlay settings","\n        ","\n        ","\n          ","ov_gamegroup","\n          ","Opens the Steam Community web browser to the official game group for this game","\n        ","\n        ","\n          ","ov_achievements","\n          ","The achievements page for your game","\n        ","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","steam_activate_overlay(overlayindex);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","overlayindex","\n        ","The page index of the Steam API UI to show (see constants listed below).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var key = keyboard_lastkey;"," switch (key)","     {\n    ","     case vk_f1: steam_activate_overlay(ov_friends); break;","     case vk_f2: steam_activate_overlay(ov_community); break;","     case vk_f3: steam_activate_overlay(ov_players); break;","     case vk_f4: steam_activate_overlay(ov_settings);\n    break;","     case vk_f5: steam_activate_overlay(ov_gamegroup); break;","     case vk_f6: steam_activate_overlay(ov_achievements); break;","     }\n  ","\n  ","The above code polls the last keyboard key pressed and if it is any of the function keys from 1 to 6 it will open the corresponding page of the Steam overlay.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Steam Overlay","\n        ","Next: ","steam_activate_overlay_browser","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_activate_overlay"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2261"})