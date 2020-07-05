rh._.exports({"0":["part_emitter_destroy_all"],"1":["part_emitter_destroy_all"],"2":["part_emitter_destroy_all"],"3":["\n  ","\n  ","\n  ","This function will remove all defined emitters from the given system and clear them from memory (this will also stop any particles from being produced by the given emitter, but it does ","NOT"," remove them from the room). This function should always\n    be called when the emitters are no longer needed for the system to prevent memory leaks and errors.","\n  "," ","\n  ","\n  ","part_emitter_destroy_all( ps );","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ps","\n        ","The particle system to destroy all emitters from.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if lives = 0","     {\n    ","     part_emitter_destroy_all(global.Sname);\n    ","     room_goto(rm_Menu);\n    ","     }\n  ","\n  ","The above code checks the built in global variable \"lives\" and if it is 0, it destroys all particle emitters and then changes room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Emitters","\n        ","Next: ","part_emitter_exists","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["part_emitter_destroy_all"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1491"})