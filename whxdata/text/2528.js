rh._.exports({"0":["os_get_region"],"1":["os_get_region"],"2":["os_get_region"],"3":["\n  ","\n  ","\n  ","This function returns a string with the two or three letter Regional Code for the OS that is running the game, as set by the ","ISO3166-1"," standard. If the information is not available,\n    it will hold simply an empty string \"\".","\n  ","NOTE",": This is not the location regional code that is returned, but the regional language code of the OS.","\n  "," ","\n  ","\n  ","os_get_region()","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","switch (os_get_language())","    {\n    ","    case \"zh\":","       var region = os_get_region();","       if (region == \"HK\" || region == \"MO\" || region == \"TW\")","          {\n    ","          ini_open(\"chinese_traditional.ini\");\n    ","          }\n    ","       else\n    ","          {\n    ","          ini_open(\"chinese_simplified.ini\");\n    ","          }\n    ","    break;\n    ","    case \"fr\":","       ini_open(\"french.ini\");\n    ","    break;\n    ","    case \"it\":","       ini_open(\"italian.ini\");\n    ","    break;\n    ","    default:\n    ","       ini_open(\"english.ini\");\n    ","    break;\n    ","    }\n  ","\n  ","The above code checks the OS language and if it is Chinese, it then checks the OS region, opening a different ","*.ini"," file depending on the returned values.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","OS And Compiler","\n        ","Next: ","os_get_info","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["os_get_region"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2528"})