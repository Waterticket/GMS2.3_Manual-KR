rh._.exports({"0":["os_type"],"1":["os_type,os_windows,os_uwp,os_linux,os_macosx,os_ios,os_tvos,os_android,os_ps4,os_xboxone,os_switch,os_unknown"],"2":["os_type,os_windows,os_uwp,os_linux,os_macosx,os_ios,os_tvos,os_android,os_ps4,os_xboxone,os_switch,os_unknown"],"3":["\n  ","\n  ","\n  ","This ","read-only"," variable holds one of various constant GameMaker Studio 2 has to tell you which operating system the game has been created for. Note that this is ","not"," necessarily the same as the OS of the device running\n    it, since - for example - your game could be running on an Amazon Fire OS, but will have been built for the Android platform (in which case ","os_type"," will be ","os_android",").","\n  ","The following constants can be returned:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","os_windows","\n        ","Windows OS","\n      ","\n      ","\n        ","os_uwp","\n        ","Windows 10 Universal Windows Platform","\n      ","\n      ","\n        ","os_linux","\n        ","Linux","\n      ","\n      ","\n        ","os_macosx","\n        ","macOS X","\n      ","\n      ","\n        ","os_ios","\n        ","iOS (iPhone, iPad, iPod Touch)","\n      ","\n      ","\n        ","os_tvos","\n        ","Apple tvOS","\n      ","\n      ","\n        ","os_android","\n        ","Android","\n      ","\n      ","\n        ","os_ps4","\n        ","Sony PlayStation 4","\n      ","\n      ","\n        ","os_xboxone","\n        ","Microsoft XBox One","\n      ","\n      ","\n        ","os_switch","\n        ","Nintendo Switch","\n      ","\n      ","\n        ","os_unknown","\n        ","unknown OS","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","os_type;","\n  "," ","\n  ","\n  ","Constant","\n  "," ","\n  ","\n  ","switch (os_type)","    {\n    ","    case os_windows: global.Config = 0; break;","    case os_android: global.Config = 1; break;","    case os_linux: global.Config = 2; break;","    case os_macosx: global.Config = 3; break;","    case os_ios: global.Config = 4; break;","       case os_winphone: global.Config = 5; break;","    }\n  ","\n  ","The above code checks the OS running the game and sets a global variable accordingly.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","OS And Compiler","\n        ","Next: ","os_version","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["os_type"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2521"})