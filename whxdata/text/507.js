rh._.exports({"0":["method"],"1":["method"],"2":["method"],"3":["\n  ","\n  ","\n  ","With this function you can bind any function that has previously been defined to a given instance or struct, creating a ","method variable"," that can\n    be used later. You supply the instance ID to use (it ","must"," be an instance that is active and in the room, and can't be an object ID) or a struct reference, as well as the ID of the function that you want to bind.\n    The function will return a ","method"," which can be called from the variable it is assigned to (see the code example below). It is worth noting that you can bind built-in functions as well as user\n    defined functions, and you can also supply ","undefined"," as the instance/struct argument meaning that the current ","self"," scope will\n    be used for the binding.","\n  "," ","\n  ","\n  ","method(struct_ref_or_instance_id, function);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","struct_ref_or_instance_id","\n        ","The unique reference or ID value of the struct or instance to use (or ","undefined"," for ","self",")","\n      ","\n      ","\n        ","function","\n        ","The ID of the function to use","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Method","\n  "," ","\n  ","\n  ","var _inst = instance_position(mouse_x, mouse_y, obj_Enemy);"," if instance_exists(_inst)","     {\n    ","     enemy_func = method(_inst, enemy_ai);","     }\n  ","\n  ","The above code will check to see if an instance exists at the given position and if it does then a function is bound to the instance and returned as the method variable \"enemy_func\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variable Functions","\n        ","Next: ","method_get_self","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["method"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"507"})