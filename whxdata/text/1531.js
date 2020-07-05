rh._.exports({"0":["camera_get_update_script"],"1":["camera_get_update_script"],"2":["camera_get_update_script"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve the ID of the ","script function"," assigned as the update script for the given camera. If no script is assigned then the function will return -1.","\n  "," ","\n  ","\n  ","camera_get_update_script(camera_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","camera_id","\n        ","The unique camera ID value returned when you created the camera","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Script function ID or -1 if no function is assigned","\n  "," ","\n  ","\n  ","var scr = camera_get_update_script(camera_view[0]);"," if scr != scr_cutscene","     {\n    ","     camera_set_update_script(camera_view[0], scr_cutscene);","     }\n  ","\n  ","The above code checks the script function assigned as the update function for the camera assigned to view port[0] and if it is not \"cutScene\" it is set to that script.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","camera_get_begin_script","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["camera_get_update_script"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1531"})