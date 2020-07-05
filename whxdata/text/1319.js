rh._.exports({"0":["Sprites And Tiles"],"2":["Sprites And Tiles"],"3":["\n  ","\n  ","\n  ","Even though you can set up backgrounds in the room editor and you can assign sprites to instances, often this is not flexible enough for the game you are making. For example, if you have an instance that has to draw a menu, you may want to display various\n    button sprites at a time, or if you have a game with scrolling parallax backgrounds you will need to be able to set them through code in a controller instance of some type. In these situations you should be using the following functions which can\n    draw sprite and background assets anywhere in the room with some of the functions also permitting you to manipulate the shape, size, colour and alpha of the sprite to achieve special effects.","\n  ","You can assign a sprite to an instance and by default GameMaker Studio 2 will draw it with the properties given by the various ","sprite variables",",\n    however if you add anything into the draw event, you are \"taking control\" and must tell GameMaker Studio 2 exactly what to draw. This means that if you must use the following functions to define exactly what it is the instance is\n    to draw and where about in the room it is to draw it:","\n  "," ","\n  ","\n    ","draw_self","\n    ","draw_sprite","\n    ","draw_sprite_ext","\n    ","draw_sprite_general","\n    ","draw_sprite_part","\n    ","draw_sprite_part_ext","\n    ","draw_sprite_stretched","\n    ","draw_sprite_stretched_ext","\n    ","draw_sprite_pos","\n    ","draw_sprite_tiled","\n    ","draw_sprite_tiled_ext","\n  ","\n  "," ","\n  ","If you are using SWF format sprites, then there are also additional options for controlling the anti-aliasing used when drawing (see ","Importing Non-Bitmap Sprites"," for\n    more information on these types of sprites). Note that these functions work on a ","global"," level and will set the AA on all vector SWF sprites drawn after they have been called.","\n  "," ","\n  ","\n    ","draw_enable_swf_aa","\n    ","draw_set_swf_aa_level","\n    ","draw_get_swf_aa_level","\n  ","\n  "," ","\n  ","Apart from those functions listed above, there are also two special functions designed for use with skeletal animations (see ","Importing Non-Bitmap Sprites"," for\n    more information on these types of sprites, and the section ","Skeletal Animations"," for specific functions related to these types of sprites):","\n  "," ","\n  ","\n    ","draw_skeleton","\n    ","draw_skeleton_instance","\n    ","draw_skeleton_collision","\n    ","draw_skeleton_time","\n  ","\n  "," ","\n  ","Tiles are drawn automatically based on the data that they contain, the tile set used and the tile map properties. However you ","can"," draw individual tiles or tile maps using the following functions:","\n  "," ","\n  ","\n    ","draw_tile","\n    ","draw_tilemap","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Drawing","\n        ","Next: ","Text","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Sprites And Tiles"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"1319"})