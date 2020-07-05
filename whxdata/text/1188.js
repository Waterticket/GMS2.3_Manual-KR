rh._.exports({"0":["place_free"],"1":["place_free"],"2":["place_free"],"3":["\n  ","\n  ","\n  ","You can use this function to check and see if the calling instance would collide with any instance ","flagged as ","solid"," in your game. Now, it should be noted that for this to work, the instance running the code must have a valid collision\n    mask (either for the sprite itself, or through the ","mask_index",") and it will only register collisions with those solid flagged instances that also have a\n    valid mask.","\n  ","The function itself basically works by taking the instance and testing for collisions with only solid flagged instances when placed at the position specified by the x/y arguments. The collision checking can be either precise or based on the bounding\n    box of the instance, depending on what kind of collision mask has been selected.","\n  ","Note that the given x/y coordinates will be floored to the nearest integer before the check is performed.","\n  "," ","\n  ","\n  ","place_free(x, y);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x position to check.","\n      ","\n      ","\n        ","y","\n        ","The y position to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if place_free(mouse_x, mouse_y)","    {\n    ","    x = mouse_x;","    y = mouse_y;","    }\n  ","\n  ","The above code will check for a collision with any solid flagged instance if the calling instance were to be placed at the same position as the mouse. If there is no collision detected, then the instance has its x/y coordinates set to those of the mouse.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Collisions","\n        ","Next: ","place_meeting","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["place_free"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1188"})