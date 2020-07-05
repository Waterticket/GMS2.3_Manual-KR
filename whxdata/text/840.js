rh._.exports({"0":["font_get_last"],"1":["font_get_last"],"2":["font_get_last"],"3":["\n  ","\n  ","\n  ","When defining a font in GameMaker Studio 2, you can define a range of characters to include. This is because the font itself is not actually included with your game (for legal reasons) but an ","image"," of\n    the font is included on a texture page and that is what your game will use (just like any other graphics asset). This means that you will want to keep the number of characters that you use to a minimum and specify only the range of characters that\n    your game will need so as to keep texture memory as optimised as possible. This function can be used to find the last character (as an UTF8 value) that was used when your font asset was added to your game.","\n  "," ","\n  ","\n  ","font_get_last(ind);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","Index of the font to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","num = font_get_last(fnt_Main);","\n  ","The above code will store the ASCII value of the last letter of the font range for the font indexed in \"fnt_Main\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fonts","\n        ","Next: ","font_get_italic","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["font_get_last"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"840"})