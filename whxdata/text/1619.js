rh._.exports({"0":["display_set_timing_method"],"1":["display_set_timing_method,tm_sleep,tm_countvsyncs"],"2":["display_set_timing_method,tm_sleep,tm_countvsyncs"],"3":["\n  ","\n  ","\n  ","This function can be used to set the timing method to be used for rendering your game. The method can be one of the following constants:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","tm_sleep","\n        ","Use the sleep margin value as the main timing method","\n      ","\n      ","\n        ","tm_countvsyncs","\n        ","Use vsync timing as the main timing method (default for all supported platforms)","\n      ","\n    ","\n  ","\n  "," ","\n  ","The vsync timing method uses the target platforms support for vertical synchronisation to provide an anchor for the games render timing calculations, while setting the mode to sleep margin will just try to ensure that each frame lasts for the correct\n    amount of time (say 1/30th or 1/60th of a second) by waiting or sleeping. In general the default vsync timing will give the smoothest results, but note that when using the vsync method, the sleep margin values are still relevant, although it will\n    have a reduced impact and we recommend keeping it at its default value when using this method.","\n  ","By default on all platforms ","except"," PS4, Ubuntu and HTML5, GameMaker Studio 2 will use the vsync timing method, while on the unsupported platforms, ","only"," sleep margin timing can be used.","\n  ","If you wish to set the sleep margin you can do so using the function ","display_set_sleep_margin()"," and you can find which timing method is currently being used with the function ","display_get_timing_method()",".","\n  "," ","\n  ","\n  ","display_set_timing_method(method);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","method","\n        ","The timing method to use (see the list of constants, above)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if display_get_timing_method() != tm_sleep"," {\n    "," display_set_timing_method(tm_sleep);\n    "," if display_get_sleep_margin() != 20","     {\n    ","     display_set_sleep_margin(20);\n    ","     }\n    "," }\n  ","\n  ","The above code will check the timing method and then if it's not set to ","tm_sleep"," it will be set to that and the sleep margin set to 20.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","Cameras And Display","\n        ","Back: ","\n        ","Next: ","display_set_sleep_margin","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["display_set_timing_method"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1619"})