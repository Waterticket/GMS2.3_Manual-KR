rh._.exports({"0":["instance_deactivate_all"],"1":["instance_deactivate_all"],"2":["instance_deactivate_all"],"3":["\n  ","\n  ","\n  ","This function will deactivate ","all"," instances that are in the room at the moment that the code is run. This may include the instance running the code if the \"notme\" flag is set to ","false",", but normally you would want that instance\n    to be active, in which case the \"notme\" flag should be set to ","true",". Note that deactivation is not instantaneous, and an instance that has been deactivated in this way will not be considered to be inactive until the end of the event\n    in which the function was called.","\n  ","NOTE",":If you deactivate an instance on room start (ie:from the room creation code, or from an instance create event of an instance within the room) all instances that are placed within the room from the room editor ","will still run their create event","    before being deactivated.","\n  ","WARNING",": Deactivating instances that have physics enabled will ","NOT"," stop their fixtures from interacting within the physics simulation. For that you should set their ","phy_active"," variable\n    to ","true"," or ","false"," as you activate/deactivate the instances.","\n  "," ","\n  ","\n  ","instance_deactivate_all(notme);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","notme","\n        ","Whether to keep the calling instance activated (true) or not (false).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","instance_deactivate_all(true);"," var _vx = camera_get_view_x(view_camera[0]);"," var _vy = camera_get_view_y(view_camera[0]);"," var _vw = camera_get_view_width(view_camera[0]);"," var _vh = camera_get_view_height(view_camera[0]);"," instance_activate_region(_vx\n    - 64, _vy - 64, _vw + 128, _vh + 128, false);","\n  ","The above code deactivates all instances except the one that is running the code and then activates a region within the room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Deactivating Instances","\n        ","Next: ","instance_deactivate_object","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["instance_deactivate_all"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"930"})