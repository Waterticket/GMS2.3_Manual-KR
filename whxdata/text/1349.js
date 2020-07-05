rh._.exports({"0":["draw_text_ext_transformed_colour"],"1":["draw_text_ext_transformed_colour,draw_text_ext_transformed_color"],"2":["draw_text_ext_transformed_colour,draw_text_ext_transformed_color"],"3":["\n  ","\n  ","\n  ","This function is a combination of the base ","draw_text","()"," function with the ","draw_text_ext","()",", ","draw_text_transformed","()","    and ","draw_text_colour","()"," functions. As such, this is the most general of all functions for drawing text and gives a large amount of flexibility when drawing. Note that the \"width\"\n    argument is based on a scale of 1, so if the scale is different, this value should be changed proportionally. For example, if the base width for a line break is 300 and you set the scale to 2, then the text will appear wrong, over-running the given\n    width. Instead you should have set the width to 150 to compensate the scaling.","\n  ","NOTE",": Gradient blending is not available for the HTML5 target unless WebGL is enabled, although you can still set the blending colours and it will blend the font with the first given colour. However all blending in this way creates a duplicate\n    font which is then stored in the cache and used when required, which is far from optimal and if you use multiple colour changes it will slow down your games performance. You can set the font cache size to try and limit this should it be necessary\n    using the function ","font_set_cache_size()",".","\n  "," ","\n  ","\n  ","draw_text_ext_transformed_colour(x, y, string, sep, w, xscale, yscale, angle, c1, c2, c3, c4, alpha);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of the drawn string.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of the drawn string.","\n      ","\n      ","\n        ","string","\n        ","The string to draw.","\n      ","\n      ","\n        ","sep","\n        ","The distance in pixels between lines of text.","\n      ","\n      ","\n        ","w","\n        ","The maximum width in pixels of the string before a line break.","\n      ","\n      ","\n        ","xscale","\n        ","The horizontal scale.","\n      ","\n      ","\n        ","yscale","\n        ","The vertical scale.","\n      ","\n      ","\n        ","angle","\n        ","The angle of the text.","\n      ","\n      ","\n        ","c1","\n        ","The colour for the top left of the drawn text.","\n      ","\n      ","\n        ","c2","\n        ","The colour for the top right of the drawn text.","\n      ","\n      ","\n        ","c3","\n        ","The colour for the bottom right of the drawn text.","\n      ","\n      ","\n        ","c4","\n        ","The colour for the bottom left of the drawn text.","\n      ","\n      ","\n        ","alpha","\n        ","The alpha for the text.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_set_halign(fa_center);"," draw_set_valign(fa_middle);\n    "," draw_text_ext_transformed_colour(200, 200, \"My name is\" + global.name +\".\", 20, 200, 0.5, 0.5, 180, c_blue, c_blue, c_navy, c_navy, 1);","\n  ","This will draw the given text with a blue to dark blue downward gradient, at position (200,200) in the room, rotated to be upside down and at half the normal point size of the font. There will be 20 pixels between each line should there be more than\n    one line drawn and each line will have a maximum width of 200 pixels.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Text","\n        ","Next: ","draw_highscore","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_text_ext_transformed_colour"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1349"})