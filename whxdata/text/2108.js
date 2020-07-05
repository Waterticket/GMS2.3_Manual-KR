rh._.exports({"0":["physics_particle_get_group_flags"],"1":["physics_particle_get_group_flags"],"2":["physics_particle_get_group_flags"],"3":["\n  ","\n  ","\n  ","With this function you can retrieve the group flags for a group of particles. The ","group"," value is that which was returned when you created the group of particles using the function ","physics_particle_group_end()",",\n    and the function will return a value which is the combined value of the currently set flags.","\n  "," ","\n  ","\n  ","physics_particle_get_group_flags(group)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","group","\n        ","The particle group to get.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var flags = physics_particle_get_group_flags(group, flags);"," if flags != phy_particle_group_flag_solid | phy_particle_group_flag_rigid","     {\n    ","     flags = phy_particle_group_flag_solid | phy_particle_group_flag_rigid;","     physics_particle_set_group_flags(group, flags);","     }\n  ","\n  ","The above code will create a variable to store the flags value and then use it to check the flags of the group indexed in the variable \"group\". If they are not the same, the group is set with these flags.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Soft Body Particles","\n        ","Next: ","physics_particle_group_get_inertia","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_particle_get_group_flags"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2108"})