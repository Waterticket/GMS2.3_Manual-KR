rh._.exports({"0":["random_set_seed"],"1":["random_set_seed"],"2":["random_set_seed"],"3":["\n\n\n\n\n  ","\n  ","\n  ","To generate a random number GameMaker Studio 2 starts with a random seed number. With this function you can set that seed to a known value and so \"force\" the outcome of all random events afterwards to be the same every time the program is\n    run. For example, this function can be used in conjunction with ","random_get_seed()"," to create procedurally generated content and save the results without having huge savegames (you save the seed only, no need\n    for anything else). Should you need truly random results for everything, you should be using the ","randomise()"," function.","\n  ","NOTE",": While this seed will give consistent results on each target platform, results may vary between platforms due to the different way each target works.","\n  "," ","\n  ","\n  ","random_set_seed(val);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","val","\n        ","The seed to set.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if debug","     {","     random_set_seed(1);","     }","\n  ","The above code sets the random seed to 1 only if the variable \"debug\" is true.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Number Functions","\n        ","Next: ","random_get_seed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["random_set_seed"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1966"})