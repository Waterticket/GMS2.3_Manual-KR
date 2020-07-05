rh._.exports({"0":["Networking"],"2":["Networking"],"3":["\n  ","\n  ","\n  ","The GameMaker Studio 2 networking functions are based on ","sockets",", which is an industry standard on all platforms. With sockets, you have the ability to create both clients and servers using simple GML which allows you to create even a\n    single player game using the client/server model (something which will allow multiplayer to be added easily later).","\n  ","Basically, a socket is an object which can send, receive, connect and listen to ","ports"," on the network. These functions deal with just TCP/IP connections, which is what the internet is based on (IPv4 to be more precise). In essence this lets you\n    connect one socket using an IP address (let's say 192.168.1.10) to another socket on another IP address (say 192.168.1.11). Once connected, these two sockets can send data back and forth using the ","network_send_*"," functions (like ","network_send_packet()",")\n    and the dedicated asynchronous event that is triggered by them. This async event will generate a ","DS map"," containing the data received as well as other details, and you can find the complete details\n    in the section on the ","Network Async Event",".","\n  ","Instead of programs having to read and deal with every bit of network traffic coming into a machine, IP addresses also deal with ports, which are numbered from 0 to 65535. This allows each program to get only the packets of data that it's interested\n    in, and not everything that has been sent by every program. This also saves considerable CPU time, as it seriously cuts down on data processing, so with GameMaker Studio 2 you can also “listen” to ports. So, a server will create a socket, and\n    then bind it to a specific port to listen to. It will then get notified of connections, disconnections and data transfers from that socket.","\n  ","The data \"packets\" themselves are made up of binary data taken from a buffer. This buffer can be created and manipulated using the GameMaker Studio 2 ","Buffer functions",".","\n  ","It is worth noting that if you are creating a project for the HTML5 target, then you will not be able to use the server create functions due to browser restrictions and will have to write your own server for this platform using something like ","Electron ","or\n    ","NodeJS",". Also note that if your game is cross platform and you anticipate connecting to an HTML5 instance of the game from a server running on a mobile or desktop device, then your server can only communicate to the HTML5 instance\n    using the Web Socket protocol (this is done using the constant ","network_socket_ws"," - see ","network_create_server()"," for more information). This means that your server may have to create two sockets\n    on different ports, one to connect to non HTML5 targets (Android, Windows, etc...) and one to connect to the HTML5 target.","\n  ","The following functions exist for you to use for networking:","\n  "," ","\n  ","\n    ","network_create_server","\n    ","network_create_server_raw","\n    ","network_create_socket","\n    ","network_create_socket_ext","\n    ","network_connect","\n    ","network_connect_raw","\n    ","network_resolve","\n    ","network_set_config","\n    ","network_set_timeout","\n    ","network_send_broadcast","\n    ","network_send_packet","\n    ","network_send_raw","\n    ","network_send_udp","\n    ","network_send_udp_raw","\n    ","network_destroy","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Reference","\n        ","Next: ","Web","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Networking"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"2214"})