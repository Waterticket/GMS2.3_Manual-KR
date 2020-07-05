rh._.exports({"0":["New"],"1":["DnD™ Action - New"],"2":["New"],"3":["\n  ","\n  ","\n  ","This action is ","only"," ","used when creating structs using a function that has been flagged as a ","constructor"," function (see ","Declare A New Function"," for more information). This\n    action takes the function method for a previously defined function, as well as a number of arguments, which you can expand to add more if required using the "," icon on the left. These arguments should correspond to the inputs required by the function, and will be used to populate the struct that is being created. The struct will be returned to the target variable, which can be flagged as a temporary local\n    variable or not.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Script","\n        ","The name of the script or user-defined function to call.","\n      ","\n      ","\n        ","Argument0 ... Argument3","\n        ","The different arguments (values) that are to be passed to the script or function (unused arguments can be left blank)","\n      ","\n      ","\n        ","Target","\n        ","The name of the variable that is to be targeted for any returned values (can be left blank)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code would probably go in the ","Create Event"," of an instance, and declares\n    a new constructor function ","init_char_struct"," with four arguments: ","_str1",", ","_str2",", ","_val1"," and ","_val2",". These arguments are then used to populate the given variables within the struct that the function is creating.\n    You would then call the function using the ","New"," action in any subsequent event, like this:","\n  ","The function is called and it will return a new struct to the array \"char\", and the struct\n    will be populated with the variables \"name\", \"location\", \"hp\" and \"mana\", set to the values used for the corresponding arguments in the function.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Common Actions","\n        ","Next: ","Function Call","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" New"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Extended Example:"],"id":"184"})