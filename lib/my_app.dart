import 'package:causeascene/home_page.dart';
import 'package:causeascene/sold/sold_page.dart';
import 'package:causeascene/ui/custom_colors.dart';
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Cause A Scene',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: CustomColors.primaryMaterialColor(),
        backgroundColor: CustomColors.primaryColor(),
        splashColor: CustomColors.primaryColor(),
        scaffoldBackgroundColor: CustomColors.primaryColor(),
        brightness: Brightness.dark,
      ),
      initialRoute: "/",
      routes: {
        '/': (context) => const HomePage(),
        '/sold': (context) => const SoldPage(),
      },
    );
  }
}
