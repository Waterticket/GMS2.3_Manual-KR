rh._.exports({"0":["view_yport"],"1":["view_yport"],"2":["view_yport"],"3":["\n  ","\n  ","\n  ","With this built in array you can get or set the y position of the given view port. The view port is the area on the screen where the view is drawn, and you can have up to 8 active at any one time (the array is values from 0 to 7 inclusive to give 8\n    ports). Now, the default for GameMaker Studio 2 is that the game window (or background canvas) is the same size as the room, however when you activate view ports and cameras, this behaviour changes and the ","total size of the bounding box for all view ports","    is used. So, if you have two different view ports at two different positions, the total area that they cover defines the size of the game window. The following image illustrates this:","\n  ","If you only have ","one"," view port setting the x or y value of the port can\n    have some interesting effects but is not normally practical (see the image below) and so it is better to maintain the x and y position as (0,0).","\n  ","\n  ","\n  ","view_yport[0 .. 7];","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","view_xport[0] = 0;"," view_yport[0] = 0;","\n  ","The above code resets the position of view port[0] to the (0,0) position (top left hand corner) of the display.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","view_wport","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["view_yport"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1553"})