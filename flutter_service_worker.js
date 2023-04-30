'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "08b9e04ddb4dead1c6bf86ba0fb9ec9d",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/sold/PXL_20230124_011217419.jpg": "776a0088fc1ae8301b31ea018b6cebe1",
"assets/assets/images/sold/PXL_20230119_030650179.jpg": "82f80bfe539e7ad1739af6d6ed625924",
"assets/assets/images/sold/PXL_20230429_032529633.jpg": "75ccf8d37471dc1badc400c1b6bc56c4",
"assets/assets/images/sold/PXL_20230429_031038346.jpg": "013d35b542f28fb6755b328381f98480",
"assets/assets/images/sold/PXL_20230419_192656539.jpg": "f553fe8266c9e488cd4aa709d59682ca",
"assets/assets/images/sold/PXL_20230427_021015715.jpg": "fd13212ea68a7171fcc5c8355d3189b2",
"assets/assets/images/sold/PXL_20230124_011245806.jpg": "622ce6bee65a18b433bb1c967f67b743",
"assets/assets/images/sold/PXL_20230119_030537494.jpg": "377a25d7ac32e46a94a9d056dd039346",
"assets/assets/images/sold/PXL_20230124_011133067.jpg": "6ebbaa5adf6257201bb2bac3e75e4734",
"assets/assets/images/sold/PXL_20230429_032805239.jpg": "aa678a5014950f14160ac2ceb846425e",
"assets/assets/images/sold/PXL_20230119_030531928.jpg": "69c37b4a2fd25c66ce3ec501d31e7550",
"assets/assets/images/sold/PXL_20230429_031843419.jpg": "0b7deb14988b2274345e3967f8b380f5",
"assets/assets/images/sold/PXL_20230124_011210832.jpg": "87a14ff00fef82396e24ee4657f22216",
"assets/assets/images/sold/PXL_20230423_183005650.jpg": "61873bc238fae9063dada11977bf2670",
"assets/assets/images/sold/PXL_20230112_010542202.jpg": "d136a762337c480374b809982e34b828",
"assets/assets/images/sold/PXL_20230119_030637596.jpg": "64f022915a924d3ca36ccc0c1617c034",
"assets/assets/images/sold/PXL_20230210_214127609.jpg": "b4f205a623fdcbddf4e17c5227040d5d",
"assets/assets/images/sold/PXL_20230112_025233656.jpg": "1e8c926af2a791f24ab79b1ea1756ab9",
"assets/assets/images/sold/PXL_20230423_183029349.jpg": "00d5ef1c1786466a4e2f1f3ae1efdb98",
"assets/assets/images/sold/PXL_20230429_034138101.jpg": "68eb6b82e1bba89194a53c51df8a4b8a",
"assets/assets/images/sold/PXL_20230429_024235088.jpg": "889461db2c36bff9710bb1b9e65ff511",
"assets/assets/images/sold/PXL_20230429_024314715.jpg": "e2c51ce7fbb841d5a6e2f3be6bf0188d",
"assets/assets/images/sold/PXL_20230423_183038629.jpg": "0ac7b0e7343cdf00f60823031a279dc5",
"assets/assets/images/sold/PXL_20230429_024045564.jpg": "b511c324f96ae5b16cad2405c3a2b771",
"assets/assets/images/sold/PXL_20230423_183018480.jpg": "7e027a728bf0f980f2f309c6b884bced",
"assets/assets/images/sold/PXL_20230429_024326533.jpg": "5f52d90ac0c6c5a7ffbf3289b66fb622",
"assets/assets/images/sold/PXL_20230429_031150628.jpg": "0b24174123b47297341df70a13676b08",
"assets/assets/images/sold/PXL_20230124_011222591.jpg": "eefa5cc1e195b1e0f86bd9e92c910bcf",
"assets/assets/images/sold/PXL_20230119_030527182.jpg": "3b8754fc2c5cde5744682a5f3b4cdd03",
"assets/assets/images/sold/PXL_20230112_024925803.jpg": "60e7f5e312b825360f1c7315c97c3358",
"assets/assets/images/sold/PXL_20230429_032254479.jpg": "124492a3cf9e808c2cb2ce8475d8991e",
"assets/assets/images/sold/PXL_20230423_182714254.jpg": "568655a672db9a832fae72749943d522",
"assets/assets/images/sold/PXL_20230419_192704235.jpg": "43a14f5842737aecabbd1890698ab298",
"assets/assets/images/sold/PXL_20230423_183048190.jpg": "3435dc0e23ad760261d7c80304825de9",
"assets/assets/images/sold/PXL_20230119_030623540.jpg": "6e30fbefaa7e257dfb5f55c8f70f158c",
"assets/assets/images/sold/PXL_20230210_214056823.jpg": "04ea38438f662fc30f37b10e04e03669",
"assets/assets/images/sold/PXL_20230429_031236291.jpg": "1ceb62a2bf8db7cd863c506e90b3b955",
"assets/assets/images/sold/PXL_20230210_214107653.jpg": "7578296936bd28177c51a604897ecf14",
"assets/assets/images/sold/PXL_20230426_191041538.jpg": "94260a5d55d4fe74f7d91ac2bc9f403f",
"assets/assets/images/sold/PXL_20230429_030939282.jpg": "1ec93d10ff1ae018cba642233d12adfe",
"assets/assets/images/sold/PXL_20230429_032919015.jpg": "d1ee80ad906e50879c651894f1fc0245",
"assets/assets/images/sold/PXL_20230429_031735159.jpg": "e30c61c0a1000e07598f8578b841cd3f",
"assets/assets/images/sold/PXL_20230429_024332728.jpg": "a1d8c1135df4ba9fe8012b7cafe142d4",
"assets/assets/images/sold/PXL_20230124_011147904.jpg": "21c8c88cef40d24f42ce3cc8d2403687",
"assets/assets/images/sold/PXL_20230210_214236821.jpg": "175726f8ec9498b2150971fafe4fe7af",
"assets/assets/images/sold/PXL_20230210_214047260.jpg": "20cdf85ee85ac7062c38b917bdc1c1d8",
"assets/assets/images/sold/PXL_20230112_011124594.jpg": "950c5f2a84a24e71e5b78316fc9e1d44",
"assets/assets/images/sold/PXL_20230429_030855991.jpg": "0d902e8d6fd4dda1df4972037aa11362",
"assets/assets/images/sold/PXL_20230423_182913838.jpg": "846b49141c97461bcbbb56aae4b941a6",
"assets/assets/images/sold/PXL_20230210_214039915.jpg": "f2bf3f39582d97da12d0d60ab5c40896",
"assets/assets/images/sold/PXL_20230119_030457989.jpg": "fc5e4c699b8bad8900349a2142ab0618",
"assets/assets/images/sold/PXL_20230119_030557940.jpg": "5c7cf6f00c96ffa243e35c1318d65ced",
"assets/assets/images/sold/PXL_20230210_214028823.jpg": "16598515364fbe5bc766918ef6d3658f",
"assets/assets/images/sold/PXL_20230429_033649911.jpg": "e93abd2a177256b034c78b5e3ed550c5",
"assets/assets/images/sold/PXL_20230429_032506177.jpg": "537bf0a61d586f031337db76db76aa7a",
"assets/assets/images/sold/PXL_20230423_182533105.jpg": "4d12f80a99a0d383828eded7e18e2a4e",
"assets/assets/images/sold/PXL_20230423_182929916.jpg": "1d3304d057b2d3ef52b69a78f218c615",
"assets/assets/images/sold/PXL_20230210_214017240.jpg": "113eaf577bb3a03454c967a8a020659f",
"assets/assets/images/sold/PXL_20230423_183056214.jpg": "5f3f9ef7b1e0556ac7be8904a7d5ea07",
"assets/assets/images/sold/PXL_20230320_205138555.jpg": "c288b5c7381539d699ce29a3b910b5b0",
"assets/assets/images/sold/PXL_20230124_011228532.jpg": "0bb80a95fe4525e90ffce440577cc2fb",
"assets/assets/images/sold/PXL_20230210_214005629.jpg": "1f42c374fc354b114f2dda464d62881f",
"assets/assets/images/sold/PXL_20230210_213947072.jpg": "71b9ce67bce9c5df6d1f98cef6016be3",
"assets/assets/images/sold/PXL_20230124_011239462.jpg": "a96db10188eb189c959f309560dd38ab",
"assets/assets/images/sold/PXL_20230210_214251755.jpg": "5b54e431f3cd008f3798d343e99ae9f9",
"assets/assets/images/sold/PXL_20221007_054206476.jpg": "b52787b753202cf427e331570e8639a3",
"assets/assets/images/sold/PXL_20230210_214117644.jpg": "93f5de9730e11330f56b5ebe1c90cd97",
"assets/assets/images/sold/PXL_20230423_182716851.jpg": "5f853c5cb5cfdb195e19ff931ce7d4d2",
"assets/assets/images/sold/PXL_20230425_203300021.jpg": "371cb2240162ab6dc335519200d92d6c",
"assets/assets/images/sold/PXL_20230112_024846221.jpg": "299ef6ebbf2080818b5c00d91d4377c1",
"assets/assets/images/sold/PXL_20230210_214228102.jpg": "23e4fb4055c36d94b2d7928bfb380060",
"assets/assets/images/sold/PXL_20221006_222917043.jpg": "4b03f8b0861b2199ab9856beaa54c9b1",
"assets/assets/images/sold/PXL_20230429_030341896.jpg": "34948041584f67433df72bfd1fd7ce1e",
"assets/assets/images/sold/PXL_20230210_214155501.jpg": "34c17164d1b33b5271fd74140cf39028",
"assets/assets/images/sold/PXL_20230419_192648006.jpg": "3c34fc72d1b5edc8aa77145fdba2aab2",
"assets/assets/images/sold/PXL_20230423_182942023.jpg": "de4c2892c1695b63417c639c24f72f50",
"assets/assets/images/sold/PXL_20230423_183112652.jpg": "d622e5117cce5556931001da46f97259",
"assets/assets/images/sold/PXL_20221007_041539223.jpg": "bd811b04babe60a6183e916641a6a0dc",
"assets/assets/images/sold/PXL_20230124_011203252.jpg": "2c8286984902ca9ee58c988993f24152",
"assets/assets/images/sold/PXL_20230429_030434950.jpg": "02c515e472e30334d6c808a4f65ce557",
"assets/assets/images/sold/PXL_20230119_030615511.jpg": "d53c92f1ba9d72c2e80ca5f0ae79caed",
"assets/assets/images/sold/PXL_20230429_030738074.jpg": "09484009b423ed3950d753c10e442f94",
"assets/assets/images/sold/PXL_20230429_030631252.jpg": "fb38b2e3d81af7688ce1e0efc19eca82",
"assets/assets/images/sold/PXL_20230429_030533755.jpg": "bee489cd75d70e187ef4b51a0062a9b0",
"assets/assets/images/sold/PXL_20221006_222838342.jpg": "be9f95fcf01785680588c4c676fd0944",
"assets/assets/images/sold/PXL_20230429_034316198.jpg": "7663ffd906c562c10140cbb96ef98cc0",
"assets/assets/images/sold/PXL_20230119_030510527.jpg": "b1988c17ebf76a13c13bd0f9fa03e401",
"assets/assets/images/sold/PXL_20230210_214306661.jpg": "01bd861cd1f67429dce3343e2496907c",
"assets/assets/images/sold/PXL_20230124_011140471.jpg": "782798140c1171f058af91275f5e0936",
"assets/assets/images/sold/PXL_20230329_205157914.jpg": "68582473e68eed844e8336a9df11ee51",
"assets/assets/images/sold/PXL_20230124_011234579.jpg": "874e86ede054511838115ae5a1ee903d",
"assets/assets/images/sold/PXL_20230124_011156481.jpg": "bacccb12577d7b8078f6c4604cc2ccd1",
"assets/assets/images/sold/PXL_20230423_182536156.jpg": "4807203a0aa9306cd56611855f3fb2c5",
"assets/assets/images/sold/PXL_20230429_034515442.jpg": "e98bac3c6e48c373992c82a2b3653c09",
"assets/assets/images/sold/PXL_20230119_030517168.jpg": "d805700d6d1c6f94d82a94b226a05ad8",
"assets/assets/images/sold/PXL_20230429_031951922.jpg": "f2b4fbec48984bb6c3f541910ef6fec3",
"assets/assets/images/sold/PXL_20230429_031413264.jpg": "b576be18884d88e06172a793d330e506",
"assets/assets/images/sold/PXL_20230429_034254845.jpg": "973961cb6330dc09432bb98a9e2a2449",
"assets/assets/images/sold/PXL_20230429_033834988.jpg": "dba885182a27b558ad28facbc46b1a32",
"assets/assets/images/sold/PXL_20221006_222956169.jpg": "5f1025a90086e033147558bc09f764bc",
"assets/assets/images/sold/PXL_20230423_182701977.jpg": "6e8b95f6612a192a046dfa6d7eeb851f",
"assets/assets/images/sold/PXL_20230423_182539161.jpg": "40688e3c491e803cb4ecd3108e2c8f63",
"assets/assets/images/sold/PXL_20230423_182921401.jpg": "baee4c0be1ccb30074f6f70c162e6edb",
"assets/assets/images/sold/PXL_20230119_030546495.jpg": "06618f04a2f37566a8466ab1c3a858b1",
"assets/assets/images/sold/PXL_20230210_213958187.jpg": "c9fcdff2e1af401ebb65bb3288841731",
"assets/assets/images/sold/PXL_20230423_182829779.jpg": "3320b51fe7f047730981131ce91a9b07",
"assets/assets/images/logo.png": "fa0973db514c06cdafa416ec712fdcad",
"assets/assets/images/bg.jpg": "ba1211bf54d5d12267851a795223cf75",
"assets/assets/images/logo-512.png": "c95538fcf5ea8aa76cbc1c7dd93a98c6",
"assets/NOTICES": "5eff33c1628e479435df054acb3067a0",
"assets/AssetManifest.json": "601179bfdc8bf2886650bfeeaf22e7cc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"main.dart.js": "6131888808eb310e7481eb9d84af0ba5",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"manifest.json": "78f399106f8df1fbba5d87b242aad8bb",
"index.html": "83f54946292de1815ec4db7f8c7240f6",
"/": "83f54946292de1815ec4db7f8c7240f6",
"favicon.png": "9060bba986608ea10bfa9d230d530c2d",
"icons/Icon-192.png": "0e25b626c09447895cf473508aab9c8a",
"icons/Icon-512.png": "c95538fcf5ea8aa76cbc1c7dd93a98c6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
