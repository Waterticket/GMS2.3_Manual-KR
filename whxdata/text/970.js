rh._.exports({"0":["room_assign"],"1":["room_assign"],"2":["room_assign"],"3":["\n  ","\n  ","\n  ","This function will copy one room to another, removing all instances, tiles etc... from the room that is being copied to and replacing them completely with the new room contents. You supply the index to for the room to be copied to (either as defined\n    in the asset browser or as returned by the function ","room_add()",") as well as the index of the source room. Note that calling this function on a room asset created in the Asset Browser ","will permanently change the contents of the room",",\n    and even calling ","game_restart()"," will not return the room to it's original state (only ending the game and opening it again will start with the room in its original state again).","\n  "," ","\n  ","\n  ","room_assign(ind, source);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index of the room to be ","copied to",".","\n      ","\n      ","\n        ","source","\n        ","The index of the room to be ","copied from",".","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","global.rm = room_add();"," room_assign(global.rm, rm_Base);","\n  ","The above code will add a new room to the game and then copy the contents of the room indexed as \"rm_Base\" into it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","room_instance_add","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["room_assign"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"970"})