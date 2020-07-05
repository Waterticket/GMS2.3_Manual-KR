rh._.exports({"0":["xboxlive_fire_event"],"1":["xboxlive_fire_event"],"2":["xboxlive_fire_event"],"3":["\n  ","\n  ","\n  ","This function can be used to fire a stat event. The \"event_name\" argument is the name of the event to be fired as defined in the XDP console for your game, and the following additional parameters will also depend on what you have a set up\n    for the stat. The function will return 0 if the event was sent (and should be received/processed by the server) or -1 if there was an error (ie: your event was not setup as the event manifest file included in the project says another number).","\n  "," ","\n  ","\n  ","xboxlive_fire_event(event_name, [stat_parameters]);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","event_name","\n        ","The name of the event to fire.","\n      ","\n      ","\n        ","stat_parameters","\n        ","[OPTIONAL] Additional parameters to add to the event.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","var _user = xboxlive_get_user(0);"," var _uid = xboxlive_user_id_for_user(_user);"," result = xboxlive_fire_event(\"PlayerSessionStart\", _uid, global.guid_str, 0, 42, 42);","\n  ","The above code gets some information about the user then fires off a stat event along with this (and additional) data.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Stats And Leaderboards","\n        ","Next: "," xboxlive_stats_setup ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_read_player_leaderboard"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2506"})