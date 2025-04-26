import 'package:flutter/material.dart';
import 'package:flutter_client/services/chat_service.dart';

class ChatPage extends StatefulWidget {
  const ChatPage({super.key});

  @override
  State<ChatPage> createState() => _ChatPageState();
}

class _ChatPageState extends State<ChatPage> {
  final ChatService _chatService = ChatService();
  final TextEditingController _controller = TextEditingController();
  final List<Map<String, dynamic>> _messages = [];

  @override
  void initState() {
    super.initState();

    //Listen to the Stream
    _chatService.channel.stream.listen((data) {
      debugPrint("Received: $data");
      String message =
          data is List<int> ? String.fromCharCodes(data) : data.toString();

      setState(() {
        _messages.add({"message": message, "isSent": false});
      });
    });
  }

  //Send Message
  void _sendMessage() {
    if (_controller.text.isNotEmpty) {
      setState(() {
        _messages.add({"message": _controller.text, "isSent": true});
      });
      _chatService.sendMessage(_controller.text);
      _controller.clear();
    }
  }

  @override
  void dispose() {
    _chatService.dispose();
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "💬 Simple Chat App",
          style: TextStyle(fontSize: 46, fontWeight: FontWeight.bold),
        ),
        centerTitle: true,
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              itemCount: _messages.length,
              itemBuilder: (context, index) {
                bool isSentbyUser = _messages[index]["isSent"] ?? false;
                return Align(
                  alignment:
                      isSentbyUser
                          ? Alignment.centerRight
                          : Alignment.centerLeft,
                  child: Container(
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 15),
                    margin: EdgeInsets.symmetric(horizontal: 15, vertical: 10),
                    decoration: BoxDecoration(
                      color:
                          isSentbyUser
                              ? Colors.lightGreenAccent
                              : Colors.limeAccent,
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Text(
                      _messages[index]["message"] ?? [""],
                      style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.w600,
                        color: isSentbyUser ? Colors.black : Colors.black,
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
          Container(
            margin: EdgeInsets.only(bottom: 20, top: 20, left: 5, right: 5),
            child: Padding(
              padding: EdgeInsets.all(10),
              child: Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: _controller,
                      decoration: InputDecoration(
                        hintText: "Type a Message..",
                        contentPadding: EdgeInsets.symmetric(
                          horizontal: 20,
                          vertical: 25,
                        ),
                        filled: true,
                        fillColor: Colors.amber[50],
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20),
                          borderSide: BorderSide.none,
                        ),
                      ),
                    ),
                  ),
                  SizedBox(width: 8),
                  IconButton(
                    onPressed: _sendMessage,
                    icon: Icon(
                      Icons.send,
                      size: 38,
                      color: Colors.lightGreenAccent,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
