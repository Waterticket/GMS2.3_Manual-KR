rh._.exports({"0":["Steam UGC"],"2":["Steam UGC,User Generated Content,Workshop,Steam Workshop"],"3":["\n  ","\n  ","\n  ","This section is for those users that have been given access to the Steam API for publishing your game to that platform and that want to use the possibilities that the Steam Workshop and Community gives you for adding and generating user content in your\n    projects. The simplest form of user generated content is the ability for the user to take and share screenshots, which is facilitated using the following two functions:","\n  "," ","\n  ","\n    ","steam_is_screenshot_requested","\n    ","steam_send_screenshot","\n  ","\n  "," ","\n  ","The rest of the function on this page are related to using the ","Steam Worksop"," and some of them require the ","Steam App ID"," for your project as well as a ","User ID"," for the person playing the game or their\n    user name, which can be found using the following functions:","\n  "," ","\n  ","\n    ","steam_get_app_id","\n    ","steam_get_user_account_id","\n    ","steam_get_user_persona_name","\n  ","\n  "," ","\n  ","Before using any of the built in functions for the Steam UGC (","U","ser ","G","enerated ","C","ontent) API you need to have set up your game correctly from the Steam dashboard and you should have read through the required\n    documentation found here:","\n  ","\n    ","Sharing User Generated Content","\n  ","\n  ","NOTE",": You need to have your game accepted for the Steam online store and have access to the developer areas of the Steam API documentation.","\n  ","All subscribed UGC items will be downloaded by the Steam client automatically, and you should have code in the ","Steam Asynchronous Event"," to catch this and store the\n    ID of the UGC that has been downloaded for use in the other UGC functions.","\n  ","IMPORTANT!"," Steam UGC IDs can be huge numbers over 600,000,000. This means that sometimes you may need to store these as a string rather than try and store them as a real value, especially if working with buffers or trying to write the value to\n    a text file (since this will convert it to a simplified standard format like \"6.6624e+003\" which will cause issues being read back).","\n  ","The normal workflow for getting UGC into your game would be as follows:","\n  ","\n    ","The user would subscribe to an item (either from your game using ","steam_ugc_subscribe_item()"," or from the client/browser.","\n    ","Your game would \"listen\" for new subscriptions with the appropriate code in the Steam Async Event.","\n    ","When you get a subscription async event, you would then check if the item is installed (ie: downloaded) with ","steam_ugc_get_item_install_info()",".","\n    ","If the item is ","not"," installed, you'll need a check using ","steam_ugc_get_item_update_info()"," to track the download progress.","\n  ","\n  ","The following sections explain all the functions required to get UGC functioning in GameMaker Studio 2:","\n  "," ","\n  ","\n  ","The following functions are essentially \"wrapper\" functions for those supplied in the Steam API for creating and uploading content to their servers. As such, we recommend that you read over the linked Steam documentation before using them\n    to gain a greater understanding of how they work: ","Creating And Uploading Content",".","\n  "," ","\n  ","\n    ","steam_ugc_create_item","\n    ","steam_ugc_start_item_update","\n    ","steam_ugc_set_item_title","\n    ","steam_ugc_set_item_description","\n    ","steam_ugc_set_item_visibility","\n    ","steam_ugc_set_item_tags","\n    ","steam_ugc_set_item_content","\n    ","steam_ugc_set_item_preview","\n    ","steam_ugc_submit_item_update","\n    ","steam_ugc_get_item_update_progress","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","Once your user content has been created and the workshop has it available for download, people can subscribe to it through the Steam App or through the Web portal. However GameMaker Studio 2 also includes the following functions to use the Steam\n    API for creating and canceling subscriptions as well as for getting information about what the user is subscribed to currently:","\n  "," ","\n  ","\n    ","steam_ugc_subscribe_item","\n    ","steam_ugc_unsubscribe_item","\n    ","steam_ugc_num_subscribed_items","\n    ","steam_ugc_get_subscribed_items","\n    ","steam_ugc_get_item_install_info","\n    ","steam_ugc_get_item_update_info","\n    ","steam_ugc_request_item_details","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","There are also a large number of functions available to query the Steam API about the UGC items available:","\n  "," ","\n  ","\n    ","steam_ugc_create_query_user","\n    ","steam_ugc_create_query_user_ex","\n    ","steam_ugc_create_query_all","\n    ","steam_ugc_create_query_all_ex","\n    ","steam_ugc_query_set_cloud_filename_filter","\n    ","steam_ugc_query_set_match_any_tag","\n    ","steam_ugc_query_set_search_text","\n    ","steam_ugc_query_set_ranked_by_trend_days","\n    ","steam_ugc_query_add_required_tag","\n    ","steam_ugc_query_add_excluded_tag","\n    ","steam_ugc_query_set_return_long_description","\n    ","steam_ugc_query_set_return_total_only","\n    ","steam_ugc_query_set_allow_cached_response","\n    ","steam_ugc_send_query","\n  ","\n  "," ","\n  ","You can get a preview image of any UGC item from the workshop by using the function ","steam_ugc_send_query()"," to get the preview file handle of the image, and then calling the following function:","\n  ","\n    ","steam_ugc_download","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Steam","\n        ","Next: ","General Steam API","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Steam"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"6":["Creating And Editing Content","Consuming Content","Querying Content"],"id":"2300"})