rh._.exports({"0":["string_pos"],"1":["string_pos"],"2":["string_pos"],"3":["\n  ","\n  ","\n  ","This function will return the character position of an instance of a sub-string within a string, searching from the beginning of the string (to search from the end, use the function ","string_last_pos()","). The\n    function will return 0 if it's not found at all, or the position of the first character of the sub-string if it is found. Keep in mind that for legacy support strings are indexed from 1, so 1 is the first position in the string, not 0 as you may\n    expect. One use for this is for filtering words that may be considered offensive, or for finding the correct place to insert some text into another string.","\n  "," ","\n  ","\n  ","string_pos(substr, str);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","substr","\n        ","The substring to look for in the string.","\n      ","\n      ","\n        ","str","\n        ","The string.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer","\n  "," ","\n  ","\n  ","if (string_pos(\",\", text) != 0)","    {\n    ","    string_insert(name, text, string_pos(\",\", text));","    }\n  ","\n  ","The above code searches the string stored in the variable \"text\" for a comma, and if it finds one it inserts the substring \"name\" at that position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Strings","\n        ","Next: ","string_pos_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["string_pos"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1889"})