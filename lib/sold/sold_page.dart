import 'dart:convert';

import 'package:causeascene/nav.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

class SoldPage extends StatefulWidget {
  const SoldPage({Key? key}) : super(key: key);

  @override
  State<SoldPage> createState() => _SoldPageState();
}

class _SoldPageState extends State<SoldPage> {
  List<String> _soldImages = List.empty();

  @override
  void initState() {
    super.initState();
    _initImages();
  }

  Future _initImages() async {
    final manifestContent = await rootBundle.loadString('AssetManifest.json');

    final Map<String, dynamic> manifestMap = json.decode(manifestContent);

    final imagePaths = manifestMap.keys
        .where((String key) => key.contains('images/sold'))
        .where((String key) => key.contains('.jpg'))
        .toList();

    setState(() {
      print("Images loaded: ${imagePaths.length}");
      _soldImages = imagePaths;
    });
  }

  @override
  Widget build(BuildContext context) {
    var child = _soldImages.isEmpty
        ? Container()
        : MasonryGridView.count(
            crossAxisCount: 2,
            mainAxisSpacing: 4,
            crossAxisSpacing: 4,
            itemCount: _soldImages.length,
            itemBuilder: (context, index) {
              return Painting(asset: _soldImages.elementAt(index));
            },
          );
    return SafeArea(
        child: Scaffold(
            appBar: AppBar(
              title:
                  const Text("These are sold, message me to create your own!"),
            ),
            body: child));
  }
}

class Painting extends StatelessWidget {
  const Painting({
    Key? key,
    required this.asset,
  }) : super(key: key);

  final String asset;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: GestureDetector(
        onTap: () {
          Nav.navigateToImage(context, asset);
        },
        child: Image.asset(
          asset,
        ),
      ),
    );
  }
}
