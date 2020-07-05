rh._.exports({"0":["layer_get_script_end"],"1":["layer_get_script_end"],"2":["layer_get_script_end"],"3":["\n  ","\n  ","\n  ","This function returns the ","script function"," index of the function assigned to run at the end of rendering the given layer, or it will return -1 if no function is assigned. You supply the layer\n    ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact). You can assign script functions to a layer with ","layer_script_begin()"," and\n    ","layer_script_end()",".","\n  "," ","\n  ","\n  ","layer_get_script_end(layer_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the layer to target (or the layer name as a string)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Script Function Index (Real) or -1 if no script is assigned","\n  "," ","\n  ","\n  ","if layer_get_script_end(layer) == -1","    {\n    ","    layer_script_end(layer, scr_ResetShaderValues);","    }\n  ","\n  ","The above code will check to see if the layer that the instance running the code has a script function assigned to it and if it doesn't one is assigned.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_get_shader","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_get_script_end"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1013"})