rh._.exports({"0":["font_replace_sprite_ext"],"1":["font_replace_sprite_ext"],"2":["font_replace_sprite_ext"],"3":["\n  ","\n  ","\n  ","This function will replace a sprite font that you created previously using the function ","font_add_sprite_ext()",". It uses a \"sprite strip\", where each sub-image is be an individual symbol or letter,\n    and the images are mapped to letters based on the argument \"string_map\" of the function. This argument is a string that you can use to tell GameMaker Studio 2 what order the sub-images of the sprite font are and it will map these automatically\n    when writing text. So, for example, if you have a string-map of \"AaBbCcDdEeFfGgHh\", your sprite font ","must"," have the sub-images ordered in this way.","\n  ","You can also set the spacing for the font to be proportional (","true",") or not (","false","), where a proportional font is spaced based on the actual width of the letters (so the letter \"i\" takes less room than the letter \"w\",\n    for example) while a non-proportional font will be spaced based on the sub-image width, like a monospaced font. Finally, you can define the space to leave between each letter when writing, and this can be any integer value, with 0 being no space (the\n    letters will \"touch\" if proportional). The function returns an ","index"," value that should be stored in a variable as this will be needed in all further codes that refer to this font.","\n  ","If the funtion fails, then it will fail silently without replacing the given sprite font.","\n  ","NOTE: ","This function requires you to have previously added a sprite font using ","font_add_sprite()",", as it will replace that and cannot be used\n    on fonts that are included as part of the game resources.","\n  "," ","\n  ","\n  ","font_replace_sprite_ext(font, spr, string_map, prop, sep);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","font","\n        ","The font to replace.","\n      ","\n      ","\n        ","spr","\n        ","The sprite to add a font based on.","\n      ","\n      ","\n        ","string_map","\n        ","String from which sprite sub-image order is taken.","\n      ","\n      ","\n        ","prop","\n        ","Set as proportional font or not.","\n      ","\n      ","\n        ","sep","\n        ","The space to leave between each letter.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  "," ","\n  ","font_replace_sprite_ext(global.Font, spr_CalcFont, \"0123456789+-*/=\", true, 2);","\n  ","The above code will replace a sprite font asset that is indexed in the variable \"global.Font\" with sprite images indexed in the variable \"spr_CalcFont\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fonts","\n        ","Next: ","font_delete","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["font_replace_sprite_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"854"})