rh._.exports({"0":["ds_map_set"],"1":["ds_map_set"],"2":["ds_map_set"],"3":["\n  ","\n  ","\n  ","With this function you can set the value of a key within a given DS map. You supply the DS map ID value (as returned by the function ","ds_map_create()",", then give the key you want to set and the value to set it\n    to. Keys can be integers or strings, and if the given key does not exist then it will be created for you. This function is the same as using the ","DS map accessor"," to set/create a map key/value pair.","\n  "," ","\n  ","\n  ","ds_map_set(id, key, value)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the map to use.","\n      ","\n      ","\n        ","key","\n        ","The key to set.","\n      ","\n      ","\n        ","value","\n        ","The value to set the key to.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if is_undefined(ds_map_find_value(map, \"score\"))","     {\n    ","     ds_map_set(map, \"score\", 0);","     }\n  ","\n  ","The above code will check to see if the given key exists and if it doesn't then it is created and set.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Maps","\n        ","Next: ","ds_map_read","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_map_set"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1809"})