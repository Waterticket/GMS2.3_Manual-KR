rh._.exports({"0":["Standard Workflow"],"1":["Source Control - Workflow"],"2":["using source control,source control workflow"],"3":["\n  ","\n  ","\n  ","As you work on your project, you will naturally create sprites, edit scripts, delete timelines, and whatever else is required as your project develops over time. These are all actions which you may want to keep track of and get back should something\n    go wrong. This is the main reason to use Source Control - so that any accidents can be reverted - and we will quickly take you through the basic workflow from start so you understand how this works.","\n  ","Starting from the beginning, create a new GML project and then activate source control through the ","main options",". This gives us access to the Source Control menu on the top, so we'll immediately go and\n    select ","Create Project Repository",". If you look at the room resources, you can see that the default room has gained a red exclamation ",", meaning\n    that it has been ","modified ","from it's last state. If we had other resources in the project, you'd see that they all have the same icon as shown in the image below:","\n  ","We now have the option of either committing the blank project as it is, or getting it to a base state. For now, we'll do our first\n    commit so click ","Source Control"," > ","Commit Changes",". We'll now get a new window opened which is split into three areas:","\n  ","\n  ","\n    ","Staged Changes",": This represent the changes which will be committed to source. This will likely be blank, but it may show a Main Options change, which is fine.","\n    ","Unstaged Changes",": This shows the files that have changed, but that we haven't told Git that we want to commit them - they're \"pending\" changes.","\n    ","Commit Message",": This is a note that we can add to explain what the changes are.","\n  ","\n  ","For now, click the ","Stage All"," button, as we want to commit all the changes, and type something like \"First Commit!\" into the Commit Message and click ","Commit",". All our resources should now have a green tick"," , meaning there's no modifications found.","\n  ","It is worth noting that as you work within this window, the various ","Staged ","and ","Unstaged ","messages will be prefixed by a symbol. The symbol being used will vary depending on the operation and file, with the following\n    being used:","\n  ","\n    ","[...]"," - Staged Change (was previously [A])","\n    ","[+]"," - Newly Added","\n    ","[->]"," - Renamed/Moved","\n    ","[-]"," - Removed","\n    ","[M]"," - Unstaged Changes","\n    ","[?]"," - Untracked File","\n    ","[!]"," - Missing File","\n  ","\n  ","Our work process can now begin, and we can start to build our project and save and commit changes, just as we've done in the paragraphs above.","\n  ","After working for a while, you may want to check and see what you've committed at any given time, and so for that you'll want to open the ","Commit History",". To open the history window you simply go to ","Source Control","    > ","View History"," which opens another window with three panes:","\n  ","The top pane describes the commits, the middle pane describes the comment given to the selected commit, and the bottom pane describes\n    the files that have been modified in this commit. Note that if you have set up a ","Diff Tool",", then double-clicking on any file in this window will open the diff tool and you'll be able to see the changes\n    between the files.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Source Control","\n        ","Next: ","Reverting Files"," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Standard Workflow"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"159"})