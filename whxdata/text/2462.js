rh._.exports({"0":["uwp_check_privilege"],"1":["uwp_check_privilege,uwp_privilege_result_no_issue,uwp_privilege_result_purchase_required,uwp_privilege_result_aborted,uwp_privilege_result_banned,uwp_privilege_result_restricted,uwp_privilege_internet_browsing,uwp_privilege_social_network_sharing,uwp_privilege_share_kinect_content,uwp_privilege_video_communications,uwp_privilege_communications,uwp_privilege_user_created_content,uwp_privilege_multiplayer_sessions,uwp_privilege_sessions,uwp_privilege_fitness_upload"],"2":["uwp_check_privilege,uwp_privilege_result_no_issue,uwp_privilege_result_purchase_required,uwp_privilege_result_aborted,uwp_privilege_result_banned,uwp_privilege_result_restricted,uwp_privilege_internet_browsing,uwp_privilege_social_network_sharing,uwp_privilege_share_kinect_content,uwp_privilege_video_communications,uwp_privilege_communications,uwp_privilege_user_created_content,uwp_privilege_multiplayer_sessions,uwp_privilege_sessions,uwp_privilege_fitness_upload"],"3":["\n  ","\n  ","\n  ","With this function you can check that a given user has a chosen privilege. The function will return true or false in the System Asynchronous Event depending on whether the privilege is enabled or not, and if you set the attempt_resolution argument to\n    true and the privilege isn't enabled, it will also open a system dialog (suspending the game) to prompt the user to upgrade the account or whatever is required to get the privilege. If the user then enables the required option, the function will\n    return true.","\n  ","The function requires that you use one of the following constants for the privilege request:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","uwp_privilege_internet_browsing","\n        ","Check to see if internet browsing is permitted","\n      ","\n      ","\n        ","uwp_privilege_social_network_sharing","\n        ","Check to see if sharing to social networks is permitted","\n      ","\n      ","\n        ","uwp_privilege_share_kinect_content","\n        ","Check whether sharing the Kinect controller is permitted","\n      ","\n      ","\n        ","uwp_privilege_video_communications","\n        ","Check to see if video communication is permitted","\n      ","\n      ","\n        ","uwp_privilege_communications","\n        ","Check to see if internet communication is permitted","\n      ","\n      ","\n        ","uwp_privilege_user_created_content","\n        ","Check if access to user created content is permitted","\n      ","\n      ","\n        ","uwp_privilege_multiplayer_sessions","\n        ","Check to see if online multiplayer sessions are permitted","\n      ","\n      ","\n        ","uwp_privilege_sessions","\n        ","Check to see if online sessions are permitted","\n      ","\n      ","\n        ","uwp_privilege_fitness_upload","\n        ","Check to see if fitness data uploading is permitted","\n      ","\n    ","\n  ","\n  "," ","\n  ","Once the function has been called, on XBox One it will trigger an ","Asynchronous System event"," when the callback result has been received, which will have the special DS\n    map ","async_load",". This map should then be parsed for the following key:","\n  ","\n    ","\"","event_type","\" - should hold the value \"check_privilege_result\" if the event was triggered by this function","\n  ","\n  ","If the event type relates to this function, then there will also be the following additional keys when the function is called on XBox:","\n  ","\n    ","\"","result","\" - Will be one or more of the following constants (combined values):","\n      ","\n        ","\n          ","\n            ","Constant","\n            ","Description","\n            ","Value","\n          ","\n          ","\n            ","uwp_privilege_result_no_issue","\n            ","There are no privilege issues with the user","\n            ","0","\n          ","\n          ","\n            ","uwp_privilege_result_purchase_required","\n            ","The user must purchase something additional, usually a subscription, for access","\n            ","1","\n          ","\n          ","\n            ","uwp_privilege_result_aborted","\n            ","The check was aborted","\n            ","2","\n          ","\n          ","\n            ","uwp_privilege_result_banned","\n            ","The user is banned","\n            ","4","\n          ","\n          ","\n            ","uwp_privilege_result_restricted","\n            ","The user is restricted from access, usually through parental controls","\n            ","8","\n          ","\n        ","\n      ","\n    ","\n    ","\n    ","\"","privilege","\" - will be one of the constants listed above for use in the function, so you can check which privilege you have requested in the case of multiple checks.","\n  ","\n  ","If the project is run on a UWP platform that is not XBox One, then the Async Event will ","not"," be triggered, and instead the function will immediately return wither -1, 0, or 1 where:","\n  ","\n    ","-1 means -1 the user doesn't have the privilege","\n    ","0 means the function hasn't been able to query the user","\n    ","1 means the user has the privilege.","\n  ","\n  "," ","\n  ","\n  ","uwp_check_privilege(user_id, privilege, attempt_resolution);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The User ID pointer to check.","\n      ","\n      ","\n        ","privilege","\n        ","The privilege constant to check (see description, above).","\n      ","\n      ","\n        ","attempt_resolution","\n        ","Enable attempting a resolution if set to ","true",", or ignore if set to ","false",".","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer","\n  "," ","\n  ","\n  ","var user_one = xboxlive_get_user(0);"," if (xboxlive_user_is_signed_in(user_one))","     {\n    ","     uwp_check_privilege(user_one, xboxlive_privilege_multiplayer_sessions, true);","     }\n  ","\n  ","The above checks to see if the user is signed in and if they are it checks the multiplayer sessions permission.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UWP And XBox Live","\n        ","Next: ","uwp_suspend","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["uwp_check_privilege"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2462"})