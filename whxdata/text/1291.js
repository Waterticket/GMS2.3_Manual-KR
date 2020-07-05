rh._.exports({"0":["gpu_set_tex_max_aniso_ext"],"1":["gpu_set_tex_max_aniso_ext"],"2":["gpu_set_tex_max_aniso_ext"],"3":["\n  ","\n  ","\n  ","With this function you can set the maximum level of anisotropy when using the ","tf_anisotropic"," filter mode (see ","gpu_get_tex_mip_filter()"," for more information) on a shader sampler. You supply the\n    index value for the shader sampler (as returned by the function ","shader_get_sampler_index()",", and then a value within the range of 1 and 16 to set the level.","\n  "," ","\n  ","\n  ","gpu_set_tex_max_aniso_ext(sampler_index, maxaniso);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sampler_index","\n        ","The index of the shader sampler to get","\n      ","\n      ","\n        ","maxaniso","\n        ","The maximum anisotropic level to use (default: 16).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var _sampleIndex = shader_get_sampler_index(shd_Glass, \"s_Background\");"," var _spriteTex = sprite_get_texture(sprite_index, 0);"," shader_set(shd_Glass);\n    "," if gpu_get_tex_max_aniso_ext(_sampleIndex) != 8","     {\n    ","     gpu_set_tex_max_aniso_ext(_sampleIndex, 8);","     }\n    "," texture_set_stage(_sampleIndex , _spriteTex);"," shader_reset();\n  ","\n  ","The above code sets the maximum level of anisotropy to 8 for the given shader texture sampler if it has not already been set to 8.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Mipmapping","\n        ","Next: ","gpu_set_tex_mip_enable","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_set_tex_max_aniso_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1291"})