rh._.exports({"0":["audio_sound_pitch"],"1":["audio_sound_pitch"],"2":["audio_sound_pitch"],"3":["\n  ","\n  ","\n  ","This function can be used to change the pitch of a given sound. The sound can either be one referenced from an index for an individual sound being played which has been stored in a variable when using the ","audio_play_sound()"," or \n    ","audio_play_sound_at()"," functions, or an actual sound asset from the Asset Browser. If it is an index of a playing sound, then only that instance will be changed, however when using a sound asset from the Asset Browser, all\n      further instances being played of that sound will be changed.","\n  ","The pitch argument is a ","pitch multiplier",", in that the input value multiplies the current pitch by that amount, so the default value of 1 is no pitch change, while a value of less than 1 will lower the pitch and greater than 1 will\n    raise the pitch. It is best to use small increments for this function as any value under 0 or over 5 may not be audible anyway. It is worth noting that the total pitch change permitted is clamped to (1/256) - 256 octaves, so any value over or under\n    this will not be registered.","\n  ","NOTE: ","The clamped value given above is what GameMaker Studio 2 attempts to clamp the range to, but this value is ","not"," guaranteed on all target platforms. iOS, for example,\n    clamps to (1/256) - 8, so you may need to experiment on each target platform and have different versions of a sound resource, each one pre-shifted, should you require higher or lower octave values.","\n  "," ","\n  ","\n  ","audio_sound_pitch(index, pitch);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the sound to change.","\n      ","\n      ","\n        ","pitch","\n        ","The pitch multiplier (default 1).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var s_engine = audio_play_sound(snd_CarEngine, 10, false);"," switch (gear)","    {\n    ","    case 1: audio_sound_pitch(s_engine, 0.8); break;","    case 2: audio_sound_pitch(s_engine, 0.9); break;","    case 3: audio_sound_pitch(s_engine, 0.95); break;","    case 4: audio_sound_pitch(s_engine, 1); break;","    case 5: audio_sound_pitch(s_engine,\n    1.2); break;","    }\n  ","\n  ","The above code will change the pitch of the audio played from the sound indexed in the variable \"s_engine\" based on the value of the variable \"gear\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_sound_get_pitch","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_sound_pitch"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"677"})