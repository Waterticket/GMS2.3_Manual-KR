rh._.exports({"0":["xboxlive_stats_set_stat_int"],"1":["xboxlive_stats_set_stat_int"],"2":["xboxlive_stats_set_stat_int"],"3":["\n  ","\n  ","\n  ","This function can be used to set the value of a stat for the given user ID. You supply the user ID as returned by (for example) the function ","xboxlive_get_user()",", then the stat string\n    to set (","if the stat string does not already exist then a new stat will be created and set to the given value",") and a value (an integer) to set the stat to. Note that the stat name must be alphanumeric only, with no symbols or spaces.","\n  ","When setting the stat value, any previous value will be overridden, therefore it is up to you to determine if the stat value should be updated or not (ie. check that the high score is actually the highest) by comparing to the current stat value with\n    the new one before setting it.","\n  ","The function will will return -1 if there was an error or the user ID is invalid, or any other value if the function was successfully called.","\n  "," ","\n  ","\n  ","xboxlive_stats_set_stat_int(user_id, stat, value);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The user ID pointer to set the stat for","\n      ","\n      ","\n        ","stat","\n        ","The statistic to set (a string)","\n      ","\n      ","\n        ","value","\n        ","The value to set the stat to (an integer)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var _val = xboxlive_stats_get_stat(p_user_id, \"GamesPlayed\");"," xboxlive_stats_set_stat_int(p_user_id, \"GamesPlayed\", ++_val);","\n  ","The above code retrieves the value for the stat \"GamesPlayed\", then sets the same stat to that value plus 1.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Stats And Leaderboards","\n        ","Next: ","xboxlive_stats_set_stat_string","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_stats_set_stat_int"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2497"})