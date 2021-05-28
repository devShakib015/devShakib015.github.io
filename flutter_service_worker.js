'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "35f41a7a5b10109385d8fbc14cc3de43",
".git/config": "60f50c6f462f94f5c95842734efc9dfe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3612c785bc1cdc3eca9f28bc0f2e8ad3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fd0fb706b098f49b4e66ef3e01e8db0e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a558cdfddc55d5640a5ff7291446e6ec",
".git/logs/refs/heads/master": "a558cdfddc55d5640a5ff7291446e6ec",
".git/logs/refs/remotes/origin/master": "05653508c102e47923358d499f1d6f2c",
".git/objects/00/7b29f642f8d639b180dc3204968f98b6c6bfb0": "352290d76fa23a1f58677c0a80398aa4",
".git/objects/00/d7110853350d1128619aaeb79c15a3b9e70706": "b409006ffa07ef9a5cbd7cbd34689c04",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/01330c6b2dbf59e8fb63be4f4b9acce9b23ab0": "9994722237ce10bf65237fc974e12cee",
".git/objects/0d/9b6bbf3817093563fb5df10c09a61900a23a6b": "fc4be926697ba789a040d10133374ed9",
".git/objects/0f/53848a38274c93a468358795e8f74527b39609": "99d5517774ccc8b9354a413d770967b2",
".git/objects/13/5c6002e295f149464faf8d871289b5851e7055": "4b5b1eab14612c7decf601567405a63e",
".git/objects/15/1c8f5e8e1f52755347ff16474aa583e7b0d3e6": "7ca6c5ad6899ff39196bdc93b52ca80b",
".git/objects/15/9dcdba9c31c8850c89908d3f21cf96bf66534e": "1443c994a99cb250bb6d7057d3b469d4",
".git/objects/15/f4a4678d9afc1bf88aaee90c7fba3b09b3a554": "67555cb57fa41d9359a7d4490f77710c",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/6233e082fcb5c6828269b874df95bf1be26f3b": "05711594d15d60f9892f2a8b8b4e5121",
".git/objects/23/5d236936ceed0bc6dbecaa6f9a2267d5d76740": "b7922ea33817c2bbcd9a70bd364f1dd4",
".git/objects/29/56b602f2f0de9a6bb92130cec1b81d384478ea": "30f9b0945edc633d328060127cd5bc73",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/4d7318f69b54ec11149d5fa95d02a95f4e968b": "0df57dcac8b2ae19d40ea7ff3b7ea1cd",
".git/objects/37/a34fb4d20e17fa9d8fb037c6f103006054d0ef": "cd017308e4b23819d765b1a0c1026943",
".git/objects/3b/b30e0ce871d7d67e956d13991ca1c4833f992e": "d969af65061dd7c95c265a6fa8956ac8",
".git/objects/3e/fae2ee54edc0ac91c289735fb5df3666218973": "48e769262194f038bba7f163e4faec22",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/5f/c6c46a4bfa4984cefec52c4df161bd442e0b79": "c5a5b522e4a1242bc8389b3763f75b6d",
".git/objects/61/923a0b586e752a8436d44db1927d77de3ece17": "fbd9b3f566b31e5f031333c891defb4e",
".git/objects/66/5016c53c9b850f132f79574d953bcb47ecf4ec": "dbc802065ff7154be1276898f0ec74d1",
".git/objects/67/13758fb6977b572a200cb4ee9b9bd376867156": "87f3c3420ce19267a21c69a4c67d6788",
".git/objects/70/9b96a86ad3403c889f7c1b12ceff4f325b89cb": "d4dbcabd6d1f29b5fabbf0dd33211ad0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/99/54298959c3ddcbcb1c87f108c425cd2a302827": "d84834a8337afbdece75f39c8149ecef",
".git/objects/9f/ec24357858cf5d3abdca4df796056aceac3ef4": "51aef90ec130f29b0ee1ba9e00344f57",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/2dc0a12e3b421d4a28ed77499f100926470eba": "0bcbf28db66b5e6ecbecb5efd4fcd702",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/77464fb1615b39404918fabb9e6e5b4f4bb8cf": "fb1f4055b29401dc860fb6e55d1d47b0",
".git/objects/b5/baa4eeacddba8aa937f5730c0ac036dec63dd0": "44b8c2eac408d36103b2ca0b54f48d32",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/5da99fc64a0d2870207ead515f7d6454836338": "11dca0151bebdc4abb86b73307dc3243",
".git/objects/bb/adcf37847bc68a5a1535d7feedfdc46516c857": "7ff92bbb68a6109dee3272f4f32e4f22",
".git/objects/be/6e441638ba7db5e47de610b8c53064dd772fd4": "21a235e63ed1a6633828e69e7b32483c",
".git/objects/c7/f9711dd09ae247a8d8118296e1f3621851e5d9": "6334235ce3b23f25bbed3032c73e12bd",
".git/objects/d9/ee23ad74a7eb9a21271ea7bb7d9c45e464a34e": "5fec43bdf46402bfcbfa8d10196e76f6",
".git/objects/df/43f6228ab460d1e955308e022723147ac27368": "ec69c3e05903393021ada8b2e20b5c1d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/0c66991f1a6445e1d135113a9de3b441250477": "d7ffd44d2feb5c3d740ec1efb8953320",
".git/objects/f0/806deab01d8f47bbd9e72e39c273ccc3b11922": "00ed8e62a72d2cc935cf9b284fca6098",
".git/ORIG_HEAD": "b8e2fd952744e641e085b83c62de37d2",
".git/refs/heads/master": "95656d36eea7e41ff4d8bfd0fb05c235",
".git/refs/remotes/origin/master": "95656d36eea7e41ff4d8bfd0fb05c235",
"assets/AssetManifest.json": "21a8bb122cb1a0b3d530af404beab2f2",
"assets/assets/images/splash.png": "2b0bd25bf662732d791f6927ca18ace7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2e5e102ae4478750d2c6e1c8f0da9e99",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "eea30947cb5f15c27127d77a64f9c5b4",
"/": "eea30947cb5f15c27127d77a64f9c5b4",
"main.dart.js": "f185d01d18ecce98f03b6fd297ff8db1",
"manifest.json": "7268d731e85213fad6b35f4c3b52f2e6",
"README.md": "a7790c0fbcc01f046794a85ce32817e0",
"splash/img/dark-1x.png": "084d1b5a55c6a4bdd661d8553e160b21",
"splash/img/dark-2x.png": "4af4df755a5f06b6445a7f8f3685a4dc",
"splash/img/dark-3x.png": "82fe1dae4f7e4be142e2d75d8e43559f",
"splash/img/light-1x.png": "084d1b5a55c6a4bdd661d8553e160b21",
"splash/img/light-2x.png": "4af4df755a5f06b6445a7f8f3685a4dc",
"splash/img/light-3x.png": "82fe1dae4f7e4be142e2d75d8e43559f",
"splash/style.css": "86126e7e4072786170390b7ceee604b3",
"version.json": "aaafa928a4f8616604eca12d830fe765"
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
