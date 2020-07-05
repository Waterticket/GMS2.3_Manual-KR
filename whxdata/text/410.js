rh._.exports({"0":["If Lives"],"1":["DnD™ Action - If Lives"],"2":["If Lives"],"3":["\n  ","\n  ","\n  ","This action is used to check the value of the instance variable ","lives"," using a specific expression. You give the type of expression to check with and the value to check the current ","lives"," against, and the \"if\" statement will\n    always return either ","true"," or ","false"," depending on the expressions and values used. The available expressions are:","\n  ","\n    ","Equals to"," - The variable and the value are both exactly equal","\n    ","Less than"," - The variable is less than the value","\n    ","Greater than"," - The variable is greater than the value","\n    ","Less than or Equal to"," - The variable is less than ","or"," equal to the value","\n    ","Greater than or Equal to"," - The variable is greater than ","or"," equal to the value","\n  ","\n  ","If you flag the ","Not"," argument, then the above will be ","negated expressions",", for example \"equals to\" becomes \"","not"," equals to\", so you would be checking if the ","lives"," value is not equals to the given value.","\n  ","IMPORTANT NOTE",": Due to ","floating point precision issues",", checking to see if two values are exactly equal may return ","false",", since one may be exactly 1, while\n    the other may be 1.00000000000001. This can be avoided by using the ","Decimal to Integer"," action before checking or using the \"greater than\" or \"less than\" expressions.","\n  ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:","\n  ","These actions will now be run if the \"if\" evaluates to ","true",", while any\n    actions dropped elsewhere will be performed after the \"if\" block.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Not","\n        ","Set to check if the expression does ","not"," evaluate to true.","\n      ","\n      ","\n        ","Expression","\n        ","The type of expression to use for the check.","\n      ","\n      ","\n        ","Value","\n        ","The value to check the ","lives"," against.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code will check the value of ","lives"," to see if it is less than or equal\n    to 0 and if it is then the room will be restarted.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instance Variable Actions","\n        ","Next: ","If Health","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" If Lives"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"410"})