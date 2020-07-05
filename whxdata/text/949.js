rh._.exports({"0":["alarm_set"],"1":["alarm_set"],"2":["alarm_set"],"3":["\n  ","\n  ","\n  ","This function can be used to set an alarm. You supply the alarm number from 0 to 11, and then the value to set the alarm to. The value must be an integer value, and you can set it to -1 to stop the alarm (non integer values will be rounded to the nearest\n    integer). This is an alternative method to setting the ","alarm array"," directly.","\n  "," ","\n  ","\n  ","alarm_set(index, value);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The alarm index to set, from 0 to 11.","\n      ","\n      ","\n        ","value","\n        ","The value (an integer) to set the alarm to.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","for (var i = 0; i < 12; i++)","    {\n    ","    if alarm_get(i) > 0 alarm_set(i, -1);","    }\n  ","\n  ","The above code checks all the alarms in the calling instance and if they are greater than 0 it sets them to -1, stopping them from counting down any further.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instances","\n        ","Next: ","instance_find","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["alarm_set"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"949"})