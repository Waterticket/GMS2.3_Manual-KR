rh._.exports({"0":["virtual_key_hide"],"1":["virtual_key_hide"],"2":["virtual_key_hide"],"3":["\n\n\n\n  ","\n  ","\n  ","Once you have created your virtual key for your devices, you may need to debug and test that it is correctly positioned and working properly and for that you would call the function ","virtual_key_show()",". However,\n    you may need to toggle this view on and off, so you can also hide the virtual key with this function, using the index of the virtual key that you want to hide (previously created and stored using ","virtual_key_add()",").\n    Once you are happy with things it is recommended that you create and place your own graphic in its area.","\n  "," ","\n  ","\n  ","virtual_key_hide(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the virtual key to hide.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if global.Debug","    {\n    ","    virtual_key_show(global.Left);\n    ","    }\n    "," else\n    ","    {\n    ","    virtual_key_hide(global.Left);\n    ","    }\n  ","\n  ","The above code checks the global variable \"global.Debug\" and if it tests true then the virtual key indexed in the variable \"global.Left\" will be drawn on the screen, and if it is false then the key will be hidden.","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Virtual Keys And Keyboards","\n        ","Next: ","virtual_key_delete","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["virtual_key_hide"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax","Returns:","Example:"],"id":"1722"})