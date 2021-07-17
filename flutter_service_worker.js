'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "67839e1bba5029447aa47d2e4b280b37",
".git/config": "7829c5ddd1c28faf98663268fd9efe4b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "50f06cb069ec172d03c5072dd7fc1f06",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8a19e89b760566fb7384c36251a07a3c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "98138021d16e7a88ca59a2ef891c22f8",
".git/logs/refs/heads/main": "98138021d16e7a88ca59a2ef891c22f8",
".git/logs/refs/remotes/origin/HEAD": "64a8c3aff50c55d5f4b5f1570f4dd21f",
".git/logs/refs/remotes/origin/main": "6c44958de07d8357d2cf211a722bf1e3",
".git/objects/21/f03380f01d4857cfcd5da8cd8f5ea395f8a6f2": "fe1111641034bcfe6542763cd0e9bb32",
".git/objects/38/aa6a16d6fa8eb4a2d9911bb705c2d885119416": "a44e27df238defadb15533acc0608cc2",
".git/objects/3c/80f5db6d2b1740386d4ed6015ce99b99f952e8": "399d323688c1f091fc8953ead01721d2",
".git/objects/3d/ea80247787fe926f96fc9dc69690340965723b": "a0011a576e241560fa5105d835ea929a",
".git/objects/43/52f770a3e62e5469a6cf6f9a6fab99b4015c4e": "a66cfa7622379acfbc7afab1f28b7ee1",
".git/objects/43/97d9af15d67b874931ba189520c34738aee9e4": "d53241e57fe044f1d0b6d0a4d200c38c",
".git/objects/4a/f5f4198c9be9168ceefc0de31263eaea9f0134": "84e7fc276fd7d5d225886d7b395ee869",
".git/objects/73/c5cf9d245851b62407f876aabf084f7a7acc2f": "1dfe5b84fc2e655f75de5646583f3c43",
".git/objects/7e/76c55507865009f74eba5c69264a432dcc4443": "625bd3e37c98001144f767b80804573e",
".git/objects/8f/9af3c24d8c87ec2ef13be062bb3f63a0351e15": "7b4a07c3a4372cc1535cd0c763b3ef36",
".git/objects/9f/d556f7eeb5d3e6fd8c8049f8155130005475e9": "af66e7146f18f964b08dcf98fea64376",
".git/objects/a3/734f77a997c00a8162e3cbae7f2643d0ea11cd": "b75144af389cabee00e660ebb1df9b58",
".git/objects/f0/24d203552845bf05e838c46e0145227a439c8d": "5d828d5f3d5f41e6cbfb77cc86c3d722",
".git/objects/fb/1139abcf26562a07c551cca68dd17adac9b281": "9e3c1ac6b7adbd935122e47bf0a1c676",
".git/objects/pack/pack-25fd33205cd26e08cf212d692a54a8163696bde6.idx": "814c2057b62c31bbd0ff10a060fc5294",
".git/objects/pack/pack-25fd33205cd26e08cf212d692a54a8163696bde6.pack": "7f094564384018b0aef9b2456fd98af5",
".git/packed-refs": "581722ea5d4fc65efc19a4e420f0275e",
".git/refs/heads/main": "92af5709af0dbeb846f7c1f6322e858d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "92af5709af0dbeb846f7c1f6322e858d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "42d4b70ece55cd5cb9ba88590ad0c2ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e15c9c67c4a5e20ddf6f4bfaae755041",
"/": "e15c9c67c4a5e20ddf6f4bfaae755041",
"main.dart.js": "3d4638f0477f2cfaa0a6a00baeaed5ff",
"manifest.json": "c5a24ed70d7c8bae1d1388f860d90172",
"version.json": "092add4da853005d25102f8cc60d12a8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
