rh._.exports({"0":["Asynchronous Functions"],"2":["Asynchronous Functions,Async Functions"],"3":["\n  ","\n  ","\n  ","In the context of GameMaker Studio 2, an asynchronous function is one that sends out to a web server, or asks for user input, or even streams data, while letting GameMaker Studio 2 continue to run without blocking the game being run. When\n    the information ","callback"," is received a special ","Async Event"," is fired which, in turn, allows any instance with an Async Event assigned to it to execute further functions (although this\n    does not have to be the case). So, basically, it's a way to communicate with some external resource (server, user or device) without the game or project stopping while waiting for a reply.","\n  ","Why is this important? Well, since it allows GameMaker Studio 2 to continue functioning while sending or receiving data, and this means that you can do many things all without blocking the game loop like:","\n  ","\n    ","stream data from the device into your game without the player waiting for things to load","\n    ","have callback events to do things only when the correct information is received","\n    ","communicate and interchange data with a web server","\n  ","\n  ","This makes everything function in a much more fluid and unobtrusive way. It should be noted that the Async Events will be triggered for ","all ","instances that have them, so you can use an async function in one instance, and have the Asynchronous\n    Event that deals with the reply in another one, or even various other ones. You can go here for more information on how the Asynchronous event works - ","Asynchronous Events",".","\n  ","The different type of asynchronous functions are listed in the sections below:","\n  "," ","\n  ","\n    ","HTTP","\n    ","Dialog","\n    ","Cloud Saving","\n    ","Push Notifications","\n    ","Facebook","\n    ","Achievements And Leaderboards","\n  ","\n  "," ","\n  ","There are also a number of ","Buffer"," functions that can be used for loading and saving buffers in an asynchronous manner, which are required when working on the different consoles that GameMaker STudio 2 supports, although\n    they can also be used on the other target platforms:","\n  "," ","\n  ","\n    ","buffer_save_async","\n    ","buffer_load_async","\n    ","buffer_async_group_begin","\n    ","buffer_async_group_option","\n    ","buffer_async_group_end","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Reference","\n        ","Next: ","Networking","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Asynchronous Functions"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"2169"})