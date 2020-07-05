rh._.exports({"0":["tvOS"],"1":["Game Options - tvOS"],"2":["tvOS Game Options"],"3":["\n  ","\n  ","\n  ","This section outlines the different options available to you that control how your tvOS game projects will be compiled. The different sections are:","\n  "," ","\n  ","\n  ","Here you can fill in the ","Product Information"," about your game, including its ","Display Name",", its ","Bundle ID","    and the ","Version ","info. Note that the Bundle ID must be in the correct reverse URL format for the final build of the game to work correctly, EG: ","com.[Company].[GameName]",". You can also set the ","App Output","    location on the build Mac, and you can give the Team Identifier that you wish to use for signing the final application that GameMaker Studio 2 creates for you. Setting it here will override the Team ID that you have supplied in the ","tvOS Preferences",".","\n  "," ","\n  ","\n  ","Here you can change the following details related to how your game will be displayed, with the following options available:","\n  ","\n    ","Interpolate colours between pixels",": Turns on ","linear interpolation",", which basically \"smooths\" pixels. For crisp pixel graphics, it should be\n      off, but if you have nice alpha blends and smoothed edged graphics it is better left on. This is off by default.","\n    ","Scaling",": Here you can select to scale the draw canvas maintaining the aspect ratio within the device screen - adding \"padding\" around the edges to fit the screen - or you can select to have the draw canvas stretched to fit\n      the device screen.","\n  ","\n  ","Next there is the option to set the size of the ","texture page",". The default (and most compatible) size is 2048x2048, but you can choose from anywhere between 256x256 up to 8192x8192. There\n    is also a button marked ","Preview ","which will generate the texture pages for this platform and then open a window so that you can see how they look. This can be very useful if you wish to see how the texture pages are structured and\n    to prevent having texture pages larger (or smaller) than necessary. For more information on texture pages, please see ","here",".","\n  ","NOTE",": Be aware that the larger the size of the texture page, the less compatible your game will be with different browsers and devices.","\n  ","Finally, you choose to ","Display a cursor"," or not. If checked, the OS will show a cursor whenever the mouse is moved (at the mouse position), and the cursor will fade out and disappear when the mouse is not moved for a period of time.\n    If unchecked, then no cursor will be shown.","\n  "," ","\n  ","\n  ","This section permits you to add the various different ","Icons ","required by the various devices and the different parts of the\n    App Store. These icons should be authored as 24bit ","*.png"," images at the size specified for each one.","\n  ","It is worth noting that GameMaker Studio 2 has a ","Project Image Generator"," tool which can be used to automatically create all the images required for all the different target platforms your game\n    is being compiled to. If you use this tool, you should revise the images created to ensure that they are what you require, especially for this platform as the icons required are rectangular and not square. This tool will also generate Images (explained\n    below) as well as Icons.","\n  "," ","\n  ","\n  ","This section permits you to add separate graphics as \"Top Shelf\" images and splash screens for each of the different\n    tvOS target sizes. These images must be authored as individual 24bit ","*.png"," images with no transparencies and at the correct size. You can also set a minimum time for showing the splash screens from the drop down menu at\n    the bottom (from 0 to 10 seconds).","\n  ","As mentioned in the section on Icons, you can use the ","Project Image Generator"," to create these images.","\n  "," ","\n  ","\n  ","This section is for enabling different ","Social ","features in your tvOS game. The following options can be chosen:","\n  ","\n    ","Enable Push Notifications",": In order for your game to use Push Notifications they must be enabled here first otherwise they will not work.","\n    ","Enable Sign In With Apple",": This option is for using the ","Apple Sign In Extension"," on iOS. You can get this extension from the ","YoYo Games Marketplace",",\n      and the extension itself contains full instructions for use. If you are not using this extension then you should not tick this options.","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Game Options","\n        ","Next: ","Windows","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tvOS Game Options"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"6":["General","Graphics","Icons","Images","Social"],"id":"145"})