rh._.exports({"0":["audio_get_listener_mask"],"1":["audio_get_listener_mask"],"2":["audio_get_listener_mask"],"3":["\n  ","\n  ","\n  ","This function will return the bit-mask data that defines the current default (global) mask for the audio listeners.","\n  "," ","\n  ","\n  ","audio_get_listener_mask();","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var g_mask = audio_get_listener_mask();"," if g_mask != global.Audio_Mask","    {\n    ","    var num = audio_get_listener_count();","    global.Audio_Mask = 0;    for(var i = 0; i < num; ++i;)","       {\n    ","       var info = audio_get_listener_info(i);","       var m = audio_listener_get_data(info[? \"mask\"]);","       global.Audio_Mask = global.Audio_Mask | m;","       ds_map_destroy(info);\n    ","       }\n    ","    audio_set_listener_mask(mask);\n    ","    }\n  ","\n  ","The above code gets the current listener mask data and compares it to the data stored in a global variable. If they are not the same, the code checks the number of listeners available then loops through them and gets their mask bits, which are then\n    combined to create a single mask which is applied to the audio system to define the global listeners.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Listeners","\n        ","Next: ","audio_set_listener_mask","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_get_listener_mask"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"723"})