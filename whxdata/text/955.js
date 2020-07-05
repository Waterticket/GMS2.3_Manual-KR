rh._.exports({"0":["room_speed"],"1":["room_speed"],"2":["room_speed"],"3":["\n  ","\n  ","\n  ","This variable holds the running speed of ","all"," rooms (and the game) in game frames per second. Note that this is ","NOT"," the FPS (frames per second) but rather the number of game steps that GameMaker Studio 2 will try to maintain each\n    second.","\n  ","IMPORTANT!"," This variable is maintained for Legacy Support only, and should not be used as it no longer sets the speed for a single room, but for ALL rooms in the game. To change game speed you should instead be using the function ","game_set_speed()",".","\n  "," ","\n  ","\n  ","room_speed;","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","alarm[0] = room_speed * 10;","\n  ","The above code uses ","room_speed"," to set an alarm to run for 10 seconds. Using the variable in this way will ensure that the alarm runs for 10 seconds, no matter what speed is set for the room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","room_height","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["room_speed (deprecated)"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"955"})