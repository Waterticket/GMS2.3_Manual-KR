rh._.exports({"0":["variable_instance_set"],"1":["variable_instance_set"],"2":["variable_instance_set"],"3":["\n  ","\n  ","\n  ","With this function you can set the value of a given variable in an instance. You supply the unique instance ID value (which can be found from the ","Instance Properties"," in the\n    room editor, or is returned when you call the function ","instance_create_layer()",") as well as the name of the variable to set the value of ","as a string"," (see example\n    code below), and then finally the value to set (can be any valid ","data type","). If the variable does not exist already in the instance it will be created and then assigned the value.","\n  "," ","\n  ","\n  ","variable_instance_set(instance_id, name, val);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","instance_id","\n        ","The unique ID value of the instance to use","\n      ","\n      ","\n        ","name","\n        ","The name of the variable to set (as a string)","\n      ","\n      ","\n        ","val","\n        ","The value to set the variable to","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if !variable_instance_exists(id, \"shields\")","    {\n    ","    variable_instance_set(id, \"shields\", 0);","    }\n  ","\n  ","The above code will check to see if an instance variable exists in the calling instance and if it does not then it is created and set to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variable Functions","\n        ","Next: ","variable_global_exists","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["variable_instance_set"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"487"})