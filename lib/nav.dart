import 'package:causeascene/fullscreen_image_page.dart';
import 'package:causeascene/home_page.dart';
import 'package:causeascene/sold/sold_page.dart';
import 'package:causeascene/ui/snackbar_helper.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

/// Navigation helper.
class Nav {
  static void navigateToSold(BuildContext context) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => SoldPage()),
    );
  }

  static void navigateToHome(BuildContext context) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const HomePage()),
    );
  }

  static void navigateToImage(BuildContext context, String image) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => FullscreenImagePage(image)),
    );
  }

  /// Android bias lol
  static void finish(BuildContext context) {
    Navigator.of(context).pop();
  }

  static Future<void> openUrl(BuildContext context, String? url) async {
    if (url != null) {
      Uri uri = Uri.parse(url);
      if (!await launchUrl(uri)) {
        SnackBarHelper.show(context, 'Could not launch $url');
      }
    }
  }
}
