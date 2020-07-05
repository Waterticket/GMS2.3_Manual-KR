rh._.exports({"0":["screen_save_part"],"1":["screen_save_part"],"2":["screen_save_part"],"3":["\n  ","\n  ","\n  ","With this function you can save a screenshot of a part of the game as it currently appears in the game display. The selection coordinates are based on the ","absolute"," size of the display (or window if not fullscreen), so (0,0) is always the top\n    left hand corner of the screen (or window). Below is an image that shows how this function works:","\n  ","The file will be saved to the ","working directory"," of\n    the game. It is important to note that the function is designed to be called in the ","Draw GUI End Event",", which should give consistent results across all platforms. Using it in any other event may not work as expected, and may give different\n    results across different targets and even devices.","\n  ","NOTE: ","This function does not work on the HTML5 target.","\n  "," ","\n  ","\n  ","screen_save_part(fname,x,y,w,h);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","fname","\n        ","The filename for the screenshot to save","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of the top left corner of the area of the screen to capture","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of the top left corner of the area of the screen to capture","\n      ","\n      ","\n        ","w","\n        ","The width of the area of the screen to capture","\n      ","\n      ","\n        ","h","\n        ","The height of the area of the screen to capture","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if keyboard_check_pressed(ord(\"S\"))","     {\n    ","     screen_save_part(\"Screens\\Screen_\" + string(num++) + \".png\", 0, 0, 100, 100)","     }\n  ","\n  ","The above code takes a screenshot of a part of the game screen that is 100 pixels square when the user presses the \"S\" key. This screen shot is saved to a specific folder and numbered using a variable which is then incremented.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","Cameras And Display","\n        ","Back: ","\n        ","Next: ","gif_open","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["screen_save_part"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1622"})