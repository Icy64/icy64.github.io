'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "649f093002217122d0da5ab716599eeb",
".git/config": "c3613ac63f6f57e57f2f4e3d182fbe98",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0697ef0d28da78c0827bbfd0e2114346",
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
".git/index": "7180b3907f8d230d7d5d0a927d435f35",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2cdd5747bf67bec0e9248ff3fc280979",
".git/logs/refs/heads/main": "3733d662aabdd54626e3ef1909d0cda7",
".git/logs/refs/remotes/origin/HEAD": "f3f6966a4e0f9d32b713054ffffc0cb9",
".git/logs/refs/remotes/origin/main": "adbb9713d7bbf6523283bd76508430c6",
".git/objects/04/2be95016f1a8c82d5958d8ea252a74ee2f81f2": "138be0338d4db70d1968c204e348fe13",
".git/objects/05/bc7a20b540e0baba8d2fc18b1b8e2f1f7aee05": "953987eeb26dcbfe9deadd69bd24e627",
".git/objects/07/020f9a1eeb778e8599f8720972e6d9315047aa": "54370fa1542398e7014101dbb442a835",
".git/objects/09/8f0ad0c743be241d63b8381a6f28f99a03fbb3": "a3c82d39087af747d56435d036218f81",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0c/2ae1a8dfcb0f89555466243500d7b0316fa9e8": "006e1893d7a56c50de63ad1c49a219f2",
".git/objects/0c/bfc8b27662a03bdf5f430bf2bce3f0a215928f": "023fea742f88acc243ef8fb6d92c42f3",
".git/objects/0e/22ebad901c843d39795e649f5d59ffa31aae75": "cf4109c4d3ab966c37ff5c5a450db4f8",
".git/objects/15/7815d558d8ea2c3ef1f197351d45b5ca32d8b8": "10392786d2cec90784e88ae8335df4ba",
".git/objects/16/421989864e3b0b231df9e8a959a56b39ff04be": "bc580272a1b48b9904a9447cd76de786",
".git/objects/17/2064843cafc6628ab97a8c434e602bc5ebf59d": "5fd194aa2dda516148f884850323b81d",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1e/76a0054d085eb6bcba05f9d9fafaf294a88708": "13321c12e2a99fe7a4ea342932b4e459",
".git/objects/26/5edd0dd28383325656348d21c8e9902870a320": "5d5e6d896aae397d8a0078d154ebea3e",
".git/objects/26/7d50eef16072a8aaa4f371f30991d9fd3cca5a": "44e41e238996cac552368cf007c797ed",
".git/objects/29/5e6fd3aecf84adccd168752c741de341f2cd6a": "a8a879d1a4bc163cdfadb36716d7e253",
".git/objects/31/3f09d9354e7722e82e3cfd89ce2e7d63855d8a": "60ba35c71dc121d072c31195cc121723",
".git/objects/34/2545d5654e0ba9e8ab1809268ce7c7db4d5594": "b0ec12106d1964755863b8ffe87b2bcd",
".git/objects/3c/40d4e8483785e0fab8fc588296a492c2f9f200": "9b69456b8ae6ae6603c97c4ba1671711",
".git/objects/41/af5fd587b3cde1cd16776675b60a99b70549c1": "3c31f65c1309a05d2ef3f674aee6b5a7",
".git/objects/43/8277994c32bfd3522cce389874203133e904cd": "ae5a68b554170675cde38214fa0847c3",
".git/objects/43/bd0af68e6b56e476271301ce4976a556902342": "834e9d522b5ea4de7f6d4a4a2858208e",
".git/objects/45/b49e5427125dda868186e724e6375bdbd68de0": "6a3e884e3195e75ab473007a86b9bc68",
".git/objects/47/d4a24f2b5ce460efd2d8e99e2f59ef2475e54f": "748928eb10691a4ae20890bc9e2f6616",
".git/objects/48/ed58ccc08314f5998c2a6545b29a355befa355": "4d439f50899a53c6f4452394e29b2b9c",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/75d5ee979d971f8e5322f21c84fe07b710446b": "a4599d7877a9ea1e439d5a0b52bcdf36",
".git/objects/56/1166ae4041b7b4dcf648f5d8fa6a5a20b41fae": "2185020237b989bece92fe7264391db2",
".git/objects/56/ef9a9b22008957746f4e2aa668db015dc1d2bc": "6a90fab0296571adc50d61f6f1f430de",
".git/objects/59/405d93479845a07a091d0b5475276b2e9dd810": "e7ae7eeaafcc281b5984f05720500829",
".git/objects/5e/7ac7ed625cca76b439aaecd2c7bc8d57a936aa": "158b83676969b445193a2d5b8e000786",
".git/objects/5f/eee24e333dfa29d906400ea594a2c2a4f6067b": "3ae2c5a04093f8c55f0ae486fbf60938",
".git/objects/63/68f657d7c201894a54a19fc04dd4983de9b980": "aac213784e76c6fd9586e683aecbb42e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/d70c24724c68653e91f6058d9c31349cbabc22": "995e601a8570cadb3cafa36f918fcb50",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/79/45cf922fec586f55d04eccbf060c4c4335aa6d": "7880ce10f72470988e2acd9ba4bcf4a3",
".git/objects/7f/5b3111b824e20cd932aba35091a3dc6f8a8090": "3003df514dc0d025b8221d98f3d144b6",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2bc0246b1fb1278144ca35e3736de0f18719fb": "94e19514c6550e511f1e9d9d928c5dca",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/9061eb09354a4987e76ac8e962b1817f671dd8": "020ce1e305347b28e60df275939fd6cf",
".git/objects/96/910e66a63fcebd6434eb9fd62022d66ed8bea1": "2c15e71ae877ea09a6ef73b288d6c047",
".git/objects/96/c0d4396f9ddaee8fe7281cd09b2492b621bbee": "6cf20ffc497a99d01a5e62334832c8e8",
".git/objects/97/f6d92415a8d1f2b088eda6c30bd04b3b55fade": "a3542ed79b2f0d576efd3734c559b109",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/ee207da51641167e324e88952a0a0909ab0c82": "2cc98935aede3b0d852795ca6ca68cad",
".git/objects/9d/3b3b6d937186697384114e32313c9cad34d5ca": "ba265a057c13ddd9df778f8b4c6e4b87",
".git/objects/9d/fb183b358c498ceae17964341899552565b81f": "5f8a801968b847e83dd25745c103df9e",
".git/objects/a5/3ae4d17ee1727853d24bb8bb213cb08f051ea7": "fabee0e428a3aa25ba1a14c16f4d7099",
".git/objects/a5/72b82d82bb099c669695eeead322c551c08260": "1553e7874478e4e311f06c8798491222",
".git/objects/a5/d74f47742dff2a21ab936947404d9fce91d33e": "05d639038ca348c4e1c6b3b4c5fe8b9f",
".git/objects/a6/3a28f1b8755c69c0045890eb816e194c7de9f7": "5ede89ac5d551bd912775f9d2efaf0f4",
".git/objects/a9/cb93ed6ec23a4a7690b5d46500d34b6c31884e": "ec3c7a62d4520e309ac24042a9eda764",
".git/objects/ab/f50d4b0c872c9c6acc8b3d7427ce18732aa39e": "bb636fa296c9c3499b6abe9e7500a833",
".git/objects/ae/76e8b450a45deabfdb23e67fcdc97351934330": "3e1d54e30e884d7b86494845df5c1d43",
".git/objects/ae/a873237987c0d6f2983deebf7a9bee2a2f15d5": "bf87613715f18d93ef6b8159047520f8",
".git/objects/b1/65ae4aba14c28ad289aaac59de104fad0a1669": "7997282e1dfb632116ef2c5b1da04a9b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/57b61fbc31eec06c0d91b3859ee3e569c650f2": "224ac61325f22cbe78797454c1d0b586",
".git/objects/b8/0fa406b04b12ac5edeca51939c0537bc0dda08": "48bd1bdb695d32c0c4f51029a919855d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/a335fb388b960c7da554141d8808fe3d4752ee": "6deab337ba83e286f15e9a8c6d4b732a",
".git/objects/bc/6bdd6ae5f2730626755c8708a10200c36df8ea": "52d24edeae3f0e338bbeff1d3976b8f9",
".git/objects/bc/e1fb8d5f570ac589b6a3098d2ab452fbd5804d": "031e3a4017c6af1e2baf1e160cfb5b91",
".git/objects/c6/0eddb9b4144b260e3d6435e5eaba76609c8c34": "8a03aa472fcc165fcb2b82ed74526db8",
".git/objects/c7/15c722422748e34e5bd38f0b3d61117ee54c7a": "c5b9dd51450dfe4b5975b375874b5823",
".git/objects/c7/296ef2c35de4468b475508534588e73b366db3": "60e1497f37f91de2b60a0e7b53e73407",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/5c5f5187e69362bc76db1afa5169487ed8b500": "f86107c8059d405015af3f337c7e9ad9",
".git/objects/c9/ac965e7c78aec07abf43333ba7cdb82c00f364": "7ad0d49b2f48941fa6c9d4417e4fa12e",
".git/objects/d1/e7275a91343fa78031805c55748b9d07bc7262": "c00b5705932592e939d03bf1bd4422f0",
".git/objects/d3/e128cb5dc956e7a30ecf78529ddb89d863219c": "e896786bd35d8f6ec8fa5aee7683d0a4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/423c1ec44f8a7edb095b8e050a15aa82356080": "9d95695057eea035442816514a983ec6",
".git/objects/d8/7c8c32bceb6f33c6b0c6104f91b69c2cec39d6": "30c07a393c2c35f748d1c8f11bd71f3f",
".git/objects/d8/7da60ce576ba97c30839e6cf6db15a59e633c8": "bab4c768b7455b7bedc62431b1232400",
".git/objects/da/2c73eff5b10032c67616a0d801d35a36f58206": "2d7bd4edb5409db577e680e9f0ea3b5e",
".git/objects/db/91b2f852a8f45009a888a8a724569780528ccd": "b10376654c685adce778f050bdf0f04e",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/0723925ae8fc713eea2a8decaf49d3f2e87769": "7ae6b6373832e3acf137e41aa8de8c06",
".git/objects/e0/29ec951cf34865e17010053ed182a19871164a": "9c6cf1354e94a68e3cee9a7c1fdcdbca",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/8ee3333b04cff39cbe0f7cd2c377d2f589d56b": "2a16b42cac96f48a9d6478391d9b073e",
".git/objects/e4/51f981b346ca61ad660c953ef9d3682ddd4862": "ea3c4117c029358713de4d45bf32b48b",
".git/objects/e5/175b208f0a887255380287a537bbce2caa3e56": "805b261f742d07266905b6c7425d220d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/e1ee8802847d15aa2ab57219221a4b0c24601f": "ada6fb02519bb24943d1e4d2fc581ecd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/8e6596e839e7b15a431bbcc7c5c45cffde0537": "4253a4be473c54c808cc01162ea6c21d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fc/ccdbb733a020b94fdccd88728de9174be204dc": "436bca8415740e7e0a5257118c7515dd",
".git/objects/fc/e39a8a8914707b3f1cc7e96f0158a53360f2b6": "9e4d70af346f5ce0a1ea3bcc50831679",
".git/refs/heads/main": "fbd5347c1dd160c25277c4897f361a9b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "fbd5347c1dd160c25277c4897f361a9b",
"assets/AssetManifest.bin": "86e0b01877fd40669e977abe8584f446",
"assets/AssetManifest.bin.json": "82fa935def55867d865d138f4a1c737b",
"assets/AssetManifest.json": "4769bb3bacbd7faa622512f8fb0e1d2f",
"assets/FontManifest.json": "0145b61feb58de804b2be096bec1a76c",
"assets/fonts/MaterialIcons-Regular.otf": "39f8a9e630c3337c32aad2be4445598a",
"assets/lib/assets/images/logo_icon.ico": "287eb68a4c06b7f79bfd4774144f484f",
"assets/lib/assets/images/logo_icon.png": "027f67e9e86b380450687c3f05568bd0",
"assets/NOTICES": "c61573a8863f1193f4f1b6b0af9d9fc2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/lucide_flutter/assets/lucide.ttf": "604b155d8edfcdfaf9e2f576ce6c5035",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shorebird.yaml": "3f8becd7437d44a29aa14d82c4b68933",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "0167e9e20172af1e4499c49e3c72de07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "99e91961aa35bc994f23a99de9e7bccf",
"/": "99e91961aa35bc994f23a99de9e7bccf",
"main.dart.js": "8419c9e1f6c3c03d19456d56b8a40f6d",
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
