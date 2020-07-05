rh._.exports({"0":["move_outside_solid"],"1":["move_outside_solid"],"2":["move_outside_solid"],"3":["\n  ","\n  ","\n  ","With this function you can tell an instance to move out of a collision with any instance flagged as ","solid"," in any direction and any number of pixels each step, with a\n    value of -1 or 0 for the maxdist being a default 1000px, ie: GameMaker Studio 2 will move the instance continually up 1000 pixels until it is out of collision.","\n  "," ","\n  ","\n  ","move_outside_solid(dir, maxdist);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","dir","\n        ","The direction to move in.","\n      ","\n      ","\n        ","maxdist","\n        ","The maximum distance the object can travel (-1 or 0 a default value of 1000 pixels).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if other.solid","     {\n    ","     var pdir;","     pdir = point_direction(other.x, other.y, x, y);","     move_outside_solid(pdir, -1);","     }\n  ","\n  ","The above code would go in a collision event and checks to see if the \"other\" instance in the collision is flagged as \"solid\". If it is, it will then move the instance out of collision.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Movement","\n        ","Next: ","move_random","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["move_outside_solid"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1157"})