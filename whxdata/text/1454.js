rh._.exports({"0":["part_system_update"],"1":["part_system_update"],"2":["part_system_update"],"3":["\n  ","\n  ","\n  ","This function will advance the given particle system one step in game time and can be used to simulate the particle system behaviour when automatic updating is off, or it can be used to advance a particle system to a specific point all in one step.\n    For example, if you have a particle system for snow, and you want it to appear that the snow is falling right from the moment the player enters the room then you may wish to advance your snow particles for a few seconds in the create event of an instance\n    so that the first time they are drawn, there are particles all over the screen (the code example below shows this). You can also use this function when automatic updating of the system is switched off by the function ","part_system_automatic_update()","    to move the system along.","\n  "," ","\n  ","\n  ","part_system_update(ind);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index of the particle system to update.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","repeat (room_speed * 3)","     {\n    ","     part_system_update(global.RainSys);\n    ","     }\n  ","\n  ","The above code will advance the particle system indexed in the global variable \"RainSys\" by 3 seconds.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Systems","\n        ","Next: ","part_system_drawit","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["part_system_update"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1454"})