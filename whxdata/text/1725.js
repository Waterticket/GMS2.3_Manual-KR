rh._.exports({"0":["virtual_key_delete"],"1":["virtual_key_delete"],"2":["virtual_key_delete"],"3":["\n\n\n\n  ","\n  ","\n  ","If your game has different rooms or instances to control menus and game-play and other things, then it is probable that you will need to change the position and key maps of your virtual keys at some point. For that you can use this function to delete\n    the old ones before creating the new ones (if necessary). The function requires that you supply the ID of the virtual key to delete - as returned by ","virtual_key_add()",".","\n  ","Note that any virtual keys will be automatically removed from the room when the room is changed, so this function is ","only"," necessary when you wish to manually remove the keys before the room itself has finished.","\n  "," ","\n  ","\n  ","virtual_key_delete(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the virtual key to delete.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","virtual_key_delete(global.Left);","\n  ","The above code deletes the virtual key indexed in the global variable \"global.Left\".","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Virtual Keys And Keyboards","\n        ","Next: ","keyboard_virtual_show","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["virtual_key_delete"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax","Returns:","Example:"],"id":"1725"})