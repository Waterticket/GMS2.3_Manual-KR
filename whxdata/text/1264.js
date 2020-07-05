rh._.exports({"0":["gpu_set_texrepeat"],"1":["gpu_set_texrepeat"],"2":["gpu_set_texrepeat"],"3":["\n  ","\n  ","\n  ","This function can be used to indicate to GameMaker Studio 2 whether textures should repeat (","true",") or not (","false",") when used for models and primitives. Normally texture widths and heights lie in the range 0 - 1, but if you specify\n    a value larger than 1 by default the rest is not drawn (the entire texture will be drawn with an \"empty\" section corresponding to the percentage over 1 that is used. So a value of 2 for a texture width or height would draw the texture in\n    half the space and leave the other half empty). However, by using this function to set repeat to true the texture is repeated automatically over all models and primitives. The likely use case for these functions is for repeating a texture in 3D but\n    in order for it to work and not pull images from the rest of the texture page, the sprite used will need to be marked as being on a \"Separate Texture Page\" in the Sprite Editor.","\n  ","NOTE",": Sprites and backgrounds are always drawn without repeating, so once you draw a sprite or background this value is reset to ","false",". This default behaviour will not affect texture stage settings (ie: calling the function will, but\n    the internal setting to false will not).","\n  ","NOTE",": This setting will over-ride any texture stage repeats set for shaders when using the function ","gpu_set_texrepeat_ext()",".","\n  "," ","\n  ","\n  ","gpu_set_texrepeat(enable);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","enable","\n        ","Enable or disable texture filtering (","true"," / ","false",")","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if gpu_get_texrepeat()","     {\n    ","     gpu_set_texrepeat(false);\n    ","     }\n    "," else\n    ","     {\n    ","     gpu_set_texrepeat(true);\n    ","     }\n  ","\n  ","The above code checks to see if texture repeating is on or off and switches it accordingly.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_set_texrepeat_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_set_texrepeat"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1264"})