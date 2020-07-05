rh._.exports({"0":["new"],"1":["new"],"2":["new"],"3":["\n  ","\n  ","\n  ","The ","new"," operator can be used to create a struct with a function which is called with the given arguments. The function can then populate the struct with variables from the arguments - much like the create event of an instance will set the initial\n    variables for the instance - and then the ","new"," operator will return the struct. Before using this operator it is important to note that the function given ","must be flagged as a ","constructor"," function"," otherwise the ","new","    operator will not create the struct (the code example below shows this, and for more information, please see the page on ","Structs",").","\n  ","NOTE",": You can check a struct to find out which function was used to create it using the runtime function ","instance_of()",".","\n  ","This operator has the following syntax:","\n  ","<variable> = ","new <function> (<argument>, <argument>, ...);","\n  ","When you use the new operator along with a function, it will return a struct reference which is stored in the given variable, permitting you to access the struct and any variables that were created within it by the function.","\n  ","The following example shows a function that has been defined to use as a contructor:","\n  ","function init_struct(_a, _b, _c) constructor","     {\n    ","     a = _a;","     b = _b;","     c = _c;","     }\n  ","\n  ","This function can then be used along with the ","new"," operator to create a struct and populate it with the variables set to the values of the arguments used in the function, like this:","\n  ","mystruct = new init_struct(10, 100, \"Hello World\");","\n  ","It is important to note that calling new on any function that has ","not"," been flagged as a constructor will cause a ","runtime exception",".","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Language Features","\n        ","Next: ","delete","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["new"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"478"})