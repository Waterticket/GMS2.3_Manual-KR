rh._.exports({"0":["Compatibility Scripts"],"1":["Compatibility Scripts"],"2":["compatibility scripts"],"3":["\n  ","\n  ","\n  ","For those users coming from previous versions of GameMaker,  it may be a bit confusing using GameMaker Studio 2 at first since there have been a number of changes made to the way that project assets, editing and coding are handled. These changes mean\n    that the neither the ","IDE"," nor the ","GameMaker Language (GML)"," supports the items listed below. However, that does not mean that you\n    cannot import games made with previous versions into GameMaker Studio 2, as you can. GameMaker Studio 2 will automatically convert all legacy functions into ","compatibility scripts",", which are scripts containing functions that convert\n    the legacy methods into the updated methods.","\n  ","What happens is that GameMaker Studio 2 will parse your project for all the obsolete functions and variables that you have used, and then create a series of scripts using those function names. These scripts will contain either the new equivalent\n    ","runtime function"," or a short ","script function"," that performs the same action as the obsolete function.","\n  ","When you first import a GameMaker Studio 2 project you will be shown a compatibility report much like this one:","\n  ","The main body of the report shows which objects and scripts have been affected and where, while at the end\n    you can find a list of the scripts that have been created for your project. You can click the middle mouse button "," or press "," on any of the scripts listed in the report to open it and see what has been done.","\n  ","Note that if you see any scripts created with a double under-bar before their name (for example: ","__global_object_depths","), then these are scripts that have been created by the IDE to help with compatibility and are not scripts\n    that have been converted from obsolete functions, so these ","should not be tampered with"," as they are required for the other compatibility scripts to work.","\n  ","When you have finished revising the compatibility report you can close the workspace, but should you need to revise anything within the report you can find it again by going to the ","Notes"," section of the\n    ","Asset Browser",".","\n  ","Note that you can keep using these compatibility scripts just as you would have used the functions in the legacy version of GameMaker, however, due to the way they work, there will be a performance impact associated with this. We recommend that you\n    update projects to directly use the new methods and remove the compatibility scripts if you can, as it will improve performance and also give you an insight into the way that GameMaker Studio 2 and the GameMaker Language works compared to legacy products.","\n  ","Also note that there are some functions that have been introduced to the GameMaker Language to ensure compatibility with older projects and that will appear in these compatibility scripts. However these functions should never be used in your own projects.\n    You can find a list of these functions from the following section of the manual:","\n  ","\n    ","Compatibility Functions","\n  ","\n  ","You can also find a complete list of all the obsolete functions that have equivalent compatibility scripts created for them from the following page:","\n  ","\n    ","Obsolete Functions","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Additional Information","\n        ","Next: ","Obsolete Functions","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Compatibility Scripts"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"2576"})