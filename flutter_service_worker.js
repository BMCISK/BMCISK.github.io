'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "80bc5cb5f7d8e0482834ecf8c1d735f9",
".git/config": "7829c5ddd1c28faf98663268fd9efe4b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c869be088ef029c5b136c482f58ed2ed",
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
".git/index": "7326c61c85382d261df51fa587860ed6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0f682c521894187b9c037313c8b8b578",
".git/logs/refs/heads/main": "0f682c521894187b9c037313c8b8b578",
".git/logs/refs/remotes/origin/HEAD": "64a8c3aff50c55d5f4b5f1570f4dd21f",
".git/logs/refs/remotes/origin/main": "5b732e07d1fe8f62fd2307712ab4a072",
".git/objects/00/f32593941b8d1f6348e6bb7842207606a425fc": "aa05895c72cc617bea1f43257403c86f",
".git/objects/07/e5785a2ebc7bac4329b5041363ffd51765c41c": "6f7a31a07d5828ccfe8e5e893457207b",
".git/objects/07/fd5c11ee001c40c3d9c706191f0126676a0d3e": "d30435e3e9ebfca7898011e117005d4a",
".git/objects/09/97bc3ab438d2a18e90c7d41a9091544fb568f7": "0c7dacfcf4546b9d4f15f1be30c050a6",
".git/objects/0a/42a03c233372f968d9c5c57afb582113170188": "9e0e68409b6aff3eb3f90cf171e03985",
".git/objects/0d/fd65de3a1b8828a8e88dc884de05fee93bb8db": "15965f9a9fa98aa130a8a59bf5a65aa6",
".git/objects/0f/e01675f1c0ad76ade5fbb73567d513e165be7e": "9d94e027790df30eba4083b3cdcc47e4",
".git/objects/11/72a5605ffb6214c15d977e4819e5a5c2a50a19": "dd1c381ad57850f6d9cb75cb209bd575",
".git/objects/13/471c1d6e94eb6a7d27d003ecd85d829df3d547": "ee64727fd65b745a375e8e00b6d2d9be",
".git/objects/13/6d3eff1ef9695d319bd200b596847e747c6590": "7b42e82eec699e67dd73e4c1e07d0930",
".git/objects/15/27806163224181364ef4568ce65e16d549f3d3": "41ff4b59066f4cc87b6890899b030441",
".git/objects/16/146ca979d1107abb49dbb9dc2f334babd91df6": "7654d4c1b0af5cc351429a2be879ef0c",
".git/objects/16/ac52aa1cb502835308bf0d775f01f600326283": "40a7df8c14b41a960580fad58b5f2e88",
".git/objects/19/b654bbe035cdeb4df223fb26cfec56430b2981": "470608b4af422edd7dd21006fca8ede1",
".git/objects/1a/473c7c08e08369a3dc05b904b8627ebf089b2f": "8070ce7c8e7e5fa7acdc02e2b74f9dd8",
".git/objects/1c/d1402772828ee7ea0b469691ec60149fc48721": "ba9655d1b8a8c8326b8cd5c6d613f88d",
".git/objects/21/f03380f01d4857cfcd5da8cd8f5ea395f8a6f2": "fe1111641034bcfe6542763cd0e9bb32",
".git/objects/26/70ccf3fc790181f8138c78947898ce77dce901": "22096dd6557d56fe4068e012a9017623",
".git/objects/27/28043d26b32d375b6d776fa166f97fa1d8d5da": "85065317841eca5bfdb4d80f6cc4fb59",
".git/objects/27/b674ee7c9bf15e003bfe26091ad3edf3c19353": "9e606b684c81e99a6bfa1d5a4e79d552",
".git/objects/2a/0c8ce5ef352d7050b9b572ba563b803ab2754a": "fec10c1a01e1ba87e82bb4183f0c853d",
".git/objects/32/e3232f870867a542fb041576d150776a35cf8b": "fbab142b359acd4be99e60ec297e0d73",
".git/objects/33/19b2192c4d23a0659a3cd5af35897eef04ae4b": "161ab4292b020ad3643d662a83e2fde1",
".git/objects/35/8f553c42fa1741244bf3de16b9ba3c61db9766": "29243edb24bec4bc13a5f2efc6d2d705",
".git/objects/36/fc92b0c6a76b8e391d051ed66da846b3022ecf": "d0d620036ac61ee6240c910277f4278f",
".git/objects/38/aa6a16d6fa8eb4a2d9911bb705c2d885119416": "a44e27df238defadb15533acc0608cc2",
".git/objects/3b/a35d34c04841eeef61fab1006e3aa03ed54f89": "195d5637747264052b848fab931db49e",
".git/objects/3c/80f5db6d2b1740386d4ed6015ce99b99f952e8": "399d323688c1f091fc8953ead01721d2",
".git/objects/3c/d0e7d113b6089e5daccfd7fc2f5fbb7bdf2dc4": "3e80a6c68c15047d44c1df18c01069f3",
".git/objects/3d/ea80247787fe926f96fc9dc69690340965723b": "a0011a576e241560fa5105d835ea929a",
".git/objects/3f/4909d764b5b992f7dd3be6456cbc290cbee061": "ac7b0c04d88be99e3ff329f58f266c28",
".git/objects/41/d1db477afe4135b4c3e65c628fdc40bd5fec45": "9270a977a71fc74b977acfeb0675c25d",
".git/objects/43/52f770a3e62e5469a6cf6f9a6fab99b4015c4e": "a66cfa7622379acfbc7afab1f28b7ee1",
".git/objects/43/567ce59715ed991a5c4b9ff5726b3d58400a1e": "b3caefce2b63e64ee767f85e53726b86",
".git/objects/43/97d9af15d67b874931ba189520c34738aee9e4": "d53241e57fe044f1d0b6d0a4d200c38c",
".git/objects/4a/cb9cb1901f852aa113b9d731fbf1933107e9a1": "787e04696447b630670e74299393bf02",
".git/objects/4a/f5f4198c9be9168ceefc0de31263eaea9f0134": "84e7fc276fd7d5d225886d7b395ee869",
".git/objects/4e/c2a58cc84314e43ad7a17d89c56e1d8b7bbc43": "66cb96ae420758d74165187ff1da3c80",
".git/objects/59/a209ace02f5182710ebafa3fa19f287486d03e": "f3f68b220f804b2377f78a7241d6fc31",
".git/objects/5b/322676a35cfd9a594c29350d009a20a2f8b69a": "9e027c2012d451f90a919434da768ee6",
".git/objects/5b/e3123f10165db8a279c0da7fff3bd3880b76f0": "e4f40e2e1ec85fe6b0e3dfb3f7ff6bba",
".git/objects/5c/b9aac514bdf3f6f60a1c41757c33ada4e5c78a": "8facc6f35e5dba554afe63862298070e",
".git/objects/5d/ab96a7f6b07b3deb168f1a7b43fc867a775576": "b9237239e2380ffb40d83b73f830f5f2",
".git/objects/5e/6e849afa13aa3612d5fef032340e5711fa8a64": "64a3e2a8b4946bb0abad23c7078eed3f",
".git/objects/62/2d10103f8a4228d9196d8061fa92804e516509": "b724c51c6a6301171073d060618dce2f",
".git/objects/64/816ad52be8e044243c781c04b1676e155e77b4": "fa5992a7a63991101abcf18f23ae992d",
".git/objects/67/736ee64ad8673d0d4b616f923d6a683cc4a9ea": "db0d58d8f453e9eb32771d1f39c95fd4",
".git/objects/6a/918dc29d335eb170b8dd7deaa02aa69e99098f": "d20731ef599f1bb4553e721d662ad802",
".git/objects/6b/19c45badf3eb6878e5339af02ab120691352ab": "6e26915bca494ac68189e78284e64a8f",
".git/objects/6c/d3a3cc4f9d5e5d7a477f9149280bcd3b15b9e3": "d1014cf98ad2dc20d7493ce2a71987f5",
".git/objects/6e/d9013c806c5cc483ad0d2ffb7ce6d0281dee52": "ebe4cdcef94ed4f3e0ba03e2b53fee10",
".git/objects/6e/e9995bb9986948d3730214eb0c4991b5f3eaea": "500ecfb2003ef354570bfe51fe100169",
".git/objects/6f/3b59993f2cc5eb9f2c172f9fbd0f86b036daaf": "97ae826f73b7e156551b5b161abe17f9",
".git/objects/73/c5cf9d245851b62407f876aabf084f7a7acc2f": "1dfe5b84fc2e655f75de5646583f3c43",
".git/objects/78/26d44c4481ee60bce4c0484fd2c069dccb46ed": "902d9e25e76bb58eea520b848bef7ef6",
".git/objects/78/3e7b1bfd35d71775739eb3ec9a1bd554a2c181": "873e639319e14354d2cd4cdf88b0e11a",
".git/objects/7e/76c55507865009f74eba5c69264a432dcc4443": "625bd3e37c98001144f767b80804573e",
".git/objects/81/034376d04735e46af35e34f1454d3ff248c53b": "98dfc6dd8ecd48a8fd74b218b47ccd8b",
".git/objects/82/cf9bf6eb2d04640fe123820576ad9f89c97334": "3196d8553376f273af7269acb3048d3f",
".git/objects/84/54b5405ecf8435deec5d0bec8bdc82964aefc1": "ddd7a1fd03f5919096a2556f30cd267e",
".git/objects/86/767b685cd7897690fb40673353f520a797b9b2": "0403ce400395406ee73f2719b985975c",
".git/objects/88/279ca1a3e57f2cde2b7752cc33728a2dfbbef9": "18b0a86a6074ad6642845472492a9c99",
".git/objects/89/755c3dfb204de8fa55d30b7aa777d8c0292f0a": "e8563b8a3419e81de849f97c39ac8b5f",
".git/objects/8a/29f5f8b18934c24ee69026b738e18424093d56": "c40b871cb0f39a4151dbd156dc81e84d",
".git/objects/8f/4b35110be16965c00b9369ce84d93ed963197f": "bae6aa1551eb923c084df171b8bfba4a",
".git/objects/8f/9af3c24d8c87ec2ef13be062bb3f63a0351e15": "7b4a07c3a4372cc1535cd0c763b3ef36",
".git/objects/91/108ab499c6d66975c68a2109a167fded41527d": "6270253d93e3e6b15a1d8f9b7fcbe1ef",
".git/objects/93/305f0cf791e6579851c22a4a8a624818093da3": "e2f438abdaf1f00a9aef197295a4f36a",
".git/objects/98/b283daa8fc3a3024a0e2a1531d8a5266f73545": "386d3e1b8d7c8c894c24fe597c9a2e99",
".git/objects/9a/34cdfffdbda9fbea5485bf02574f73af1d2c65": "b4c9dec28b05e296736e0c377e5cb076",
".git/objects/9c/a0f2659860ab86f0e1282775625d097b25ff19": "18ccc846aa557367669f08bdd10f45b3",
".git/objects/9f/d556f7eeb5d3e6fd8c8049f8155130005475e9": "af66e7146f18f964b08dcf98fea64376",
".git/objects/a3/734f77a997c00a8162e3cbae7f2643d0ea11cd": "b75144af389cabee00e660ebb1df9b58",
".git/objects/a4/e4d61be4a32615a1cf2c14fa4cb9ed7a52b72b": "5aecda63273d040ba66fe0345595b985",
".git/objects/a8/ae0a3f2c4c1e4882537653b5c9dd42490f123a": "67df94e7839e4e39971109ae1386220a",
".git/objects/aa/7f15366bafa2a805c43be79ef9329bec110fa2": "e3456de5a9b2ac58fd71f055df9240b7",
".git/objects/aa/b2d2082c53c2f5efd149ffb539a06c2fd84007": "c536863631b5ce89eac73f1b9850d9d1",
".git/objects/ab/160d18cb1f34b825c306be59e70ca7ce4dd438": "5196a6d1978aeaa060a6da06628cabf9",
".git/objects/ab/4e3526e3c09c472f95a7b9489067b868bbf6cd": "344f0b237138f97f1ed1b826ecbda70c",
".git/objects/ac/9f5096275936ca1a1a4c2d89a91797468e4f0a": "3eeb23c744fd7d714a5424c41fc72a60",
".git/objects/ad/7a1099754514d1677f2c103d5f319f100e2239": "f5973b29f2c6217aca0b3c8d0cc1859a",
".git/objects/ae/feef1c4dfd28105b90292fdcec4719997524fc": "0a73adb3a89fb34f336e85acd146e8b8",
".git/objects/af/9563729a4dc54941b6c4ed3b09688b9abd6992": "7d4374d3f9fd16c2fd5813dd06ba9c80",
".git/objects/b0/87750575df49bb1c488272c40e978d0fb095bc": "f22c085c057b1edbfba85a5c2cba5cde",
".git/objects/b1/22a07c8883e5412760daa7e902fba3e92f3c09": "40b3d2a49bcfdb946c46eee6f09a19a1",
".git/objects/b1/7cd198356c43d98fa3f1da72c193f09ab4b228": "71932e795e16d02f40464d71da9a7b43",
".git/objects/b4/8a9fb2aebf1b741f62d09126735956ff27d5db": "3b2ed04e2deee8590e12654f5dfcbed6",
".git/objects/bc/8ce9ba64002faaf976f84a5ae5127a5e83d5ed": "3d0f449b6f3ca3238caffc0da8b95864",
".git/objects/be/134c0af630cc6e1406a323e2dfc6d5f27773a2": "61332d0dc31e83d82d74875557e74850",
".git/objects/bf/40f7ba136d496bb7ad66f61320abd3fbc3f4db": "e9f95bee1edcd3ad582908a97d1998a6",
".git/objects/ca/32b5c60c57ba285a4840ee92062463d25ccddd": "fcf7e95b8bbc5ec9191974a2eb49a5ec",
".git/objects/cb/051dcd8b5885589ddeeb5d00cf7ae77c0a3f72": "e15a24fb9c2311646846c787ced6575c",
".git/objects/d0/e1e608a6839322fca4bc64cc12756805eacb05": "486b9beac124a90a9b81634471d523e0",
".git/objects/d4/458a5068a44e68777ac495b3e5de6c58af356f": "a600cee31fd8c48a2b509e65c9b88511",
".git/objects/d7/7f078288fb6f4c411a935782c71d81a483336c": "7e0725529e39e9924f377d98ce9406ce",
".git/objects/db/6181b97871ffb2488d146accdd0974ce341524": "7f35a662274fb65c53f555b0f0287b8d",
".git/objects/db/c57ee1569f298918900a4bfbde5868f1267fed": "166078dc9b0424a19653d109735a027c",
".git/objects/de/efa71ebd0e0e7ed48453d1e891269504dcbd75": "68eb588fd2b2f7938bdfd9405ee1afcf",
".git/objects/e0/8bcdc1414e0eda9bcb027911af921de7b7414c": "9ab67c770d4e5d19dd0eef5c067fdc5a",
".git/objects/e1/c1d059fb0496a265fb2a408d235ad89bf4a6a8": "f23178f04599c443fba57be8c4086e15",
".git/objects/e7/ed286ce633f37c6ec939efec511f2be6d873a6": "95b3b007157a324fb6e543147cca8b83",
".git/objects/e8/8de4a5f3db307de5f00643a2fc03e7b2e034a3": "2bac843b4d7e52d73029f96063e1d241",
".git/objects/e9/c04051b871edd87178ee6ac6c7b02cade6ba7f": "453d7477794b23b4407d84315ab96348",
".git/objects/ed/3305d1a11642a02f998ffe42c06fa224484f5d": "ddf7841e40b51337956f0b3c853860e7",
".git/objects/ef/dd84add3c1b76ecdce7200cb4f261edc5926eb": "33149d93da73d7ccdef9aaab52e3ec8a",
".git/objects/f0/24d203552845bf05e838c46e0145227a439c8d": "5d828d5f3d5f41e6cbfb77cc86c3d722",
".git/objects/f7/6cabb4a58193a6a5eaaafa48744f08a6fd2644": "48109f2c41c0ded190372ff940af2244",
".git/objects/f8/9723ddf29b9e7bf5dec5795a0efe13ed4fc695": "6de479d45dd1111bfbbd68c2d180796e",
".git/objects/fb/1139abcf26562a07c551cca68dd17adac9b281": "9e3c1ac6b7adbd935122e47bf0a1c676",
".git/objects/ff/afa72646780a07875de2fb7f31c8c4023e4278": "b8d4cc70e8670211594bdad3cc37af0b",
".git/objects/pack/pack-25fd33205cd26e08cf212d692a54a8163696bde6.idx": "814c2057b62c31bbd0ff10a060fc5294",
".git/objects/pack/pack-25fd33205cd26e08cf212d692a54a8163696bde6.pack": "7f094564384018b0aef9b2456fd98af5",
".git/packed-refs": "581722ea5d4fc65efc19a4e420f0275e",
".git/refs/heads/main": "a300198d27ad41b553123222c0d212c4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a300198d27ad41b553123222c0d212c4",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d48cf51c70c26e07e0771caa929558f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0623fa181b3f50bb9f702413a8cedaba",
"/": "0623fa181b3f50bb9f702413a8cedaba",
"main.dart.js": "daaee6c5a8b65e499fadd1a076b02a5e",
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
