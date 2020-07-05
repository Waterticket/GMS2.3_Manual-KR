rh._.exports({"0":["physics_particle_group_circle"],"1":["physics_particle_group_circle"],"2":["physics_particle_group_circle"],"3":["\n  ","\n  ","\n  ","This function will set the shape of the particle group that is being created. You must first have begun the group definition using the function ","physics_particle_group_begin()",", and then you would\n    use this function to set the approximate radius of the group in pixels - approximate because the exact radius will depend on the size of the base particles, as defined by the ","physics_particle_set_radius()","    function, as the physics simulation tries to \"fit\" as many of the particles as possible into the defined shape. Finally you need to call ","physics_particle_group_end()"," to create the group\n    of particles in the room.","\n  "," ","\n  ","\n  ","physics_particle_group_circle(radius)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","radius","\n        ","The radius (in pixels) of the circle to create.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var flags = phy_particle_flag_water | phy_particle_flag_viscous | phy_particle_flag_tensile;"," var groupflags = phy_particle_group_flag_solid;"," physics_particle_group_begin(flags, groupflags, mouse_x, mouse_y, 0, 0, 0, 0, c_white, 1, 1, 2);","    physics_particle_group_circle(100);\n    "," mLastGroup = physics_particle_group_end();","\n  ","The above code stores the flags for the particle type and the particle group properties in variables then uses these to create a circular particle group with a 100px radius at the mouse position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Soft Body Particles","\n        ","Next: ","physics_particle_group_box","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_particle_group_circle"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2122"})