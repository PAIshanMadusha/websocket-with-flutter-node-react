import 'package:flutter/material.dart';
import 'package:flutter_client/pages/chat_page.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Simple Chat App",
      theme: ThemeData(
        appBarTheme: AppBarTheme(color: Colors.white),
        scaffoldBackgroundColor: Colors.white,
      ),
      home: ChatPage(),
    );
  }
}

