rh._.exports({"0":["show_question_async"],"1":["show_question_async"],"2":["show_question_async"],"3":["\n  ","\n  ","\n  ","This function opens a window and displays the question you define in the function to the user. This is an asynchronous function, and as such GameMaker Studio 2 does ","not"," block the device it is being run on while waiting for answer, but\n    rather keeps on running events as normal. The function has two buttons that show \"Yes\" and \"No\", and once the user has pressed one, an asynchronous ","Dialog"," event is triggered which, for the duration of that event ","only",",\n    will have a DS map stored in the variable ","async_load",".","\n  ","This map will contain the two keys, \"","id","\", and \"","status","\". \"id\" is the value that was returned by the function when called, while the \"status\" will be either ","true"," or ","false","    for \"Yes\" and \"No\" respectively.","\n  "," ","\n  ","\n  ","show_question_async(string);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","String","\n        ","The question to ask to the user.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","The ","left mouse press event"," (for example) of the object that is showing the message would have the following code:","\n  ","msg = show_question_async(\"Do you want to buy some armour for \" + string(armour[0, 5]) + \"coins?\");","\n  ","The above will show a question with the given string, requesting that the user press either \"yes\" or \"No\". The function id is stored in the variable \"msg\" and will be used in the ","Asynchronous Dialog event","    as shown below:","\n  ","var i_d, stat;"," i_d = ds_map_find_value(async_load, \"id\");"," if i_d == msg","     {\n    ","     if ds_map_find_value(async_load, \"status\")","         {\n    ","         coins -= armour[0,5];","         global.protection += armour[0,0];","         }\n    ","     }\n  ","\n  ","The above code checks the \"id\" key of the returned ","DS Map"," against the value stored in the variable \"msg\". If they are the same, it then checks to see if one of the two buttons were pressed and if it returns ","true","    it will then deduct a value from a variable and add a value to a global variable too.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Dialog","\n        ","Next: ","shop_leave_rating","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["show_question_async"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"2184"})