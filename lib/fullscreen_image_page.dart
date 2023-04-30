import 'package:causeascene/nav.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class FullscreenImagePage extends StatefulWidget {
  final String image;

  const FullscreenImagePage(this.image, {Key? key}) : super(key: key);

  @override
  State<FullscreenImagePage> createState() => _FullscreenImagePageState();
}

class _FullscreenImagePageState extends State<FullscreenImagePage> {
  @override
  void initState() {
    super.initState();
    RawKeyboard.instance.addListener(_handleKeyDown);
  }

  @override
  void dispose() {
    RawKeyboard.instance.removeListener(_handleKeyDown);
    super.dispose();
  }

  void _handleKeyDown(RawKeyEvent value) {
    if (value is RawKeyDownEvent) {
      final k = value.logicalKey;
      if (k == LogicalKeyboardKey.escape) {
        Nav.finish(context);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    String image = widget.image;
    return Scaffold(
        appBar: AppBar(
          leading: const CloseButton(),
        ),
        body: Image.asset(
          image,
          width: double.infinity,
          height: double.infinity,
        ));
  }
}