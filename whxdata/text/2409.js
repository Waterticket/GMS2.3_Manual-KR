rh._.exports({"0":["load_csv"],"1":["load_csv"],"2":["load_csv"],"3":["\n  ","\n  ","\n  ","This function will load a CSV format file and convert it into a DS grid, returning the unique ID value for the grid created.","\n  "," ","\n  ","\n  ","load_csv(filename)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","filename","\n        ","The name of the file to open (as a string)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","DS Grid Index (real)","\n  "," ","\n  ","\n  ","file_grid = load_csv(\"spreadsheet.csv\");"," var ww = ds_grid_width(file_grid);"," var hh = ds_grid_height(file_grid);"," var xx = 32;"," var yy = 32;"," for (var i = 0; i < ww; i++;)","     {\n    ","     for (var j = 0; j < hh; j++;)","         {\n    ","         draw_text(xx, yy, string(file_grid[# i, j]));","         yy += 32;","         }\n    ","     yy = 32;","     xx += 32;","     }\n  ","\n  ","The above code will open the given CSV file and store the returned DS grid in the variable \"file_grid\". This grid is then parsed in a couple of ","for"," lops and the contents drawn to the screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Encoding","\n        ","Next: ","json_encode","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["load_csv"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2409"})