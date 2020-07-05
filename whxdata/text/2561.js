rh._.exports({"0":["gc_get_stats"],"1":["gc_get_stats"],"2":["gc_get_stats"],"3":["\n  ","\n  ","\n  ","With this function you can retrieve information about the current state of the garbage collector. The function will return a ","struct"," which will have the following member variables (note that \"objects\"\n    here refers to anything that can be garbage collected and ","not"," general object instances as defined in the Asset Browser):","\n  ","\n    ","objects_touched"," - this is the number of active objects the garbage collector found in the previous frame. This will vary depending on which generation was collected.","\n    ","objects_collected"," - the number of objects which the garbage collector determined weren't active in the previous frame, and which could therefore be deleted.","\n    ","traversal_time"," - this is the time in microseconds (on the main thread) which the garbage collector took to figure out which objects were active.","\n    ","collection_time"," - this is the time in microseconds (on a separate thread) which the garbage collector took to clean up the objects deemed inactive.","\n    ","gc_frame"," - this is a counter which is incremented every time a garbage collection pass occurs. If garbage collection is disabled this will not increase.","\n    ","generation_collected"," - this is the index of the generation that was collected last. 0 is the youngest generation and 3 is currently the oldest.","\n    ","num_generations"," - this is the total number of garbage collection generations.","\n    ","num_objects_in_generation"," - this is an array (of size ","num_generations",") containing the number of objects in each generation.","\n  ","\n  ","NOTE",": On the HTML5 target platform garbage collection is handled by the JavaScript engine and therefore the member variables in the above struct will all return 0 if this function is used on that platform.","\n  "," ","\n  ","\n  ","gc_get_stats();","\n  "," ","\n  ","\n  ","Struct","\n  "," ","\n  ","\n  ","if (global.debug == true)","     {\n    ","     var _s = gc_get_stats();","     var _t = _s.traversal_time;","     var _c = _s.collection_time;","     show_debug_message(\"Traversal time = \" + string(_t))","     show_debug_message(\"Collection time = \" + string(_c))","        }\n  ","\n  ","The above code checks a global variable and if it is ","true"," it gets information from the garabge collector and outputs it to the console as debug messages.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Garbage Collection","\n        ","Next: ","gc_enable","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gc_get_stats"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2561"})