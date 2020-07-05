rh._.exports({"0":["Object Events"],"1":["Objects - Events"],"2":["events,object events,events list"],"3":["\n  ","\n  ","\n  ","So, what are object ","events","? Basically, these are discreet moments in the game loop where things are made to happen based on what you have programmed for them. GameMaker Studio 2 works with cycles of these events - from the moment a\n    room is started to the moment it is finished there is a game loop running where every ","step ","a series of events are run or checked, and you can choose to place code or DnD™ actions in your objects that respond to these events (a step\n    is a moment in game time, governed by the room speed setting, and can also be called a ","frame",") .","\n  ","Let's look at a typical object setup with events and code:","\n  ","As you can see in our example object there are a number of events listed that it should respond to, but initially when you create\n    an object this list is empty and you must decide which events you need and what instances of that object should do when those events are triggered. To add events into the object, you press the ","Add Event"," button found at the bottom of the events\n    list which will bring up the following window:","\n  ","This is the list of all the basic events and event categories which an object can respond to, and within each category are sub\n    events to further refine behaviours. For example, if you click on the ","K","ey Press"," "," event category you will then\n    get a further window popping up with the events that allow you to select ","which ","key the object should respond to. Once you have selected your event, the code window (or DnD™ workspace window) will be chained to it and open up on the right.\n    You can now edit the code to give your object a specific behaviour or reaction to that event.","\n  ","You can click the right mouse button "," on any event that has been added to an object to get the following menu options:","\n  ","These options are:","\n  ","\n    ","Add Event"," - Add a new event from the event list.","\n    ","Cut ","/ ","Copy ","/ ","Paste Events"," - Cut, copy or paste the selected event. You can use the standard keyboard shortcuts too: "," / "," + ","X",", "," / "," + ","C",", and "," / "," + ","V",".","\n    ","Duplicate Event"," - Duplicate the chosen event. This will take the contents of the chosen event and duplicate them in another event that you specify.","\n    ","Change Event"," - Change the event. This will prompt you to choose another event category and once selected the contents of the current event will be changed to the new event (removing the original event in the process).","\n    ","Convert To Drag and Drop / Code"," - Object events will be created using the method chosen when you created the project, either using code or using Drag and Drop™ actions. With this option you can convert from one to the other, regardless\n      of the project type.","\n    ","Delete Event"," - Delete the event (or events).","\n  ","\n  ","When removing events, you can use "," + "," to select multiple events\n    and then delete them all together.Each object you create has its own discreet list of events which are added into it from the ","Object Editor",". These events fall into two categories:","\n  ","\n    ","those that run every single game step","\n    ","those that are \"triggered\" by a game event, like the instance reaching the room edge or a keyboard or mouse press.","\n  ","\n  ","The full list of events is given below:","\n  "," ","\n  ","Create","Create","\n  ","\n    ","This event happens when an instance of the object is first created, and is the very first thing that happens within an instance placed in the room through the Room Editor when a room is entered. This means that this event is the ideal place to initialize\n      ","variable","s",", start ","Timelines",", set ","Paths"," etc... and do anything else that generally only needs to\n      be done once or only when an instance is first created in the room. If your object has any ","Object Variables"," or ","Instance Variables"," added in either the Object Editor or the Room Editor, then these variables will be\n      initialised first and then the ","Create Event"," will be run.","\n    ","Remember that you can modify anything you set up in the Create Event from the ","Instance Creation Code"," in the Room Editor, as this is run directly after the create event for the instance and can\n      be used to create ","Instance Variables"," or to override any variables added as Object Variables or in the actual Create Event.","\n    "," ","\n  ","\n  ","Destroy","Destroy","\n  ","\n    ","This event is the event to be executed when an instance is destroyed. It is often overlooked when adding behaviours to objects, but it can be very useful, for example by creating explosion or particle effects when an enemy is killed, or for re-spawning\n      a new instance of the object in another part of the room, or even for adding points onto a score.","\n    "," ","\n  ","\n  ","Clean Up","Clean Up","\n  ","\n    ","This event will be called after any event that removes an instance of the object from the room. So, it will be triggered if:","\n    ","\n      ","the instance is destroyed","\n      ","the room ends","\n      ","the game ends","\n    ","\n    ","It is designed for you to use to \"clean up\" any dynamic resources that you may have in your game (like surfaces, data structures, etc...) or to perform any task that you need performed ","once ","when the instance is removed from the game in any way.","\n    ","Note that this event will be called ","instantly ","after the event that triggered it, but the instance will not actually be removed from the game ","until the end of the current event",". For example, if you call ","instance_destroy()","      in the Step Event, then the Destroy Event will be called, then the Clean Up Event, and then ","the rest of the Step Event will finish running",". This means that any code you have after the call to ","instance_destroy()","      will still be run and be a potential cause for errors if you've cleaned up a data structure or some other resource that the code requires, so care must be taken when using this event.","\n    ","\n    "," ","\n  ","\n  ","Alarm","Alarm","\n  ","\n    ","The alarm category is split into 12 events, one for each of the possible alarms that can be set in an instance. So, when you click on the ","Add Alarm ","category you are presented with this window:","\n    ","Here you select the alarm that you wish to create and, once that is done, you will see that it has been added to the event\n      window allowing you to add code to it as normal. But what is an alarm? Well, it is a special event that does nothing unless the alarm has been previously set, and then it will wait until that alarm has counted down to 0 before running the actions\n      or code that you have added into it.","\n    ","Once the alarm has reached 0 and run the code, it will then count down to -1, where it will remain until set again (meaning you can check the value of an alarm to see if it is greater than -1, which will tell you if it's running or not). So, say\n      you set ","alarm[0]"," in the create event of the object to 30, this means that GameMaker Studio 2 will count down 30 game steps before it runs the actions or code that are placed in the ","alarm[0]","      event. Note that setting an alarm to 0 will ","not ","run the alarm code, as the event is triggered, but the alarm is set to -1 immediately, so the code is skipped. If you need an alarm to run the very next step, then you should set it to 1.","\n    ","This can be very useful as it allows you to set things in motion at precise moments, and you can even have them repeat as there is nothing to stop you setting an alarm in its own event. Imagine you have a monster and you want it to turn right every\n      three seconds... well, you would set an alarm in its create event to the room speed * 3 (if the room speed is 30, that's 30 steps per second, so multiply that by 3 and you get 3 seconds!) and then in the alarm event you would have the code or\n      action to set its direction, as well as the action (or code) to set its alarm to room speed * 30 again. In this way, you can set up simple game loops where things only happen at specific intervals.","\n    ","It is worth noting that an alarm with no actions or code in it in it will ","not ","count down. However, even with just a comment and no code or actions, then the alarm will continue to count down and can be set and checked as you would normally.","\n    "," ","\n  ","\n  ","Step","Step","\n  ","\n    ","GameMaker Studio 2 splits time into ","steps ","with the room speed defining how many of these steps there are supposed to be per second (a step can also be called a ","frame","). A single step, is basically the loop that runs\n      constantly with all the events being checked and triggered as necessary while the game runs, so as you can imagine, the ","Step Event ","is an event that is checked every single step of the game while the instance exists.","\n    ","The step event is actually comprised of three sub events that are outlined below:","\n    ","For most things the standard step event will be fine to use, but sometimes you want a bit more control over what code runs and at\n      what time, so for that you are provided with the ","Begin ","and ","End ","step events. All three are checked every step, but their order will never vary even if future updates to the GameMaker Studio 2 engine change other\n      events, which means that this is the only reliable method of making sure that something always happens before something else.","\n    ","What can the step event be used for? Well, it can be used for actions or code that needs to be executed continuously. For example, if one object should follow another, here you can adapt the direction of motion towards the object we are following\n      to keep it moving smoothly behind. Be careful with this event though, and don't put many complicated actions in the step event of objects, especially if you are planning on having lots of instances of the object in your game room, as this might\n      slow the game down. Many things can be placed into alarms, or set to trigger using some of the ","Other ","events, rather than happening all the time.","\n    "," ","\n    "," ","\n  ","\n  ","Collision","Collision","\n  ","\n    ","Obviously when making a game, it is very important that you know when two (or more) instances of an object have collided, and for that we have the ","Collision Event",". This is an event that you place in an object and then specify against\n      which other object you should be checking for collisions.","\n    ","When you don't have physics turned on, these collisions will be calculated based on the mask of the two objects (the mask is defined within the sprite properties, or can be assigned independently in the object properties) and whether they overlap\n      or not. Note, that if one or the other instances in the collision does not have a mask assigned (or the sprite mask is set to nothing), ","even if it is drawing something"," no collisions will be detected.","\n    ","If you have ","Physics ","on, then the collision will be based on the type of ","collision shape"," (","Fixture",") that you have defined for the object in its physics properties, as will its reaction to the collision. This\n      means you may not need any code to deal with the collision, but this event will still ","need to have at least a comment in it ","for the collisions to be detected.","\n    ","Finally, it should be noted that all collisions will be calculated once per game step before the collision event is triggered, such that when the collision event runs, all collisions will have been calculated already and pre-assigned. This means that\n      if you create an instance in this event and then try to check for a collision with it, the collision wont be detected or resolved until the next ","iteration"," of the game loop.","\n    "," ","\n    "," ","\n  ","\n  ","Keyboard,","Keyboard,","  ","Keyboard Press,","Keyboard Press,","  ","    ","Keyboard Release","Keyboard Release","\n  ","\n    ","Letting the player control the different aspects of your game is very important, and to that end GameMaker Studio 2 provides you with a very comprehensive list of keyboard events that can be used in any of the three main keyboard categories. For the\n      general Keyboard category, it is triggered continuously every step for as long as the selected key is pressed down, while the Press and Release category events will only be triggered once when the key is initially pressed down or released.","\n    ","It should be noted that keyboard events are actually triggered in all active instances in a room whenever a key is used, but only those that have an event defined for that particular key will respond and you can create multiple keyboard events in\n      any object and the instances of that object will respond to all of them while the game is running.","\n    ","When you add any keyboard event to an object, you will be presented with the keyboard sub event menu where you can specify the key you are to be checking for:","\n    ","Most of them are fairly obvious, but let's just go through the sections briefly - at the top we have the arrow keys,\n      followed by the most used modifier keys, then the rest of the keyboard (split into further sub-sections so you can get the exact key required like "," or ",") and finally two very special sub events, ","No Key"," and ","Any Key",". As their names imply, these are sub\n      events that check for when ","no ","key is pressed or for when ","any ","key is pressed. Please note that the keys on the numeric keypad only produce the corresponding events when ","Number Lock ","is enabled.","\n    ","The ","Press ","and ","Release ","events for the keyboard are almost exactly the same as the regular keyboard event, except that instead of being triggered continuously, they are triggered once only. When the keyboard first registers\n      that a key has been pressed it will generate a ","Keyboard Pressed"," event (as well as a regular Keyboard event), and the first time after that where a key is no longer being detected as pressed it will trigger a single ","Keyboard Release","      event.","\n    "," ","\n    "," ","\n  ","\n  ","Mouse","Mouse","\n  ","\n    ","The Mouse category is separated into a series of events that can be selected to give you a more precise control over what is happening in your game. Here you can see exactly what these events are:","\n    ","The left ",", right "," and middle "," button events (whether ","normal",", ","pressed ","or ","released",") all\n      work on the mask of the instance that has the event. What this means is that GameMaker Studio 2 will check the position of the mouse in the room when those buttons are used against the collision masks of the instances that have a mouse event. If\n      there is a \"collision\" with the instance ","bounding box"," then the event will be triggered, so make sure that any instance with these events has a sprite with a valid collision\n      mask or that the object has a mask sprite selected in the object properties. As their names imply, these events will be triggered either once when the chosen mouse button is first pressed or released, or continuously each step while the button is\n      maintained.","\n    ","The mouse enter and leave events are also similar to the button events in that they too rely on the mask of the instance to work, but this time they are triggered when the mouse first \"enters\" (touches) the instance or when the mouse \"leaves\"\n      (stops touching) the instance. These events are not continuous however, and are triggered only once for each time the mouse enters or leaves the object - so they are an ideal method for creating, for example, buttons that need to change as the mouse\n      hovers over them before going back to normal when the mouse is removed.","\n    ","Finally we have another section to the mouse events which is called the ","Global Mouse",". In this sub-menu you will find a selection of events that are for recording mouse events in instances even when the mouse is not over them or even\n      near them. These are events that are generated for ","all ","instances and if there are actions or code defined for the specified event then it will be run, regardless of the position of the mouse within the game room.","\n    ","Please note that on mobile or touch-screen devices the left mouse button "," can also be used to check for a finger tab on a touch screen, and the right mouse button "," is triggered by a double tap on the screen (this behaviour can be changed using code).","\n    "," ","\n    "," ","\n  ","\n  ","Gestures","Gestures","\n  ","\n    ","This event is the one that will be triggered by the user touching the screen (on mobile) or clicking and moving the mouse (on all other platforms). These events are similar to the mouse events, in that you have regular versions and ","global"," versions.\n      The regular versions of these events will only be triggered when the touches occur on an instance that has a sprite (or a mask) and the touches occur within its ","bounding box",". The global\n      versions of these events, however, will be triggered by the user touching ","anywhere ","on the screen.","\n    ","The gesture events detect the following:","\n    ","\n      "," ","taps ","- when a user clicks/touches and releases quickly","\n      "," ","drags ","- when a user touches/clicks and maintains it then moves their finger/cursor","\n      "," ","flicks ","- when the user moves and releases a touch/click in one movement","\n      "," ","pinches ","- when the user has two fingers on the screen and then moves them together/apart","\n      "," ","rotates ","- when the user has two fingers on the screen and then rotates them around a point","\n    ","\n    ","The different events will always contain a DS Map called the \"","event_data","\" map, which\n      will contain a number of key/value pairs with data on the touch/click position and movement. For full details on all the available sub-events and how they work, please see the following section:","\n    ","\n      ","The Gesture Event","\n    ","\n    "," ","\n    "," ","\n  ","\n  ","Other","Other","\n  ","\n    ","There are a number of special events for use when making games with GameMaker Studio 2 and they are mostly grouped together under the Other event and can be selected from the pop up menu of sub events that comes up when you select this. Here is an\n      image of all these other events:","\n    ","For more information on each of the events listed in the image above, please see the following section:","\n    ","\n      ","The Other Events","\n    ","\n    "," ","\n  ","\n  ","Draw","Draw","\n  ","\n    ","This event category is the one that governs what you see on the screen when you run your game, and is split into various discreet events:","\n    ","As you can see, the draw event category has multiple different event types. ","Draw Begin",", ","Draw ","and ","Draw End","      are the \"standard\" draw events which you will probably use most. By default the main Draw event is always called for every instance, regardless of whether it has a sprite or not, although if you flag the instance as invisible, the event\n      will not be triggered (so keep this in mind if you have any game logic in the draw event of an invisible object, as it won't run). The main draw event is also where GameMaker Studio 2 default draws the instance sprite when there is no code nor\n      actions in the event (ie: you haven't added it into the event list for the object). Default drawing uses the sprite associated with the instance and will draw that with any transforms set in code or actions applied.","\n    ","The standard draw events draw ","before ","the ","Draw GUI ","events and ","between ","the ","Pre Draw ","and ","Post Draw ","events, meaning that everything that is drawn in this event is drawn beneath that\n      of the ","Draw GUI ","event, regardless of the layer (ie: anything drawn in the Draw GUI event will always be drawn over anything drawn in the normal draw event, regardless of layer order).","\n    ","Note that the above is simply an overview of how the Draw Events work, but for full details on all the available sub-events, please see the following section:","\n    ","\n      ","The Draw Event","\n    ","\n    "," ","\n    "," ","\n    "," ","\n  ","\n  ","Asynchronous","Asynchronous","\n  ","\n    ","This event category is special in that the events it contains are not triggered by default by GameMaker Studio 2, but rather by the end of some other action, like the loading of a file, or the reply from a web server. The category is split into the\n      following events:","\n    ","\n    ","So, say you want to add an image file to GameMaker Studio 2. Well, you would code this in another event (maybe the Create Event) of an object and then have that object draw a loading bar while waiting (for example), polling the appropriate asynchronous\n      event until the ","callback"," that tells GameMaker Studio 2 the file has loaded. You can then use the data returned in this event to do other things, like change room, or purchase an item.","\n    ","Note that the above is simply an overview of how the Asynchronous Event works, but for full details on all the available sub-events, please see the following section:","\n    ","\n      ","Asynchronous Events List","\n    ","\n    "," ","\n  ","\n  "," ","\n  ","You should also note that you can name events, or at least give them a short descriptive text that will be shown beside them in the Event Editor. To do this, simply add the following into the very first line of the code editor for the event:","\n  ","/// @description Your text here","\n  ","So, you could have something like this in - for example - an ","Alarm ","event","\n  ","/// @description This is the AI Fight alarm","\n  ","And now in your Event Editor you'll see this:","\n  ","\n  ","For DnD™ users, adding a comment requires the use of the ","Execute Code"," action, which should be placed at the very top of the actions for the event, before everything else. When you add this action, you then give it the same line of code\n    that is shown above to name the event, eg:","\n  ","For additional information on some of the above events and general event running order, please see the following sections:","\n  ","\n    ","Event Order","\n    ","The Other Events","\n    ","The Draw Events","\n    ","The Async Events","\n    ","The Gesture Events","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Object Editor","\n        ","Next: Parent Objects","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Object Events"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"82"})