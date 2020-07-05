rh._.exports({"0":["shader_get_uniform"],"1":["shader_get_uniform"],"2":["shader_get_uniform"],"3":["\n  ","\n  ","\n  ","Since you cannot change the value of a shader constant within the shader itself, you have to set it before calling the shader using one of the available ","uniform set"," functions. However, to be able to do that you must first call this\n    function to get the \"handle\" of the shader constant that you will want to change.","\n  ","NOTE",": Although a shader is made up of two discreet programs (vertex and fragment) this function will not differentiate between the two and will return the handle of the shader constant from either of them.","\n  "," ","\n  ","\n  ","shader_get_uniform(shader, uniform);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","shader","\n        ","The index of the shader to use.","\n      ","\n      ","\n        ","uniform","\n        ","The shader constant to get the handle of (a string).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (Uniform handle)","\n  "," ","\n  ","\n  ","shader_params = shader_get_uniform(shd_glass, \"u_vRefractColour\");","\n  ","The above code will get the handle of the shader constant \"u_vRefractColour\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Shaders","\n        ","Next: ","shader_get_sampler_index","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["shader_get_uniform"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"803"})