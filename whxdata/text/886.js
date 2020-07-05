rh._.exports({"0":["object_get_mask"],"1":["object_get_mask"],"2":["object_get_mask"],"3":["\n  ","\n  ","\n  ","This function will tell you whether the object you are checking has a mask index or not, and if it does then it will return the index of that mask, or -1 if it does not. Please note that this is not an instance function! You can have an object with\n    no mask while an instance of that same object can have one and vice-versa, or they can even have different masks. You can set an individual instances mask index using the ","mask_index","    instance variable.","\n  "," ","\n  ","\n  ","object_get_mask(obj);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","obj","\n        ","The index of the object to check","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","real","\n  "," ","\n  ","\n  ","if (mask_index != object_get_mask(object_index))","     {","     mask_index = object_get_mask(object_index);","     }","\n  ","The above example will check the mask index of the instance against the mask of the object_index of the instance. If they are not the same, then it will assign the same mask as the one the object index has to the instance.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Objects","\n        ","Next: ","object_get_parent","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["object_get_mask"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"886"})