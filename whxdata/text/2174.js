rh._.exports({"0":["http_get_request_crossorigin"],"1":["http_get_request_crossorigin"],"2":["http_get_request_crossorigin"],"3":["\n  ","\n  ","\n  ","This function can be used to get the cross-origin type set for HTML5 games and will return a string (on all other platforms an empty string \"\" will be returned).","\n  "," ","\n  ","\n  ","http_get_request_crossorigin();","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","if string_lower(http_get_request_crossorigin()) != \"use-credentials\"","     {\n    ","     http_set_request_crossorigin(\"use-credentials\");\n    ","     }\n    "," sprite_add(\"sprites/player_outfit_1.png\", 0, false, false, 0, 0);","\n  ","The above code will first check the currently set cross origin type and if it is not \"use-credentials\" then it is set to \"use-credentials\" and then a sprite is added from a file.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","HTTP","\n        ","Next: ","http_set_request_crossorigin","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["http_get_request_crossorigin"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2174"})