'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3bdee1fe5ed8d7ddfd930c04b94a01b1",
".git/config": "60f50c6f462f94f5c95842734efc9dfe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "77e54b76665d786521839363dcea8d94",
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
".git/index": "7f05c9b6f7ee46d267d0b26e613cb681",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0dccee1cad6143cc97cadd93d5ca7483",
".git/logs/refs/heads/master": "0dccee1cad6143cc97cadd93d5ca7483",
".git/logs/refs/remotes/origin/master": "be1fe3c52eb3eaab2fce6e7207c4620d",
".git/objects/00/7b29f642f8d639b180dc3204968f98b6c6bfb0": "352290d76fa23a1f58677c0a80398aa4",
".git/objects/00/d7110853350d1128619aaeb79c15a3b9e70706": "b409006ffa07ef9a5cbd7cbd34689c04",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/01330c6b2dbf59e8fb63be4f4b9acce9b23ab0": "9994722237ce10bf65237fc974e12cee",
".git/objects/0d/9b6bbf3817093563fb5df10c09a61900a23a6b": "fc4be926697ba789a040d10133374ed9",
".git/objects/0f/53848a38274c93a468358795e8f74527b39609": "99d5517774ccc8b9354a413d770967b2",
".git/objects/13/5c6002e295f149464faf8d871289b5851e7055": "4b5b1eab14612c7decf601567405a63e",
".git/objects/15/1c8f5e8e1f52755347ff16474aa583e7b0d3e6": "7ca6c5ad6899ff39196bdc93b52ca80b",
".git/objects/15/9dcdba9c31c8850c89908d3f21cf96bf66534e": "1443c994a99cb250bb6d7057d3b469d4",
".git/objects/15/dca21d0af965747185f6bb48a6dceda6af90e4": "d291d82673eb56714d04874561b5aea0",
".git/objects/15/f4a4678d9afc1bf88aaee90c7fba3b09b3a554": "67555cb57fa41d9359a7d4490f77710c",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/6233e082fcb5c6828269b874df95bf1be26f3b": "05711594d15d60f9892f2a8b8b4e5121",
".git/objects/23/5d236936ceed0bc6dbecaa6f9a2267d5d76740": "b7922ea33817c2bbcd9a70bd364f1dd4",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/2390f9158d6310cac21e9b3155064bca40a1b9": "df789f10b1d4e18b12dd6fd087fa3274",
".git/objects/29/56b602f2f0de9a6bb92130cec1b81d384478ea": "30f9b0945edc633d328060127cd5bc73",
".git/objects/2e/1f4b6a51e64e59c915a28afd1facd546a0ce43": "a6ee29b1053f6a3246f1ef09fbda5ef7",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/eee743b9b96a6b20abf1a8897ab317d72a5a7e": "10905d96910b69d1718f1c98b6ca7ae4",
".git/objects/36/4d7318f69b54ec11149d5fa95d02a95f4e968b": "0df57dcac8b2ae19d40ea7ff3b7ea1cd",
".git/objects/36/62e13125a3461ca07963abe542255ec49dabee": "fdd295d23b589df8cebbe9651da6f6ec",
".git/objects/36/88ec0c013a6a0653244c5142003f5d7be46844": "455352b29fdf7bd7713d87f42d5ef3b8",
".git/objects/37/a34fb4d20e17fa9d8fb037c6f103006054d0ef": "cd017308e4b23819d765b1a0c1026943",
".git/objects/3b/b30e0ce871d7d67e956d13991ca1c4833f992e": "d969af65061dd7c95c265a6fa8956ac8",
".git/objects/3e/fae2ee54edc0ac91c289735fb5df3666218973": "48e769262194f038bba7f163e4faec22",
".git/objects/40/8b654917d681aacfbb1d08bc2e77c8434c14d7": "e56c030d8cdaad1baa71aa00a1b286ea",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/52/b1ac895da91e1e06842fa16473b81b6fd3e0b0": "f9d0bc75e8e2b0dad4fc682cf3b6535a",
".git/objects/56/0ea76f42d3fbddf7a49ac48eb9ee90794a4d68": "bfc3ebef345d76e58ea6505297b7cada",
".git/objects/57/b25d380fbf5c4d7daa176bde06e73cac38e9eb": "400b1e9badfa55d6d0b6c2fe61729e53",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/5f/c6c46a4bfa4984cefec52c4df161bd442e0b79": "c5a5b522e4a1242bc8389b3763f75b6d",
".git/objects/61/923a0b586e752a8436d44db1927d77de3ece17": "fbd9b3f566b31e5f031333c891defb4e",
".git/objects/63/fe92dc23612dbe25cc73028c12e50e12893ecd": "0d9475964f8fa6708d372b8d0eae29fe",
".git/objects/66/5016c53c9b850f132f79574d953bcb47ecf4ec": "dbc802065ff7154be1276898f0ec74d1",
".git/objects/67/13758fb6977b572a200cb4ee9b9bd376867156": "87f3c3420ce19267a21c69a4c67d6788",
".git/objects/6c/d4fae090b72cd72dfd2d4a0b680c0bada27c38": "100129a2222b7d102ec1b3372c9e4262",
".git/objects/70/9b96a86ad3403c889f7c1b12ceff4f325b89cb": "d4dbcabd6d1f29b5fabbf0dd33211ad0",
".git/objects/70/f389a4ba49706b9973ce23fb94752584a65df6": "be7ed0ba6bdb0f4cdbc4f0716bf20a0c",
".git/objects/74/ff482e1573c8bb3892c0d0de335270aa6adeda": "ba690b72da585d50eecf0aa1d4b573ba",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/fff5ae819d93bd377c31e921535c214ec7e432": "94f587e54d06ef4f6cd87c172f45bc03",
".git/objects/7e/dad3a577cf31a687760bbc184dfa4a139bd9f6": "2e9e1e37b7db1c60a055305527d16dc5",
".git/objects/81/20ad3d61339275d292e03737697bd9158381d8": "c53ad746808420f34004d6bce07412ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f359e788776960d7563c8d3f5f5240b87cf7d7": "f1383c2dff0da112358e0ff4426d576d",
".git/objects/8a/120111291ebdddca11cdef78e43d797a569dd4": "5198a8b74ea963269915159bd6e17df1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/dc52524a6cc75d9cf526f35bcee3665f10a510": "211af0214c31382206afc1f2ab813963",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/99/54298959c3ddcbcb1c87f108c425cd2a302827": "d84834a8337afbdece75f39c8149ecef",
".git/objects/9b/63fb1eaee335caf49005b831dbeb5339ef8623": "c249d9a53e3351eae01b55b028b676be",
".git/objects/9f/ec24357858cf5d3abdca4df796056aceac3ef4": "51aef90ec130f29b0ee1ba9e00344f57",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/91a7b1894d944e0d45337083450b3a7c9beb76": "cd87e88acae8aee26efb8a5edbd14046",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/2dc0a12e3b421d4a28ed77499f100926470eba": "0bcbf28db66b5e6ecbecb5efd4fcd702",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/023907bfba570d3790c06531a29a33a374098d": "284bbd01c4def08ecd92827adf84ae85",
".git/objects/b1/763c74a941224e440d0207ce024fdf36ea6f7e": "85fb707c80364888dd8d2cbad03ef04b",
".git/objects/b2/77464fb1615b39404918fabb9e6e5b4f4bb8cf": "fb1f4055b29401dc860fb6e55d1d47b0",
".git/objects/b3/f0feecd42ed5f71cc57be4ae2b1e098c94b367": "aaaedc1ea00b9d8db198d38ca5b8b81c",
".git/objects/b4/8553e9b330957749fb8d8ba13675083e449748": "ff73119749e990ae9ee15317b0ec9ab2",
".git/objects/b5/baa4eeacddba8aa937f5730c0ac036dec63dd0": "44b8c2eac408d36103b2ca0b54f48d32",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/5da99fc64a0d2870207ead515f7d6454836338": "11dca0151bebdc4abb86b73307dc3243",
".git/objects/bb/adcf37847bc68a5a1535d7feedfdc46516c857": "7ff92bbb68a6109dee3272f4f32e4f22",
".git/objects/be/6e441638ba7db5e47de610b8c53064dd772fd4": "21a235e63ed1a6633828e69e7b32483c",
".git/objects/c0/4e2c585125d1a5b715ec0a58396b12a8fb5187": "5a7e749cb6cbc737ac5aa934480dda3b",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c3/036ba1b010bb7ccb4202f7df4d6553cd3ac874": "8a996fb6e45831c96eee4630090db29f",
".git/objects/c7/f9711dd09ae247a8d8118296e1f3621851e5d9": "6334235ce3b23f25bbed3032c73e12bd",
".git/objects/d2/6fd334175001185fabb0fb1117d7c85071332c": "4de64b5b5772a63d185ba0ad9d2e3e31",
".git/objects/d9/ee23ad74a7eb9a21271ea7bb7d9c45e464a34e": "5fec43bdf46402bfcbfa8d10196e76f6",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/de/f4630bc2bf4af0b912766349221e3f1f01e6f2": "a14603d01fac185253a5f35620617fe9",
".git/objects/df/43f6228ab460d1e955308e022723147ac27368": "ec69c3e05903393021ada8b2e20b5c1d",
".git/objects/e1/6211d6a29527373bc4c9fa2774c020d9c2ece6": "3d9dbc04a2f8e741d90a723f053004c1",
".git/objects/e1/d5e6d2d1da14f7f19d9f211774ee60828758b6": "0a14cdd58b9f4c781bd1005695ced2ee",
".git/objects/e5/88b3ce23c3dbba37833bd4f91b408d5edd3a97": "8b0b50d50b8a3c0e0e7195f53ee81ca0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/147cd7ae40d5915f5b18ba7b77717431e705f8": "5019e0b0626246f41ae3032e99cbc9c0",
".git/objects/ea/ab9d18424e9efc18b5f88464f33a2bfcf02563": "00f0ef5c3bacebc895966dd740eecc8d",
".git/objects/ec/3753eed5c4b5269dbf5a0fd4df2875b7461e5b": "560a1567556ea2310ea23a0b9bfa6819",
".git/objects/ed/0c66991f1a6445e1d135113a9de3b441250477": "d7ffd44d2feb5c3d740ec1efb8953320",
".git/objects/ed/9e38378fde8d333122180fcd8ef21dc5f48f42": "891e0322bc850134fbd4bd39fedd4d77",
".git/objects/f0/806deab01d8f47bbd9e72e39c273ccc3b11922": "00ed8e62a72d2cc935cf9b284fca6098",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/b9b60d3c95053cc2da392955211eb3dc5203f2": "489751816d19f5ecd6ede87d27701cf5",
".git/objects/f3/9841c4ab824f0ad5efa26337f9e35b4230e32a": "db7b1dab3bdd870df4e3c195b118bae4",
".git/objects/f7/2abe215980fb44fca357d93ffc76c20b5ac8b5": "1cb79fbe27e80e79e011e50f52fe1d10",
".git/objects/f7/2d5a9973a30b7ca80101239dc9ddec0632d547": "7174258ecfbc73269cecadf91ec09016",
".git/ORIG_HEAD": "b8e2fd952744e641e085b83c62de37d2",
".git/refs/heads/master": "0ad7992b139d6e72de3e0544d790ff0b",
".git/refs/remotes/origin/master": "0ad7992b139d6e72de3e0544d790ff0b",
"assets/AssetManifest.json": "45e453485910f7899d87cd94d8c37d0a",
"assets/assets/icons/icons8-authentication-480.png": "3c470b6cae415ade1cff875351c853f6",
"assets/assets/icons/icons8-cloud-firestore-480.png": "8d0e6e99884e6d0cda574046fe71bfd4",
"assets/assets/icons/icons8-cpanel-480.png": "659aa262f7af41af865a1e2d2bfbcee2",
"assets/assets/icons/icons8-css3-480.png": "5c4e16ceb77211d7b286e351e272328d",
"assets/assets/icons/icons8-dart-480.png": "65c2aa86d62a098b21702842034e016d",
"assets/assets/icons/icons8-django-480.png": "47365394947ae414edbbc2a69bb024d5",
"assets/assets/icons/icons8-firebase-480.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/assets/icons/icons8-firebase-ml-480.png": "b2388aeb9249a730bc9770d6ca67f7db",
"assets/assets/icons/icons8-flutter-480.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/assets/icons/icons8-git-480.png": "9a073b4cb55995549f7dc759eb46f831",
"assets/assets/icons/icons8-github-480.png": "76b4f67b08894fb7b1732f45480b7cd2",
"assets/assets/icons/icons8-google-admob-480.png": "55ef26afa57b0ccacbf3274e1454b411",
"assets/assets/icons/icons8-google-ads-480.png": "4e84c6b8d575a3a63ea2b89efc1e814d",
"assets/assets/icons/icons8-google-cloud-480.png": "975e2624aabdc5f46579ccadc4303a6a",
"assets/assets/icons/icons8-graphql-480.png": "1bcf5ba870770831c6b0963c2b796bcb",
"assets/assets/icons/icons8-heroku-480.png": "a87a182d5615a635363b5f9627df2e86",
"assets/assets/icons/icons8-html-5-480.png": "8d87b2b36282f6830ab5e8a84b6cc227",
"assets/assets/icons/icons8-in-app-messaging-480.png": "10d926c3f0638b29d7e2ce6f11b3480c",
"assets/assets/icons/icons8-java-480.png": "194f3da9e4addbb03e9fd1f091e647fe",
"assets/assets/icons/icons8-javascript-480.png": "2e5de0a7d635b437db088d43f847d39c",
"assets/assets/icons/icons8-kali-linux-480.png": "51540029e876f4f3bcb8d4175e590c35",
"assets/assets/icons/icons8-mongodb-480.png": "28ec40a4d2332648f920ff506571a7d7",
"assets/assets/icons/icons8-mysql-logo-480.png": "4f4798c0756dc648bfc716c7d51b2930",
"assets/assets/icons/icons8-postgresql-480.png": "7f3c9e71663cb96f973449eff0ea1491",
"assets/assets/icons/icons8-python-480.png": "8eacb570fdccc669f09690b4c2918b00",
"assets/assets/icons/icons8-realtime-database-480.png": "1a817c936b74e59c87da8212e810f7d2",
"assets/assets/icons/icons8-ruby-programming-language-480.png": "106e001daf42aaee08d4984f0172e2a5",
"assets/assets/icons/icons8-visual-studio-code-2019-480.png": "2e432644764658516118ceb358dce041",
"assets/assets/icons/icons8-wordpress-480.png": "a3de1d09a527214af610f825818cea88",
"assets/assets/images/profile.jpg": "9029bac74f661dfbe52d66ce27b3ec24",
"assets/assets/images/splash.png": "04b9ff45abd5fddfaaa6715645e41e0d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "82326515717cdba1ffdbc43e75e4b92c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1f05dd875278d7d58ebb9ed15af93ad4",
"/": "1f05dd875278d7d58ebb9ed15af93ad4",
"main.dart.js": "1850cece20331b87e7eb3596668f69dc",
"manifest.json": "d0998556509d9dff02021af5b40ff7a6",
"README.md": "a7790c0fbcc01f046794a85ce32817e0",
"splash/img/dark-1x.png": "631e052a4b03b316983727d0c2e05b9e",
"splash/img/dark-2x.png": "6ef8b913a34299d5071a7f0a45a4ed60",
"splash/img/dark-3x.png": "2993eb3ac1c6f9b7339f750445b8910b",
"splash/img/light-1x.png": "631e052a4b03b316983727d0c2e05b9e",
"splash/img/light-2x.png": "6ef8b913a34299d5071a7f0a45a4ed60",
"splash/img/light-3x.png": "2993eb3ac1c6f9b7339f750445b8910b",
"splash/style.css": "5d3c79822abdcb9a8c7cd420af8e0fe1",
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
