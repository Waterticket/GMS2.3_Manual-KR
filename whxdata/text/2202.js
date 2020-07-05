rh._.exports({"0":["achievement_increment"],"1":["achievement_increment"],"2":["achievement_increment"],"3":["\n  ","\n  ","\n  ","Games can have achievements with no completion value and so you can use this function to increment those achievement by a given amount. On Android, you send the ID of the achievement as a string (this is the unique achievement ID that got assigned when\n    you set up the achievement), while on all other platforms you supply the defined achievement name as a string, and then you give the actual achievement value to increment by.","\n  ","The function will trigger a ","Social Asynchronous Event"," where the returned ","async_load","    DS map will have the following key/value pairs:","\n  ","\n    ","\"","type","\" - This is the type of event that has been fired, which will be the string \"","achievement_increment_result","\" for this function.","\n    ","\"","id","\" - This is the ID of the event, and, for this function, it will return a GML constant ","GooglePlayServices_EVENT_ID_INCREMENT_ACHIEVEMENT",".","\n    ","\"","achievement_id","\" - This is the unique ID of achievement that has been incremented.","\n    ","\"","status","\" - This will be 1 if the achievement was incremented successfully, or 0 if the request failed","\n    ","\"","complete","\" - This will be 1 if the achievement has been completed by this increment, or 0 if the request failed","\n  ","\n  "," ","\n  ","\n  ","achievement_increment(name, value)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","name","\n        ","The name/id of the achievement.","\n      ","\n      ","\n        ","value","\n        ","The value to be sent as an increment.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","achievement_increment(global.Achievement[0], score);","\n  ","The above code adds the current player score to the achievement with the ID stored in the global array.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Achievements And Leaderboards","\n        ","Next: ","achievement_show_achievements","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["achievement_increment"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2202"})