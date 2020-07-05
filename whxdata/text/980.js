rh._.exports({"0":["layer_exists"],"1":["layer_exists"],"2":["layer_exists"],"3":["\n  ","\n  ","\n  ","This function can be used to check if the given ","layer"," exists. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance\n    impact) and the function will return a ","boolean"," value of ","true"," if it exists or ","false"," if it does not.","\n  ","NOTE",": This function works within the scope of the current target room - by default the room in which the function is called - which can be set using the function ","layer_set_target_room()",".","\n  "," ","\n  ","\n  ","layer_exists(layer_name)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_name","\n        ","The name of the layer (a string or ID value)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if !layer_exists(global.tileLayer)","    {\n    ","    global.tileLayer = layer_create(1000);","    }\n  ","\n  ","The above code will check to see if the layer stored in the global variable actually exists, and if it does not then it is created.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_get_id","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_exists"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"980"})