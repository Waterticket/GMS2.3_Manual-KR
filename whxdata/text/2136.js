rh._.exports({"0":["phy_angular_velocity"],"1":["phy_angular_velocity"],"2":["phy_angular_velocity"],"3":["\n  ","\n  ","\n  ","This variable can be used to set the angular velocity of the instance, or it can be used to get the current angular velocity, in degrees per second and the value used can be either positive (for clockwise rotation) or negative (for anticlockwise rotation).\n    If you set this on an instance that was previously static (ie: it has a density of 0) it will become a kinematic object and begin rotating","\n  "," ","\n  ","\n  ","phy_angular_velocity;","\n  "," ","\n  ","\n  ","Real (single precision floating point value, or ","undefined"," if the instance is not physics enabled)","\n  "," ","\n  ","\n  ","if abs(phy_angular_velocity) > 0","     {\n    ","     phy_angular_velocity -= sign(phy_angular_velocity) * 0.01;","     }\n    "," else\n    ","     {\n    ","     phy_angular_velocity = 0;","     }\n  ","\n  ","The above code will check the angular velocity of the instance and if it is not 0 it will then add (or subtract) a small amount every step until the value is 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Physics Variables","\n        ","Next: ","phy_angular_damping","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["phy_angular_velocity"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2136"})