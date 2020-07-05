rh._.exports({"0":["Get Tile Data In Cell"],"1":["DnD™ Action - Get Tile Data In Cell"],"2":["Get Tile Data In Cell"],"3":["\n  ","\n  ","\n  ","With this action you can get the tile data for a tile cell on a ","tile map"," layer. The tile data is simply a value that reflects the index of the tile along with the flip, mirror, and rotate values,\n    as well as any custom tile masks that you have used. With this action you first supply the layer to target using the name of the layer (a string) as defined in the room editor, and then the column and row of the tile map layer to get the tiledata\n    for. The \"cell\" is the area on the tile map grid that holds the tile you want to get the data from, so if your tiles are 16x16, for example, and the room is 1024x768 the tilemap will have 64 columns and 48 rows.","\n  ","NOTE",": The layer selected ","must"," have been defined as a Tile Map Layer in the room editor, otherwise you may get errors.","\n  ","The returned value will then be stored in the target variable which can have been created previously or can be a new temporary one (if you check the \"Temp\" check-box). For more information on tile data, please see the GML section on ","Tile Map Functions",".","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Layer","\n        ","The layer to get the tile from","\n      ","\n      ","\n        ","Column","\n        ","The column (from left to right) of the cell","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code loops through every tile cell in the room, retrieves\n    the tile data for the cell, mirrors it, then sets the cell again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Actions","\n        ","Next: ","Set Tile Data Transform","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Get Tile Data In Cell"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"289"})