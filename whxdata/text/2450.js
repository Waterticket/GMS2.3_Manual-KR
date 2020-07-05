rh._.exports({"0":["buffer_crc32"],"1":["buffer_crc32"],"2":["buffer_crc32"],"3":["\n  ","\n  ","\n  ","This function will take input data from a buffer and returns a crc32 checksum hash. You specify the buffer ID of the buffer to use, then an offset value (in bytes) for where to begin, and then a size (again in bytes) for the region to be hashed, and\n    the function will return a 32 bit integer value for that region.","\n  "," ","\n  ","\n  ","buffer_crc32(buffer, offset, size);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The index of the buffer to use.","\n      ","\n      ","\n        ","offset","\n        ","The data offset value.","\n      ","\n      ","\n        ","size","\n        ","The size of the buffer.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","check_string = buffer_sha1(buff, 0, buffer_get_size(buff));","\n  ","The above code will create a crc32 checksum hash for the full data stored in the buffer indexed by the variable \"buff\", and store the returned hash in the variable \"check_string\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_base64_encode","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_crc32"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2450"})