rh._.exports({"0":["buffer_base64_decode"],"1":["buffer_base64_decode"],"2":["buffer_base64_decode"],"3":["\n  ","\n  ","\n  ","With this function you can decode a base64 encoded string (created using the ","buffer_base64_encode()"," function) into a buffer. This function will create the buffer (as a 1 byte aligned \"grow\" buffer\")\n    and return the unique index for the buffer which should be used in all further function calls.","\n  ","NOTE",": It's important that you remove any dynamically created resources like this from memory when you no longer need them to prevent memory leaks, so when you are finished with the buffer that you have created you should free it up again\n    using ","buffer_delete()",".","\n  "," ","\n  ","\n  ","buffer_base64_decode(string);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","string","\n        ","The base64 encoded string to decode","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","ini_open(\"Save.ini\");"," buff = buffer_base64_decode(ini_read_string(\"Save\", \"Slot1\", \"\"));"," ini_close();\n  ","\n  ","The above code will open an ini file and then read a string from it into the decode function. This function will return a buffer index, which is stored in the variable \"buff\", containing the data previously encoded and saved. The ini file\n    is then closed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_base64_decode_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_base64_decode"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2446"})