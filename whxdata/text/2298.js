rh._.exports({"0":["steam_user_owns_dlc"],"1":["steam_user_owns_dlc"],"2":["steam_user_owns_dlc"],"3":["\n  ","\n  ","\n  ","If your game has DLC created for it, you can use this function to check and see whether the user has bought it before accessing any files associated with it. The function returns ","true"," if the player owns the content, and ","false"," if the\n    user does not, but note that even if the user owns the DLC, they may not have it installed, so you should use the additional function of ","steam_user_installed_dlc()"," to check that it is installed as\n    well before using it. Note that Steam IDs can be large numbers and so you may need to cast your ID value as an ","int64()"," before supplying it to the function.","\n  "," ","\n  ","\n  ","steam_user_owns_dlc(dlc_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","dlc_id","\n        ","The unique identifier for the DLC to be checked (an integer int64).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","global.Level_Max = 100;"," if steam_user_owns_dlc(10354)","     {\n    ","     if steam_user_installed_dlc(10354)","         {\n    ","         global.Level_max = 200;","         }\n    ","     }\n  ","\n  ","The above code will check to see if the user has bought, and installed, the DLC with the id 10354, and if so set a global variable to a different value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DLC","\n        ","Next: ","steam_user_installed_dlc","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_user_owns_dlc"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2298"})