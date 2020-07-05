rh._.exports({"0":["skeleton_slot_data"],"1":["skeleton_slot_data"],"2":["skeleton_slot_data"],"3":["\n  ","\n  ","\n  ","With this function you can populate a (pre-created) ","DS list"," with data for each of the available attachment slots that an animation contains. This data is returned in the forum of a ","DS map","    which contains the following key/value pairs:","\n  ","\n    ","\"name\":"," The name of the slot.","\n    ","\"bone\":"," The name of the bone.","\n    ","\"attachment\":"," The name of the attachment if one is used or \"(none)\" if there isn't one assigned.","\n  ","\n  ","The values for each key will be strings and can then be used in the other skeleton attachment functions for these types of sprite. Note that the DS map created are ","not"," destroyed so you will need to loop through the DS list and destroy each of\n    the created maps yourself.","\n  "," ","\n  ","\n  ","skeleton_slot_data(sprite, list);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite","\n        ","The sprite index of the Spine skeletal animation to get the data from.","\n      ","\n      ","\n        ","list","\n        ","The ID of the DS list to populate with the DS maps.","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var list = ds_list_create();"," var open = true;"," slot_name = \"\";"," skeleton_slot_data(sprite_index, list);"," for (var i = 0; i < ds_list_size(list); i++;)","     {\n    ","     var map = list[| i];","     if open","         {\n    ","         if map[? \"attachment\"] == \"(none)\"","             {\n    ","             open = false;","             slot_name = map[? \"name\"];","             }\n    ","         }\n    ","     ds_map_destroy(map);\n    ","     }\n    "," ds_list_destroy(list);\n  ","\n  ","The above code creates a DS list and then populates it with the slot data for the instance sprite. This data is then parsed to extract the individual DS maps with the slot data. This is then checked to see if there is an empty slot, and if so the variable\n    \"slot_name\" is assigned the empty slot name before the DS map is destroyed. Finally we destroy the DS list as it is no longer required.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Slots","\n        ","Next: ","skeleton_slot_data_instance","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["skeleton_slot_data"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"639"})