rh._.exports({"0":["sprite_duplicate"],"1":["sprite_duplicate"],"2":["sprite_duplicate"],"3":["\n  ","\n  ","\n  ","This function will return the index of a newly created sprite that is a duplicate (copy) of the one input as the \"index\" argument. If the function fails, -1 is returned. This function ","must"," be used to copy any\n    sprites from the original assets before any transformations can be done on them. For example, if you wish to change the bounding box for a sprite, or set its alpha from another sprite, you must first duplicate it, then perform the operation on the\n    duplicated sprite and use that. A duplicated sprite will be places on its own unique texture page when created, meaning that duplicating multiple sprites will create multiple texture pages and have an impact on performance, so use this function only\n    when necessary.","\n  ","NOTE",": When you duplicate a sprite in GameMaker Studio 2 you must remember to remove it again (with ","sprite_delete()",")\n    when no longer needed, otherwise there is risk of a memory leak which will slow down and eventually crash your game.","\n  "," ","\n  ","\n  ","sprite_duplicate(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the sprite to duplicate.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (unique sprite ID value)","\n  "," ","\n  ","\n  ","new_spr = sprite_duplicate(sprite_index)","\n  ","The above code duplicates the sprite currently being used as the sprite index of the instance and stores the index for this new sprite in the variable \"new_spr\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Manipulation","\n        ","Next: ","sprite_assign","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sprite_duplicate"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns","Example:"],"id":"572"})