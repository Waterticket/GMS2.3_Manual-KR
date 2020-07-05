rh._.exports({"0":["Guide To Using Shaders"],"1":["Guide To Using Shaders"],"2":["shaders,shader,use shaders,shader guide,shader setup,shader examples,shader example"],"3":["\n  ","\n  ","\n  ","Shaders are often used to create beautiful graphical effects in games. They are also among the most advanced features offered by GameMaker Studio 2, so it is necessary that you have a basic understanding of programming and how GameMaker Studio 2 works\n    before getting started with them.","\n  ","So, what is a shader? Initially they were created to provide shading for lighting (hence the name), but they are now used to produce a huge variety of effects. Shader code is similar to regular code, but it is (almost always) executed by the GPU, not\n    the CPU. This difference comes with its own set of rules and limitations, but we’ll cover those later.","\n  ","Each shader is made up of two separate components: a ","vertex shader ","and a ","fragment shader ","(also referred to as ","pixel shader","). Let’s start with the vertex shader. Each sprite is formed by a rectangle,\n    but computers like to draw triangles, so those rectangles are split into two triangles (sometimes called a ","quad","). This leaves us with six vertices (corners) per sprite, but two of those are the same one, so we should only worry about four.\n    Now, imagine we have a for loop that goes over every vertex and executes the code inside the vertex shader for each. This allows us to change the vertex position and color before passing it over to the fragment shader since the vertex shader is executed\n    earlier.","\n  ","Here’s how that would look:","\n  ","For the fragment shader, you can imagine the same loop as before, but this time it goes over every single pixel in your\n    sprite, giving you information such as location and color of that pixel. In your fragment shader code, you perform operations and calculations to determine the color of that pixel to get the effect you want. For example, if you want a shader to make\n    your sprite be black and white, then you’d calculate which shade of grey each pixel needs to be to create the effect.","\n  ","It would look something like this:","\n  ","The reason shader code is usually executed by the GPU is that it is more efficient at it. Modern CPUs typically have\n    between two to eight cores. Each core can perform one task at a time, so by taking advantage of multiple cores, we can perform that many tasks simultaneously. In contrast, modern GPUs can perform thousands, and even tens of thousands, of tasks running\n    at the same time. This is helpful for shaders because we can execute the shader code of thousands of pixels concurrently. The limitation is that we only have access to the initial state of the sprite, so we don’t know about any modifications done\n    to other pixels since we can’t know for sure the code has run on them yet.","\n  ","NOTE",": GameMaker Studio 2 allows users to write shaders in ","GLSL"," (OpenGL Shader Language), ","HLSL"," (High-level Shader Language, used when working with DirectX), and ","GLSL ES"," (a subset of\n    GLSL which is common in mobile devices). Here we are using ","GLSL ES"," as the shader language since it’s the one that provides the best compatibility across target platforms. Generally this is the one you always want to use unless you\n    have very specific needs and understand the limitation of the other shader languages. The math and techniques should be similar between all three languages however, save for a few syntax differences here and there.","\n  ","The vertex shader is executed first, and as we explained above, it deals with ","vertices",". It is used to calculate positions, normals, and texture coordinates. These shaders are not particularly useful in 2D, since every sprite is usually\n    a square, but it can be used to do some skewing, scaling, etc... It becomes much more useful in 3D for lighting calculations and mesh deformations. Fragment shaders are much more interesting and are what will be covered mostly here, since the fragment\n    shader is where we get information about our textures and can tweak the final color of each pixel in our image.","\n  "," ","\n  ","\n  ","If you have created a shader in GameMaker Studio 2, you might have noticed the following keywords in the default ","pass-through"," shader. These keywords help the shader understand the purpose and scope of each variable:","\n  ","\n    ","Attribute",": These are variables passed in by OpenGL to the ","vertex ","shader. These can change per vertex and are read-only. These include information such as vertex position, texture coordinates, vertex color, and vertex\n      normal.","\n    ","Varying",": These are variables used to pass data between the ","vertex ","and ","fragment ","shaders. These are available for writing in the vertex shader, but are read-only in the fragment shader.","\n    ","Uniform",": These are variables that change per object and are passed by the user to the shader. These can be used in both the vertex and fragment shaders, but are read-only.","\n  ","\n  ","You'll also see the use of ","vec"," as a keyword. This is used to identify a vector variable in the shader and you'll soon see that vectors are very important when working with shaders. That is why they are implemented as a base\n    type in GLSL. If you are unfamiliar with them, they are a mathematical term represented as a matrix with only one column. In programming, we usually represent them as an array where the number of components corresponds to the dimension. Two and three-dimensional\n    vectors are often used for positions, texture coordinates, or colors without an alpha channel, while four-dimensional ones are used for colors with an alpha channel. We can also specify if they hold booleans, integers, or floating point values. The\n    syntax to declare a vector is this:","\n  ","vec2 firstVec;  // Two-dimensional vector of floats"," vec3 secondVec; // Three-dimensional vector of floats"," vec4 thirdVec;  // Four-dimensional vector of floats","\n    "," bvec3 boolVec;  // Three-dimensional vector of booleans"," ivec4 intVec;   // Four-dimensional vector of booleans","\n  ","To initialize them, we can use the constructor to create the vector. You need to provide the same number of values as the length of the vector, but you can mix and match scalars and smaller vectors to reach the target length. Here are some examples\n    of this:","\n  ","// Simple 2D vector with 2 scalar values"," vec2 firstVec  = vec2(2.0, 1.0);"," // A 4D vector using 2 scalars and a vec2 create the 4 values"," vec4 secondVec = vec4(1.0, firstVec, 0.0);"," // A 3D vector using 1 component of a vec4 plus a\n    vec2 to create the 3 values"," vec3 thirdVec  = vec3(secondVec.x, firstVec);","\n  ","We can also assign them another vector of the same length (or ","swizzle ","the vector until it has the proper length, but we'll explain that in a moment):","\n  ","vec3 firstVec;"," vec3 secondVec = firstVec;"," vec4 thirdVec  = secondVec.xyz;"," vec2 fourthVec = thirdVec.zx;","\n  ","When accessing vector components in GLSL, we have a few options. The most basic one is to treat the vector as an array and access the components using square brackets, like this:","\n  ","vec4 myVec;"," myVec[0] = 1.0;"," myVec[1] = 0.0;"," myVec[2] = 2.0;"," myVec[3] = 1.0;","\n  ","However, there is another way to access the components with the following syntax:","\n  ","vec4 myVec;"," myVec.x = 1.0;"," myVec.y = 2.0;","\n  ","This uses the component names inside the vector to access them. You can use x, y, z, or w, to get the first, second, third, or fourth components, respectively. We refer to this method as ","swizzling ","because the following syntax is also\n    valid:","\n  ","vec4 firstVec;"," vec3 secondVec = firstVec.xyz;"," vec2 thirdVec  = secondVec.zy;"," vec4 fourthVec = thirdVec.yxxy;","\n  ","As you can see, we can use any combination of up to four letters to create a vector of that length. We cannot attempt to access a component that would be out of bounds (for example, trying to access w in ","secondVec"," or\n    ","thirdVec",", since they don’t have a fourth component). Also, we can repeat letters and use them in any order, as long as the vector variable it’s being assigned to is the same size as the number of letters used.","\n  ","For obvious reasons, when using swizzle to set component values, you can’t use the same component twice. For example, the below is not valid as you are trying to set the same component to two different values:","\n  ","myVec.xx = vec2(2.0, 3.0);","\n  ","Last, we have been using ","xyzw"," as our swizzle mask, which is usually the case when dealing with positions. There are two more sets of masks you can use: ","rgba"," (used for colors), or ","stpq","    (used for texture coordinates). Internally, there is no difference between these masks, and we only use them to make the code clearer as to what the vector represents in that instance. Also, we can’t combine swizzle masks in the same operation, so\n    this is invalid:","\n  ","myVec = otherVec.ybp;","\n  ","Those were a lot of definitions and information, but knowing these things is necessary to understand shaders themselves.","\n  "," ","\n  ","\n  ","When you create a shader in GameMaker Studio 2, it will open two files for you: a vertex shader (",".vsh",") and a fragment shader (",".fsh","). This is the most basic shader you can make, which takes a sprite,\n    reads the texture, and colors each pixel with that color. If you specify vertex colors when drawing, those colors will blend with the texture.","\n  ","Let’s go through the code for a newly created shader asset and analyze it, starting with the vertex shader.","\n  ","// Passthrough Vertex Shader"," attribute vec3 in_Position;                  // (x,y,z)"," //attribute vec3 in_Normal;                  // (x,y,z)     unused in this shader."," attribute vec4 in_Colour;                    // (r,g,b,a)"," attribute\n    vec2 in_TextureCoord;              // (u,v)","\n    "," varying vec2 v_vTexcoord;"," varying vec4 v_vColour;","\n    "," void main()"," {\n    ","     vec4 object_space_pos = vec4( in_Position.x, in_Position.y, in_Position.z, 1.0);","     gl_Position = gm_Matrices[MATRIX_WORLD_VIEW_PROJECTION] * object_space_pos;","     ","     v_vColour = in_Colour;","     v_vTexcoord = in_TextureCoord;","    }\n  ","\n  ","Outside of the main function, we see some variable declarations and their qualifiers. The attributes are given to us by GameMaker. The varying ones are created by the user to pass that information over to the fragment shader. Inside the main function,\n    we have the calculations to find the screen position of the vertex:","\n  ","\n    ","First, we create a ","vec4"," and initialize it with the components of the position, adding one as the fourth component. In linear algebra, the convention is that we add a one to the fourth component if the vector is representing\n      a point, or a zero if it represents an actual vector.","\n    ","Next, we need to add this fourth component to multiply it with the ","MATRIX_WORLD_VIEW_PROJECTION"," matrix, which is a 4x4 matrix. This multiplication will project the world position of the vertex into screen coordinates.","\n    ","Finally we pass the vertex color and texture coordinate to the fragment shader through our varying variables.","\n  ","\n  ","This shader should be left alone if you are not planning to play with vertex positions and it will not be used in any of the examples given below because all the effects shown will be created using the fragment shader.","\n  ","Let’s take a quick look at the fragment shader now:","\n  ","// Passthrough Fragment Shader"," varying vec2 v_vTexcoord;"," varying vec4 v_vColour;","\n    "," void main()"," {\n    ","     gl_FragColor = v_vColour * texture2D( gm_BaseTexture, v_vTexcoord );"," }\n  ","\n  ","As explained before, the idea behind a fragment shader is to return the color of the current pixel. This is done by assigning the variable ","gl_FragColor"," the final color value. The ","texture2D"," function\n    takes a texture and a ","vec2"," with the UV coordinates you want to check in that texture, which returns a ","vec4"," with the color. In the pass through shader, all we are doing is grabbing the color of\n    the texture in the coordinate of this pixel and multiplying it by the color of the vertex associated with this pixel.","\n  ","Now that we have our first shader, all we have to do to test it is create an object and assign it a sprite, then in the ","Draw Event"," of the object you set the shader like this:","\n  ","// Draw Event"," shader_set(shdrColorOverlay);\n    "," draw_self();\n    "," shader_reset();\n  ","\n  ","Every draw call we make between ","shader_set()"," and ","shader_reset()"," will\n    have the shader applied to it. Here, we are drawing the object sprite with our passthrough shader:","\n  ","As you might have guessed, this does not visually changing anything, as this is a simple pass-through\n    shader. However the sections below outline some simple steps you can take to modify this and change the way the sprite will be drawn. Each of the section shows a different shader that you can create and use in your projects, explaining the steps required\n    to create them and why we are doing things the way we are.","\n  "," ","\n  ","Colour Overlay Shader","Colour Overlay Shader","\n  ","\n    ","We can edit the base shader now to do something different. We'll not be touching the vertex shdaer part, and only editing the fragment shader, and to start with we'll do a very simple operation, which is to make the shader draw the sprite\n      using the colour red. We'll do this by simply changing the ","gl_FragColor"," to be red., like this:","\n    ","// Color Overlay Fragment Shader"," void main()"," {\n      ","     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);"," }\n    ","\n    ","This will give us the following result:","\n    ","Not exactly what we expected! What we need to remember is that every sprite is ultimately a rectangle,\n      so unless we consider transparency - which we haven't - this is the result we’ll get.","\n    ","NOTE",": In the image above, the rectangle changes size because the base sprite has had the \"empty\" space around it cropped automatically when it was placed on the texture page by GameMaker, so each animation frame the triangles\n      that make it up are different sizes to fit the cropped size of the frame. If you disable this option, then you'd simply have a motionless red square on the screen.","\n    ","Above we mentioned the ","texture2D"," function, and we'll use that to grab the color at the pixel we are working on and get the transparency from it. The return value of is ","texture2D"," is a\n      ","vec4",", where the components are the red, green, blue, and alpha, in that order. We can access the alpha channel either by putting a period followed by an ","a"," or a ","w","      after the variable name. This corresponds to RGBA and XYZW, respectively.","\n    ","Here’s the updated code:","\n    ","// Color Overlay Fragment Shader"," varying vec2 v_vTexcoord;","\n      "," void main()"," {\n      ","     vec4 texColor = texture2D(gm_BaseTexture, v_vTexcoord);","     gl_FragColor = vec4(1.0, 0.0, 0.0, texColor.a);"," }\n    ","\n    ","We are now assigning a new ","vec4"," to ","gl_FragColor",", where the red channel is maxed, the green, and blue channels are zero, and the alpha channel is the same as the original texture. The output looks\n      like this:","\n    ","Now that’s what we were after! We have replaced the color of every pixel with red, but have kept\n      the alpha channel intact.","\n    ","Having to change the shader each time we want to use a different color isn’t a good idea, especially since we’d need to have a separate shader for each color we want. Instead, we will pass the color information to the shader using a ","uniform",".\n      To do this, we first need to get a ","pointer ","to the uniform. We will do this in the ","Create Event"," of our object that has the sprite by adding:","\n    ","// Create Event"," _uniColor = shader_get_uniform(shdrColorOverlay, \"u_colour\");"," _color    = [1.0, 1.0, 0.0, 1.0];","\n    ","All we need to do is call ","shader_get_uniform()"," to get a pointer to the uniform. The parameters we need to pass are the shader\n      asset name (without quotation because we want to pass the ID that GameMaker generates for us) and the name of the uniform variable inside of the shader, this time as a string. This name needs to match exactly the one inside the shader code for it\n      to work. We have also added a colour variable so we can change it at runtime and have it remember our changes.","\n    ","Now the code in our draw event will change slightly to pass the uniform variable.","\n    ","// Draw Event"," shader_set(shdrColorOverlay);\n      "," shader_set_uniform_f_array(_uniColor, _color);"," draw_self();\n      "," shader_reset();\n    ","\n    ","It’s the same code as before, but before we draw anything, we need to pass all the uniform values to the shader. In this case, we are passing the color as an array of floats. As for the shader, we will change it to include the uniform and use it,\n      so it becomes:","\n    ","// Color Overlay Fragment Shader"," varying vec2 v_vTexcoord;"," uniform vec4 u_color;"," void main()"," {\n      ","     vec4 texColor = texture2D(gm_BaseTexture, v_vTexcoord);","     gl_FragColor = vec4(u_color.rgb, texColor.a);"," }\n    ","\n    ","We declare a variable with the same name as in the create shader (","u_color",") and we pass it as the first three components of the ","gl_FragColor"," vector, taking advantage of swizzling. If we compile\n      again, we should see this:","\n    ","Now the shader is much more useful and reusable. It’s up to you to add more functionality\n      if you need it to set the color (using the variable ","_color",") during runtime.","\n    "," ","\n  ","\n  ","Black And White Shader","Black And White Shader","\n  ","\n    ","Making a black and white shader is a great way to learn more about how shaders work, and a lot of beginners start by trying to do this, since conceptually it's quite simple: get every pixel and assign it a shade of gray. But is it simple? Not\n      quite...\n    ","\n    ","When using RGB colour, if all three components are the same value, then we get a gray tone. The naïve approach to creating a shader to use this idea would be to add all three color channels (red, green, and blue) and then divide it by three. After\n      that you'd assigned the value to all three channels, thus creating a gray tone. Here’s what that fragment shader looks like:","\n    ","// Black and white fragment shader"," varying vec2 v_vTexcoord;"," varying vec4 v_vColour;","\n      "," void main()"," {\n      ","     vec4 texColor = texture2D(gm_BaseTexture, v_vTexcoord);","     float gray = (texColor.r + texColor.g + texColor.b) / 3.0;","     gl_FragColor = v_vColour * vec4(gray, gray, gray, texColor.a);"," }\n    ","\n    ","One thing you might have noticed is that in the ","gl_FragColor"," code, we're multiplying the ","vec4"," with something called ","v_vColour",". This is a variable passed by the\n      vertex shader which tells us the color of the vertex associated with this pixel. It’s always a good idea to multiply your final calculated color with the vertex color. In most cases, it won’t do anything, but if you changed the vertex color in GML,\n      this will reflect that (by using functions such as ","draw_sprite_ext()"," or ","draw_sprite_general()"," to\n      change the ","image_blend",").","\n    ","As for the draw event, it’s quite simple since we don’t have a uniform to pass in:","\n    ","// Draw Event"," shader_set(shdrBlackAndWhite);\n      "," draw_self();\n      "," shader_reset();\n    ","\n    ","Let’s compile and see what we got.","\n    ","This looks great already, right? Well, yes and no... there is a solution that is more “correct”, since instead\n      of adding the components and dividing by three, we multiply each component by the standard NTSC values for black and white. Here’s the modified fragment shader code:","\n    ","// Black and white fragment shader"," varying vec2 v_vTexcoord;","\n      "," void main()"," {\n      ","     vec4 texColor = texture2D(gm_BaseTexture, v_vTexcoord);","     float gray = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));","     gl_FragColor = vec4(gray, gray, gray, texColor.a);"," }\n    ","\n    ","We use the dot product as a shorthand for multiplying each component of ","texColor"," with the correct weights and then add them together. If you are unfamiliar with the dot product, this is essentially what’s happening:","\n    ","float gray = (texColor.r * 0.299) + (texColor.g * 0.587) + (texColor.b * 0.114);","\n    ","In the end, it looks very similar, but it’s technically more correct.","\n    ","\n    "," ","\n  ","\n  ","Rainbow Shader","Rainbow Shader","\n  ","\n    ","Our final shader example is a fun one and can be used to add life to text and buttons and other things. We'll start simple and add functionality gradually since this shader is highly customizable. There's quite a lot to cover for this one,\n      so if you feel a bit lost or confused, please go back and re-read some of the sections above.","\n    ","The first thing we want to do is color pixels with every hue, depending on the pixel’s horizontal position. The way to do this is to set the x position to be the hue and then convert from HSV (hue, saturation, brightness) format to RGB (red, green,\n      and blue) format. For this, we will need to write a helper function in our fragment shader that takes HSV values and returns an RGB vector. We will use a single function which does this without the need for any ","if"," statements,\n      as using conditionals in shader code makes shaders ","very ","slow, and should be avoided.","\n    ","Here’s what the shader looks like at this stage:","\n    ","// Fragment Shader"," varying vec2 v_vTexcoord;"," varying vec4 v_vColour;","\n      "," vec3 hsv2rgb(vec3 c) "," {\n      ","     vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);","     vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);","     return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);"," }\n      ","\n      "," void main()"," {\n      ","     vec3 col = vec3(v_vTexcoord.x, 1.0, 1.0);","     float alpha = texture2D(gm_BaseTexture, v_vTexcoord).a;","     gl_FragColor = v_vColour * vec4(hsv2rgb(col), alpha);"," }\n    ","\n    ","There's a bit more going on here than in the previous examples, but most of it should be fairly obvious to you now. First, there’s our ","hsv2rgb"," function, which takes a ","vec3"," with our HSV colour\n      and returns another ","vec3"," with our RGB conversion. In the main function, we start by creating our HSV colour, where the hue is our x position, and we’ll leave the saturation and brightness as 1.0 for now. Then, we get\n      the alpha from the texture so it only colors our sprite character and not the entire sprite rectangle (as we did in the colour overlay example, above). Lastly, we set our Fragment color to be our HSV color converted to RGB with the alpha, multiplied\n      by the vertex color (good practice to do this always).","\n    ","As for our draw code, it is trivial at the moment:","\n    ","// Draw Event"," shader_set(shdrRainbow);\n      "," draw_self();\n      "," shader_reset();\n    ","\n    ","Let’s check out what we got:","\n    ","We are close to what we want, but there’s an issue: we are not seeing all the colors at once in every frame\n      of the animation, and the colors seem to change randomly. The reason is that we assumed that ","v_vTexcoord"," gave us the coordinates of the sprite, starting at the top-left corner (0,0) and ending in the bottom right corner\n      (1,1), which is standard in shaders. However, for optimization, GameMaker stuffs as many textures together as it can fit in what is called a ","texture page,"," and because of that, this\n      is how our texture actually looks:","\n    ","As explained above, ","v_vTexcoord"," gives us the absolute coordinates of the sprite within this entire texture page,\n      but what we want is a value from 0.0 to 1.0 that only covers our current sprite. This process is called ","normalizing"," (getting a value and translating it to a 0 to 1 range). To normalize our horizontal values, we need to know the\n      values of x0 and x1 in the picture above. Luckily, GameMaker has a function that gives us the location of every corner in our sprite within the texture page. First, we need to go to the Create Event and create a uniform to pass this data over to\n      the shader:","\n    ","// Create Event"," _uniUV = shader_get_uniform(shdrRainbow, \"u_uv\");","\n    ","And we modify the draw event to get the values and then pass them to the shader:","\n    ","// Draw Event"," shader_set(shdrRainbow);\n      "," var uv = sprite_get_uvs(sprite_index, image_index);"," shader_set_uniform_f(_uniUV, uv[0], uv[2]);"," draw_self();\n      "," shader_reset();\n    ","\n    ","The function ","sprite_get_uvs()"," takes a sprite and an index, and it returns an array with tons of information,\n      such as the coordinates for each corner, how many pixels were cropped to optimize it, etc. We are interested in two of those values: the left and right coordinates of the sprite, which are stored in ","uv[0]"," and ","uv[2]","      respectively. In the fragment shader, we will use those values now to calculate the normalized horizontal position like this:","\n    ","// Fragment Shader"," varying vec2 v_vTexcoord;"," varying vec4 v_vColour;","\n      "," uniform vec2 u_uv;","\n      "," vec3 hsv2rgb(vec3 c) "," {\n      ","     vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);","     vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);","     return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);"," }\n      ","\n      "," void main()"," {\n      ","     float pos = (v_vTexcoord.x - u_uv[0]) / (u_uv[1] - u_uv[0]);","     vec3 col = vec3(pos, 1.0, 1.0);","     float alpha = texture2D(gm_BaseTexture, v_vTexcoord).a;","     gl_FragColor = v_vColour * vec4(hsv2rgb(col), alpha);","      }\n    ","\n    ","Here we add the uniform variable at the top of the file with the same name we used in the Create Event. Next, we calculate the normalized horizontal position by translating our current ","x"," coordinate to the origin (\n      ","v_vTexcoord.x - u_uv[0]",") and then we divide it by the width of the sprite to make the range from 0 to 1 (","u_uv[1] - u_uv[0]",").","\n    ","The result is:","\n    ","There we go! This is exactly what we wanted. We can see every color of the spectrum inside\n      our sprite.","\n    ","You might be happy with that, but we can have some more fun with this shader. What if we added an offset to the colors based around time to produce movement? To do this, we will need two extra variables for ","speed ","and ","time",".\n      We will also need two more uniforms, one for each of the new variables, so the Create Event becomes:","\n    ","// Create Event"," _uniUV    = shader_get_uniform(shdrRainbow, \"u_uv\");"," _uniTime  = shader_get_uniform(shdrRainbow, \"u_time\");"," _uniSpeed = shader_get_uniform(shdrRainbow, \"u_speed\");"," _time  = 0;","      _speed = 1.0;","\n    ","We also need to increase the time every frame, so in the Step Event we add:","\n    ","// Step Event"," _time += 1 / room_speed;","\n    ","Let’s go to the draw event now to send these uniforms to the shader:","\n    ","// Draw Event"," shader_set(shdrRainbow);\n      "," var uv = sprite_get_uvs(sprite_index, image_index);"," shader_set_uniform_f(_uniUV, uv[0], uv[2]);"," shader_set_uniform_f(_uniSpeed, _speed);"," shader_set_uniform_f(_uniTime, _time);"," draw_self();\n      "," shader_reset();\n    ","\n    ","Finally, we'll go back to our shader to actually use these variables now. What we will do is multiply the speed with the time and add it to the position, like so:","\n    ","// Fragment Shader"," varying vec2 v_vTexcoord;"," varying vec4 v_vColour;","\n      "," uniform vec2 u_uv;"," uniform float u_speed;"," uniform float u_time;","\n      "," vec3 hsv2rgb(vec3 c) "," {\n      ","     vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);","   vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);","     return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);"," }\n      ","\n      "," void main()"," {\n      ","     float pos = (v_vTexcoord.x - u_uv[0]) / (u_uv[1] - u_uv[0]);","     vec3 col = vec3((u_time * u_speed) + pos, 1.0, 1.0);","     float alpha = texture2D(gm_BaseTexture, v_vTexcoord).a;","     gl_FragColor = v_vColour * vec4(hsv2rgb(col),\n      alpha);\n      "," }\n    ","\n    ","If you did everything correctly, you should be seeing something like this:","\n    ","To finish this shader, we will add a few more uniforms to customize it even further.\n      The first two are to control the saturation and brightness. The next one we'll call \"section\" and its function is to allow the user to pass a number between zero and one to determine what percentage of the entire spectrum we see at\n      a time. Last, we will add a variable called \"mix\", which will specify how much we want to mix our shader color with the original texture color (1.0 is all rainbow, 0.0 is all texture). As always, let’s start by adding the variables to\n      the Create Event:","\n    ","// Create Event"," _uniUV         = shader_get_uniform(shdrRainbow, \"u_uv\");"," _uniTime       = shader_get_uniform(shdrRainbow, \"u_time\");"," _uniSpeed      = shader_get_uniform(shdrRainbow, \"u_speed\");"," _uniSection\n         = shader_get_uniform(shdrRainbow, \"u_section\");"," _uniSaturation = shader_get_uniform(shdrRainbow, \"u_saturation\"); "," _uniBrightness = shader_get_uniform(shdrRainbow, \"u_brightness\");"," _uniMix        =\n      shader_get_uniform(shdrRainbow, \"u_mix\");","\n      "," _time  = 0;"," _speed = 1.0;"," _section = 0.5;"," _saturation = 0.7;"," _brightness = 0.8;"," _mix = 0.5;","\n    ","Our draw event changes to include these uniforms like this:","\n    ","// Draw Event"," shader_set(shdrRainbow);\n      "," var uv = sprite_get_uvs(sprite_index, image_index);"," shader_set_uniform_f(_uniUV, uv[0], uv[2]);"," shader_set_uniform_f(_uniSpeed, _speed);"," shader_set_uniform_f(_uniTime, _time);"," shader_set_uniform_f(_uniSaturation, _saturation);","      shader_set_uniform_f(_uniBrightness, _brightness);"," shader_set_uniform_f(_uniSection, _section);"," shader_set_uniform_f(_uniMix, _mix);"," draw_self();\n      "," shader_reset();\n    ","\n    ","As for the shader, we need to pass the saturation and brightness to the color, which will affect the color generated by our helper function. The section needs to be multiplied by our position to reduce the range. We will also grab the entire texture\n      color, so we can calculate our final color by mixing the texture color with the RGB conversion of our color. The last parameter of the mix function determines how much of the second color we want to add. This is our final shader code:","\n    ","// Fragment Shader"," varying vec2 v_vTexcoord;"," varying vec4 v_vColour;","\n      "," uniform vec2 u_uv;"," uniform float u_speed;"," uniform float u_time;"," uniform float u_saturation;"," uniform float u_brightness;"," uniform float u_section;"," Uniform float u_mix;","\n      "," vec3 hsv2rgb(vec3 c) "," {\n      ","     vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);","     vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);","     return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);"," }\n      ","\n      "," void main()"," {\n      ","     float pos = (v_vTexcoord.x - u_uv[0]) / (u_uv[1] - u_uv[0]);","     vec4 texColor = texture2D(gm_BaseTexture, v_vTexcoord);","     ","     vec3 col = vec3(u_section * ((u_time * u_speed) + pos), u_saturation, u_brightness);","        vec4 finalCol = mix(texColor, vec4(hsv2rgb(col), texColor.a), u_mix);","     ","     gl_FragColor = v_vColour * finalCol;"," }\n    ","\n    ","And our final result is this!","\n    ","\n    "," ","\n  ","\n  "," ","\n  ","That's the end of this short guide and you should now have a better understanding of how shaders work and some of the uses they can be put to. You should take your time to play with the shaders you've created following this guide, and try to\n    experiment with them do other things - how about creating a blur shader, or a shader that makes a gameboy-style monochrome screen? - since shaders are an incredibly powerful tool for adding visual complexity and style to your games.","\n  "," ","\n  ","YoYo Games would like to thank ","Alejandro Hitti"," and ","Amazon"," for permitting us to reproduce this guide. You can find the original version on the ","Amazon Developer Blog",".","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Additional Information","\n        ","Next: ","Guide To Primitives And Vertex Building","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Guide To Using Shaders"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"6":["Shader Variables","Creating A Shader"],"id":"2575"})