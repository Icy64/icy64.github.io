'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "99a7780702cdaf56f0cef2af53a90432",
".git/config": "beeaffc121f00ec0884423b7d60bee60",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8b1467a6cd46cad70fc43723d3fab14f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1b60b33946539551b61f5ae84ec8a2a1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6a6cf42b0699daf51c5f72029d99fd73",
".git/logs/refs/heads/main": "6a6cf42b0699daf51c5f72029d99fd73",
".git/logs/refs/remotes/origin/HEAD": "871a349beb461d912753497d89a4c447",
".git/logs/refs/remotes/origin/main": "96a9c6cb95434d1bac29250c293cc1c9",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/16/237df164502073a45ca542c520b3515630d5d7": "3ea7408690ae27c1ced5d18759ddb402",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/25/63fe33e246a0cee791e90ab88075861cea01fe": "c2141f48f6482ec48ad5a716df72271a",
".git/objects/29/20ba04fbd41667f03c4bb13ef333e80047ebf0": "7f46d357bcc5fb4567e02b47695a15d4",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/30/bc3428dde59b605a95a4701fa3ff32c2989785": "94add5aaf34fa308b88476d1db2e86ec",
".git/objects/39/12af3f02ffd45bd1217a206f96ce8f04d15fa4": "5b64a4c77cbf2050adc5356e1386f371",
".git/objects/45/dc487af0cc33a831030c1408add559d55ee7ae": "fc3c9f970cf43eafdde20444448d9e45",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/57/a55fca3aed40604326b5743581a6a7d707c2b0": "eda5903fd9c794c1e82f0cef6ef2cfac",
".git/objects/58/ab9a39e10b7b6abb882dfa65474044ace33862": "7c7a27059b843002f71b9f79aa680935",
".git/objects/5f/466a4fb76ad1344b7593b97eb6d1b9bdc45a6a": "db1eb907c1bcc2dfe6462ee03e65f428",
".git/objects/61/30507baee3daa0e085b5c8ca55ca802e6f8a81": "7c97f4e4b2766765a143256362d22b8f",
".git/objects/61/e04edc4c58251ea12022f2563d8ce822e3064d": "cccd542d23e2cca16a14a789358a493c",
".git/objects/6d/93e0d519eb13fcd08ecb14c5f29d0fc84bba39": "ea976f3b503927d1244c8a6a120b2994",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/81f60b7be2645dbaf8d9346ae6538d49929326": "8c06ff348610d10cc0f8bf1b11effc5b",
".git/objects/8a/86b5fc27c7163def0d95eb83453bd1891a6250": "78564c44c3db3c65e31f9acea81f4ba1",
".git/objects/90/3dbefa525b7847b140ea0404a379a1f134df00": "ebb9bb9ba5ef00e3d035e1bb2b89f970",
".git/objects/96/c2dd9ed879ce6c5d2418318ec8a1cdd00dc717": "014cbf8fe9ccb4e23b6fddb6d5513287",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a6/1413a750754deda62b7ab8063d9f8d9e2b6cf4": "488b288499a2b2eae818e357ee39fac7",
".git/objects/b0/915929f683daf790170f29c6787cb77981f94c": "065214fa35e16b7bd71a76fa368884f2",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/da/4d5604f6376360390bfae32755c5bd05b9304f": "bf3396edee577e03e8ed3bed2b6b93a4",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e8/7d852270dc7897e08d36e314ac7ad341d2b651": "28acd1ea771d5d1b57c358118f1191a5",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/e42b5572155106a7151a97fa4379cae0c5bcc5": "f03342b5db690a48cc3d32cad698c0c7",
".git/objects/ef/8f1ac6e5b25bbc776b2ace307b26d0b4062854": "ee2f03b7c509ce17967b00380d92e4c9",
".git/objects/fd/5f75414ba0fe943069b2f643647ecf3745d1e6": "04c86290b3f167a9e16c7ecc32f34e99",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/ef02f43d0b5706c2ffb473da5ee86a19d53d53": "0c8d8e82060efca3efd0ae2b400fa0e5",
".git/objects/pack/pack-3499d28e1acea954659844ad78c9f68e0de308b2.idx": "e973e6d88deaf3c06da5adc97eda7545",
".git/objects/pack/pack-3499d28e1acea954659844ad78c9f68e0de308b2.pack": "2909c0627526217d686fded62a107fa8",
".git/objects/pack/pack-3499d28e1acea954659844ad78c9f68e0de308b2.rev": "cfeed624df56554fab52fb6092825aa5",
".git/packed-refs": "5453523a7ebbbf284a864380f837cb30",
".git/refs/heads/main": "e1df907eb7bb488a1eaffa99e15b5b55",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e1df907eb7bb488a1eaffa99e15b5b55",
"assets/AssetManifest.bin": "13518ab67aab9616dcee91b82ce4a1d2",
"assets/AssetManifest.bin.json": "54d60d65dc08e1995f5445a291da63b0",
"assets/AssetManifest.json": "b877b7ca7bd3f0b392390cfdad76f4d6",
"assets/assets/images/app_icon.png": "f56a3316b299e5733a4fa42b19c41c11",
"assets/assets/images/app_icon2.png": "f56a3316b299e5733a4fa42b19c41c11",
"assets/assets/images/logo_icon.ico": "287eb68a4c06b7f79bfd4774144f484f",
"assets/assets/images/logo_icon.png": "027f67e9e86b380450687c3f05568bd0",
"assets/FontManifest.json": "3d294bceb9939d6baa3fd4f13c3ec007",
"assets/fonts/MaterialIcons-Regular.otf": "39f8a9e630c3337c32aad2be4445598a",
"assets/NOTICES": "cd284b67cf8791efdea2d06e8ff66b80",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/lucide_flutter/assets/lucide.ttf": "8eb14bcb5e033acdcf8cde7ce3073033",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shorebird.yaml": "3f8becd7437d44a29aa14d82c4b68933",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "3e8b51854545923e2f2e7ed56f85a207",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "98a73220bce46bacf180c764ab52b0c0",
"icons/Icon-192.png": "f56a3316b299e5733a4fa42b19c41c11",
"icons/Icon-512.png": "f56a3316b299e5733a4fa42b19c41c11",
"icons/Icon-maskable-192.png": "f56a3316b299e5733a4fa42b19c41c11",
"icons/Icon-maskable-512.png": "f56a3316b299e5733a4fa42b19c41c11",
"index.html": "99e91961aa35bc994f23a99de9e7bccf",
"/": "99e91961aa35bc994f23a99de9e7bccf",
"main.dart.js": "0a37168414d54419a5ee865835818cf4",
"manifest.json": "92a2c5d572163f40c013a700158ebb36",
"version.json": "e35f44128e7ce37b31d367b6257b2798"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
