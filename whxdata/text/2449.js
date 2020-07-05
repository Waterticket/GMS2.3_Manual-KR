rh._.exports({"0":["buffer_sha1"],"1":["buffer_sha1"],"2":["buffer_sha1"],"3":["\n  ","\n  ","\n  ","In cryptography, SHA-1 is a cryptographic ","hashing"," function designed by the United States National Security Agency and is employed in several widely used applications and protocols like the popular\n    ","Git"," where it is used to check for file changes. This function will take input data from a buffer and returns a 160 bit message digest in ASCII format. In this way you can generate a secure key which can be stored and used to check the integrity\n    of the information being sent to (or received from) an external server (for example). When applying this to buffers using this function you must specify the buffer id of the buffer to use, then an offset value (in bytes) for where to begin, and then\n    a size (again in bytes) for the region to be hashed.","\n  "," ","\n  ","\n  ","buffer_sha1(buffer, offset, size);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The index of the buffer to use.","\n      ","\n      ","\n        ","offset","\n        ","The data offset value.","\n      ","\n      ","\n        ","size","\n        ","The size of the buffer.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","check_string = buffer_sha1(buff, 0, buffer_get_size(buff));","\n  ","The above code will create a sha1 hash for the full data stored in the buffer indexed by the variable \"buff\", and store the returned hash in the variable \"check_string\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_crc32","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_sha1"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2449"})