rh._.exports({"0":["skeleton_animation_get_frames"],"1":["skeleton_animation_get_frames"],"2":["skeleton_animation_get_frames"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve the number of frames that any given skeleton animation has. You supply the skeleton animation name (as a string, as defined in the program used to make the animation, or as returned by using the function     ","skeleton_animation_get",", and the function returns the frames that it has as an integer value. The function will return 0 if the specified animation does not exist.","\n  "," ","\n  ","\n  ","skeleton_animation_get_frames(anim_name);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","anim_name","\n        ","The animation name to get the frames of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer","\n  "," ","\n  ","\n  ","var num = skeleton_animation_get_frames(skeleton_animation_get());"," image_index = num -1;"," image_speed = 0;","\n  ","The above code will get the number of frames in the animation and then set the sprite to the last frame and stop animating.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Animation","\n        ","Next: ","skeleton_animation_get_frame","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["skeleton_animation_get_frames"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"617"})