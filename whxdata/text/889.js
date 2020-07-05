rh._.exports({"0":["object_get_solid"],"1":["object_get_solid"],"2":["object_get_solid"],"3":["\n  ","\n  ","\n  ","This function will tell you whether the object you are checking has been flagged as \"solid\" or not. A solid object generates a special collision event when using the traditional collision system (ie: the physics world is off). Please note\n    that this is not an instance function! So, you can have a solid object and a normal instance of the same object and vice-versa. You can set an individual instances solid flag using the ","solid"," instance\n    variable.","\n  "," ","\n  ","\n  ","object_get_solid(obj);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","obj","\n        ","The index of the object to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if (!solid) && (object_get_solid(object_index))","     {","     solid = true;","     }","\n  ","The above code will check the instance running it to see if it is solid or not as well as check the object index of the instance to see if it is flagged as solid or not. If the instance is ","not"," solid yet the object index is flagged as solid, it\n    will set \"solid\" to true for that instance.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Objects","\n        ","Next: ","object_get_sprite","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["object_get_solid"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"889"})