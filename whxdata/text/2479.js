rh._.exports({"0":["xboxlive_agegroup_for_user"],"1":["xboxlive_agegroup_for_user,xboxlive_agegroup_unknown,xboxlive_agegroup_child,xboxlive_agegroup_teen,xboxlive_agegroup_adult"],"2":["xboxlive_agegroup_for_user,xboxlive_agegroup_unknown,xboxlive_agegroup_child,xboxlive_agegroup_teen,xboxlive_agegroup_adult"],"3":["\n  ","\n  ","\n  ","This function will return one of four constants (shown below) to indicate the age-range assigned to the specified user ID pointer.","\n  "," ","\n  ","\n  ","xboxlive_agegroup_for_user(user_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The user ID (a pointer) to check","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","Constant","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","xboxlive_agegroup_unknown","\n        ","The age group for the user is unknown","\n      ","\n      ","\n        ","xboxlive_agegroup_child","\n        ","The user age group is between 8 and 12 (inclusive)","\n      ","\n      ","\n        ","xboxlive_agegroup_teen","\n        ","The user age group is between 13 and 17 (inclusive, and between 13 and 19 in South Korea)","\n      ","\n      ","\n        ","xboxlive_agegroup_adult","\n        ","The user age group is 18 or over (or 20 and over in South Korea","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","var _age = xboxlive_agegroup_for_user(xboxlive_get_activating_user());"," if _age != xboxlive_agegroup_adult","     {\n    ","     global.ContentControl = true;","     }\n    "," else global.ContentControl = false;","\n  ","The above code checks the age group of the activating user and sets a global variable to ","true"," or ","false"," depending on the returned constant.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Users And Accounts","\n        ","Next: ","xboxlive_gamerscore_for_user","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_agegroup_for_user"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2479"})