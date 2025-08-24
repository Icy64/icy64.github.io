'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0a29fdb1e75fab52cff6799c324250e7",
".git/config": "c3613ac63f6f57e57f2f4e3d182fbe98",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1ce5b66f69220d1acc42a05ab5d55559",
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
".git/index": "8a85ea2d15b7f68ebe79bdcfc35cb271",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6b82cbe6334e42300a786dd390b19d09",
".git/logs/refs/heads/main": "30d88820ea3bbfe550c9822688f63e26",
".git/logs/refs/remotes/origin/HEAD": "9f59ba46989cd7a6ffc9e489b6a7d0b2",
".git/logs/refs/remotes/origin/main": "a4c2ff8367fa5e6e4e2200f60232d7bc",
".git/objects/04/2be95016f1a8c82d5958d8ea252a74ee2f81f2": "138be0338d4db70d1968c204e348fe13",
".git/objects/05/bc7a20b540e0baba8d2fc18b1b8e2f1f7aee05": "953987eeb26dcbfe9deadd69bd24e627",
".git/objects/07/020f9a1eeb778e8599f8720972e6d9315047aa": "54370fa1542398e7014101dbb442a835",
".git/objects/08/f4e2b811862f5b5710abe0158c313af9c782f5": "1cbda4724741af03effe7643690ad737",
".git/objects/09/8f0ad0c743be241d63b8381a6f28f99a03fbb3": "a3c82d39087af747d56435d036218f81",
".git/objects/0a/a008a25499f0201efa7a29ac71f92d829f164e": "1f0fecb859e97c982d7a3865cffd78fc",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0c/2ae1a8dfcb0f89555466243500d7b0316fa9e8": "006e1893d7a56c50de63ad1c49a219f2",
".git/objects/0c/bfc8b27662a03bdf5f430bf2bce3f0a215928f": "023fea742f88acc243ef8fb6d92c42f3",
".git/objects/0e/22ebad901c843d39795e649f5d59ffa31aae75": "cf4109c4d3ab966c37ff5c5a450db4f8",
".git/objects/0f/4689928e81bfb6bdb44f653ccb36cc608a36ec": "186e00dbc8803042c0886432d1364546",
".git/objects/11/7143e7491c8db0c1cda8ea06380971c2e5bb47": "dc1b3e031ddedf25c763b99d309732de",
".git/objects/15/7815d558d8ea2c3ef1f197351d45b5ca32d8b8": "10392786d2cec90784e88ae8335df4ba",
".git/objects/16/421989864e3b0b231df9e8a959a56b39ff04be": "bc580272a1b48b9904a9447cd76de786",
".git/objects/16/c8a3f395e5c422ae79d41e42f82469e5c615b4": "9aa1464dd3ad81d42c903a065d5c6873",
".git/objects/17/2064843cafc6628ab97a8c434e602bc5ebf59d": "5fd194aa2dda516148f884850323b81d",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1e/76a0054d085eb6bcba05f9d9fafaf294a88708": "13321c12e2a99fe7a4ea342932b4e459",
".git/objects/20/281a8fda7577b02302d770ec157374134fafb6": "1fd54ba09c153747a616de1dd75dceda",
".git/objects/26/5edd0dd28383325656348d21c8e9902870a320": "5d5e6d896aae397d8a0078d154ebea3e",
".git/objects/26/7d50eef16072a8aaa4f371f30991d9fd3cca5a": "44e41e238996cac552368cf007c797ed",
".git/objects/29/5e6fd3aecf84adccd168752c741de341f2cd6a": "a8a879d1a4bc163cdfadb36716d7e253",
".git/objects/2b/50e2dc14d8b10ccf9d53b3f4c1560db9036d1b": "4979e0880c181bb3e4ea0e33525f6b31",
".git/objects/2c/2df72fea7dae141f466a0877dd864ebb550b26": "8040bb94dba5866e9a6516f9cb0981a2",
".git/objects/2e/71d42067a0c0458389de8dbfc6bbbd74997386": "e66caddaf32e37f2b1f7f2d24d974e28",
".git/objects/2e/e1c00c0ef4fbca5f4b7d79a5d1dc9ae391f027": "303561818070a5b71c0bde1bce02bad7",
".git/objects/2e/ed1ff5ff405ceab34d50decec1ba5773c60400": "30267deb4740ab63f95a60e7fbe57eb3",
".git/objects/31/3f09d9354e7722e82e3cfd89ce2e7d63855d8a": "60ba35c71dc121d072c31195cc121723",
".git/objects/33/94e71e8815b836cae100d31b3c7f2851b9d197": "ca276d68363f2c73cf542c885824cef0",
".git/objects/34/2545d5654e0ba9e8ab1809268ce7c7db4d5594": "b0ec12106d1964755863b8ffe87b2bcd",
".git/objects/37/970b3fec40c489383d0f55bff9c6d746857144": "10d25d3f113239cc2b35124d08d0f120",
".git/objects/3b/4233ea8a2c6fd369b7720727a7243d1be4845f": "56e6e7fa7d0db03bfc14fb3d9bfbadb6",
".git/objects/3c/40d4e8483785e0fab8fc588296a492c2f9f200": "9b69456b8ae6ae6603c97c4ba1671711",
".git/objects/41/af5fd587b3cde1cd16776675b60a99b70549c1": "3c31f65c1309a05d2ef3f674aee6b5a7",
".git/objects/42/c7623c3948d9ca9ee987a1d2d4c6325029c20e": "bca5cc10235179454d1a019f0b49efd2",
".git/objects/43/8277994c32bfd3522cce389874203133e904cd": "ae5a68b554170675cde38214fa0847c3",
".git/objects/43/bd0af68e6b56e476271301ce4976a556902342": "834e9d522b5ea4de7f6d4a4a2858208e",
".git/objects/44/f39ee024476cc55337cf3d1ff911982d43a17b": "99fd5a729a0629b2fadcaf40de576a52",
".git/objects/45/b49e5427125dda868186e724e6375bdbd68de0": "6a3e884e3195e75ab473007a86b9bc68",
".git/objects/47/d4a24f2b5ce460efd2d8e99e2f59ef2475e54f": "748928eb10691a4ae20890bc9e2f6616",
".git/objects/48/523a39fd7579e462b43773c23dcf31457bfc01": "c2d90234587c015d595de8d83507c00f",
".git/objects/48/ed58ccc08314f5998c2a6545b29a355befa355": "4d439f50899a53c6f4452394e29b2b9c",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/7063623c1a6030b51f160522c29b89770f8737": "87dd1bfb652cb87bef02edc6e9fbd6b0",
".git/objects/4c/ccac0636650ccc5a942de8a395cc88db5c8115": "2528bc7b3acf8dbd4c48785fd307d3ff",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/75d5ee979d971f8e5322f21c84fe07b710446b": "a4599d7877a9ea1e439d5a0b52bcdf36",
".git/objects/56/1166ae4041b7b4dcf648f5d8fa6a5a20b41fae": "2185020237b989bece92fe7264391db2",
".git/objects/56/ef9a9b22008957746f4e2aa668db015dc1d2bc": "6a90fab0296571adc50d61f6f1f430de",
".git/objects/59/405d93479845a07a091d0b5475276b2e9dd810": "e7ae7eeaafcc281b5984f05720500829",
".git/objects/5e/7ac7ed625cca76b439aaecd2c7bc8d57a936aa": "158b83676969b445193a2d5b8e000786",
".git/objects/5f/46ce7ee350791a67de6f43c6cc7888e1d1f7b5": "df945d0bd93081e9db1628d900911198",
".git/objects/5f/eee24e333dfa29d906400ea594a2c2a4f6067b": "3ae2c5a04093f8c55f0ae486fbf60938",
".git/objects/63/68f657d7c201894a54a19fc04dd4983de9b980": "aac213784e76c6fd9586e683aecbb42e",
".git/objects/65/b5b90f7dd391d41c4a11b50b50105b31704ac6": "7598ea566f7ac22e15860425ef6e6c1c",
".git/objects/68/9f99f0da2bf63be1a63c2fb0cb5931415c1050": "d2f6553a6d321a69efdc815e01125da2",
".git/objects/68/b3b57d6ee8f6f205bb3a023d51b2bfe66cc9c0": "4bcea967777bad56caf7f768c91236d1",
".git/objects/6a/1e453156ad5e01154a9690c2bb82d73b4f4d18": "2271db4ef8cb11c34b0f6a5c6b2affaf",
".git/objects/6a/8bd33dd2fcfed60b7b4008cc1926cae438eeba": "b3fd467b555442ed5e1ea3e484716369",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/1c09586148b5f8ba250eb1d977cdac3b26c7f9": "c65e8524c0fb1f394a23d6dd31fc172d",
".git/objects/6c/d70c24724c68653e91f6058d9c31349cbabc22": "995e601a8570cadb3cafa36f918fcb50",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/79/45cf922fec586f55d04eccbf060c4c4335aa6d": "7880ce10f72470988e2acd9ba4bcf4a3",
".git/objects/79/c807dced17f30753b0371825a00897a4d857ae": "9c92445845cc90c83f79d06f6847984e",
".git/objects/7e/48e5e8a0c72523ce9b0a775c64c48dd6e8b2af": "4a07a24f7eab311eed89a8c974f3c704",
".git/objects/7f/5b3111b824e20cd932aba35091a3dc6f8a8090": "3003df514dc0d025b8221d98f3d144b6",
".git/objects/81/dcf796b9894da3f8f24bda25f70a61a4c98a7c": "658fc352d60f505264d7f7c2d1543694",
".git/objects/83/65dc1246885937f4e483f6e21d8c6950aaa35e": "8561510d9a626a68202b097aa22c4113",
".git/objects/85/8b5b372955eee229e542b20d4c0f11b25fbdcc": "2bab2df83e11753a623649c1816919fe",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2bc0246b1fb1278144ca35e3736de0f18719fb": "94e19514c6550e511f1e9d9d928c5dca",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e3341181ae17833daef992bb91667cda6ff1c3": "c5ca790b20e72dd7e34ce0eda9746306",
".git/objects/8d/01bfe32de9017bdc72ce0c534f9b873803fce7": "4d5fef9057018c2538a05979dcf5961b",
".git/objects/8d/393b087ac9d816832741754ee6129e4f91f529": "76647a311230a666d2c11c995a568543",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/9061eb09354a4987e76ac8e962b1817f671dd8": "020ce1e305347b28e60df275939fd6cf",
".git/objects/92/3bed839baf2a6ea4e0bb370daef27fb713c9bc": "bff2af58f265fc7a4b2fabde13febc32",
".git/objects/95/27e99b42146978005caa2f32469ad98ed30300": "347d8c08f336e693d58b6202cec9fe68",
".git/objects/96/910e66a63fcebd6434eb9fd62022d66ed8bea1": "2c15e71ae877ea09a6ef73b288d6c047",
".git/objects/96/c0d4396f9ddaee8fe7281cd09b2492b621bbee": "6cf20ffc497a99d01a5e62334832c8e8",
".git/objects/97/f6d92415a8d1f2b088eda6c30bd04b3b55fade": "a3542ed79b2f0d576efd3734c559b109",
".git/objects/98/5abc65459e9a015c5f7b69a591dafda8a2b166": "5ea7b99ae2328f36a4005e54989d898d",
".git/objects/99/977a5a1ff01ab4c86aae7d6d97c99fd2c922dc": "d18f366518f3fc7ef751d3e9d73aad9b",
".git/objects/99/deb79b5a7272718810d5ee174a237428c63194": "13df30a78118b88d74b4ed62c5c9339b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/ee207da51641167e324e88952a0a0909ab0c82": "2cc98935aede3b0d852795ca6ca68cad",
".git/objects/9d/3b3b6d937186697384114e32313c9cad34d5ca": "ba265a057c13ddd9df778f8b4c6e4b87",
".git/objects/9d/fb183b358c498ceae17964341899552565b81f": "5f8a801968b847e83dd25745c103df9e",
".git/objects/9e/399c8dc72f08b826ca9e7bd9ca595c7551aa00": "facd8152b099b517840bbc5b16ff65d5",
".git/objects/a4/b1b91db88e6e14ee9e2a473b587f9e517bf0ee": "698ce6001a9acc66b5e372fe5aca6a62",
".git/objects/a5/3ae4d17ee1727853d24bb8bb213cb08f051ea7": "fabee0e428a3aa25ba1a14c16f4d7099",
".git/objects/a5/6230eed217dd39146b716cfe002fdc1529a322": "b20968b2ea70f832d74b81c32ef273bd",
".git/objects/a5/72b82d82bb099c669695eeead322c551c08260": "1553e7874478e4e311f06c8798491222",
".git/objects/a5/d74f47742dff2a21ab936947404d9fce91d33e": "05d639038ca348c4e1c6b3b4c5fe8b9f",
".git/objects/a6/3a28f1b8755c69c0045890eb816e194c7de9f7": "5ede89ac5d551bd912775f9d2efaf0f4",
".git/objects/a9/79006c3732fefe8a37e19f1d3c02ec1ed33653": "7b070254fc3115b76ac126221f612f9d",
".git/objects/a9/cb93ed6ec23a4a7690b5d46500d34b6c31884e": "ec3c7a62d4520e309ac24042a9eda764",
".git/objects/a9/fd5e53cf0e3589befc86d2a9bac10ff18e9e66": "77fe3d27c4e49b29532b050a71ee1d33",
".git/objects/aa/1e81aeb141916326300054c89662c4d698ba50": "90eef49f024d52f1a2ef5c3858635c12",
".git/objects/ab/6c4982e099bd380cac12c55056aca2a0870085": "0b18e41083e1af8de826dc450de4e055",
".git/objects/ab/f50d4b0c872c9c6acc8b3d7427ce18732aa39e": "bb636fa296c9c3499b6abe9e7500a833",
".git/objects/ad/425e18f6c3749515306af81f143b8ce91cb561": "d159dd078ac5faa2b7224a0639eefa2d",
".git/objects/ae/76e8b450a45deabfdb23e67fcdc97351934330": "3e1d54e30e884d7b86494845df5c1d43",
".git/objects/ae/a873237987c0d6f2983deebf7a9bee2a2f15d5": "bf87613715f18d93ef6b8159047520f8",
".git/objects/b1/65ae4aba14c28ad289aaac59de104fad0a1669": "7997282e1dfb632116ef2c5b1da04a9b",
".git/objects/b4/21772359dbf41e52f0c827bce6c2171b829248": "b9e5258c5390c32c0cc3d928362c09cf",
".git/objects/b4/4bfc7c93ba5ea43907f8db4a94c17f39f152bd": "c1a82de002b1111179429c756bd25852",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/57b61fbc31eec06c0d91b3859ee3e569c650f2": "224ac61325f22cbe78797454c1d0b586",
".git/objects/b8/0fa406b04b12ac5edeca51939c0537bc0dda08": "48bd1bdb695d32c0c4f51029a919855d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/a335fb388b960c7da554141d8808fe3d4752ee": "6deab337ba83e286f15e9a8c6d4b732a",
".git/objects/bc/6bdd6ae5f2730626755c8708a10200c36df8ea": "52d24edeae3f0e338bbeff1d3976b8f9",
".git/objects/bc/bf0d21a86ae515562ff311e41c09eb3fcfb7d4": "2c81e1df59478086c2d249c33fa5b82d",
".git/objects/bc/e1fb8d5f570ac589b6a3098d2ab452fbd5804d": "031e3a4017c6af1e2baf1e160cfb5b91",
".git/objects/c4/3177b647d9f5770ab369b69f72a014a990a7b4": "6ef4ef61b95d05ba8412ce6d643c3cbf",
".git/objects/c6/0eddb9b4144b260e3d6435e5eaba76609c8c34": "8a03aa472fcc165fcb2b82ed74526db8",
".git/objects/c7/15c722422748e34e5bd38f0b3d61117ee54c7a": "c5b9dd51450dfe4b5975b375874b5823",
".git/objects/c7/296ef2c35de4468b475508534588e73b366db3": "60e1497f37f91de2b60a0e7b53e73407",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/5c5f5187e69362bc76db1afa5169487ed8b500": "f86107c8059d405015af3f337c7e9ad9",
".git/objects/c9/ac965e7c78aec07abf43333ba7cdb82c00f364": "7ad0d49b2f48941fa6c9d4417e4fa12e",
".git/objects/cb/16799be00a47d899a25cb12081831cbec91457": "3c048f741292c719f7912f140666e62c",
".git/objects/cf/c7973b98a789f979372da44ef575027df0ffe9": "cdf41106cac8c2e54ad8dae173ef5800",
".git/objects/cf/d23bee50a6f973f919cd92f4c8c0e17aafbe82": "d0de73b9d6ac505846e6631f30c1e69a",
".git/objects/d1/47aea32cf51aee4013487a8f4532ae7b3a4c30": "febeb3025ebf2ac6fd54c3e4b2049479",
".git/objects/d1/e7275a91343fa78031805c55748b9d07bc7262": "c00b5705932592e939d03bf1bd4422f0",
".git/objects/d2/bb7c966a034258bb1ceb6382cd4d5b7ff36ecc": "2558a6fae60869bddf2c60d4ea12f68e",
".git/objects/d3/e128cb5dc956e7a30ecf78529ddb89d863219c": "e896786bd35d8f6ec8fa5aee7683d0a4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/3f0a388d0368ccc5a32296f30ccec023dd4dd0": "f30dc1ca0b38ded5bc7c1509ee250b2d",
".git/objects/d6/85aa2b97971fa768e19328a49e4d6e93696c2e": "d487bc60f0d3ba014c890d5392e9a0e6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/423c1ec44f8a7edb095b8e050a15aa82356080": "9d95695057eea035442816514a983ec6",
".git/objects/d8/7c8c32bceb6f33c6b0c6104f91b69c2cec39d6": "30c07a393c2c35f748d1c8f11bd71f3f",
".git/objects/d8/7cc51158dda3a99ca7f2603d3c6b4ebf12a0e3": "a07d58f3248e830826144cef1195a980",
".git/objects/d8/7da60ce576ba97c30839e6cf6db15a59e633c8": "bab4c768b7455b7bedc62431b1232400",
".git/objects/d9/63792f1462f6c7b7230c3978d8a9ec94a88987": "c372676ce77d51510e6ef8e627f89aaa",
".git/objects/da/2c73eff5b10032c67616a0d801d35a36f58206": "2d7bd4edb5409db577e680e9f0ea3b5e",
".git/objects/db/91b2f852a8f45009a888a8a724569780528ccd": "b10376654c685adce778f050bdf0f04e",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/8a37b45d2faa0ecd92c473dfdac843a36dc0ba": "f277983e5685b5504a0703d80d48b92a",
".git/objects/e0/0723925ae8fc713eea2a8decaf49d3f2e87769": "7ae6b6373832e3acf137e41aa8de8c06",
".git/objects/e0/29ec951cf34865e17010053ed182a19871164a": "9c6cf1354e94a68e3cee9a7c1fdcdbca",
".git/objects/e0/5932bb342c679fd7f7a898f81e1a3bb40ed543": "1e5a1837087e34f21c9659e833c7a094",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/e64669c7da3284370a73817f3c188fcb753613": "35297e20f75af6dc8e8c24919ddf9db6",
".git/objects/e3/8ee3333b04cff39cbe0f7cd2c377d2f589d56b": "2a16b42cac96f48a9d6478391d9b073e",
".git/objects/e4/51f981b346ca61ad660c953ef9d3682ddd4862": "ea3c4117c029358713de4d45bf32b48b",
".git/objects/e5/175b208f0a887255380287a537bbce2caa3e56": "805b261f742d07266905b6c7425d220d",
".git/objects/e6/31d043228bf673e83657bf907af9f9da53655d": "9a9db8ee6010234795ddc510e9adf4f6",
".git/objects/e8/c36bbdc9c6416007e36e499439a7d32f7285ef": "bf98284a4aa0d3ac51678906c739a0d5",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/fea0fbebe20c8ff916c5653f762afc4eff6cfb": "a45f026a3c2cc1efed190475f9e09787",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b32a8adb56a6d4673446d94cfb808712a76a98": "1183af4e69d10f3b3dde82bbb71bc2a9",
".git/objects/ec/28ccae29f8eb3e8a8612a7bb37e86771892dd9": "954381a653a5fc7014aa8a64c34320ae",
".git/objects/ec/ccdb41a318468b0e37b79421f9fb4d4ea66a90": "9dede1cab2387dfb8bc1c3a794f643d4",
".git/objects/ef/d3b578af28fb80a0988883456a32eb03aa387a": "ab9cc76e9cdfd351e3d96175849dc077",
".git/objects/f0/919d372d8fe20e12e3637901f67c1095a8e361": "802e57d500d099f1ced9a0d84c14c3a7",
".git/objects/f0/e1ee8802847d15aa2ab57219221a4b0c24601f": "ada6fb02519bb24943d1e4d2fc581ecd",
".git/objects/f0/f77d10e7c8687b05d98ec88fe8087ce9919e50": "053e72353b40dfb87dda36ca924bb410",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/4bd36ddb88dc70ff2f52d1ba53a4242cb3ca2a": "036cf55fd206592e9baa312ff5a9ed47",
".git/objects/f4/8e6596e839e7b15a431bbcc7c5c45cffde0537": "4253a4be473c54c808cc01162ea6c21d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/eb81870bdc9f01655265fda25c89267a52db2c": "e6f0d4f206ffa7ca2244380d41061725",
".git/objects/f9/ba03491d566c2040996e1ac6a7db8d7e37a03a": "2055483ba7b1b4409d0aed3b8381fc9e",
".git/objects/fc/ccdbb733a020b94fdccd88728de9174be204dc": "436bca8415740e7e0a5257118c7515dd",
".git/objects/fc/e39a8a8914707b3f1cc7e96f0158a53360f2b6": "9e4d70af346f5ce0a1ea3bcc50831679",
".git/refs/heads/main": "23b4ab49d440199f61aca9b0cb27863c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "23b4ab49d440199f61aca9b0cb27863c",
"assets/AssetManifest.bin": "13518ab67aab9616dcee91b82ce4a1d2",
"assets/AssetManifest.bin.json": "54d60d65dc08e1995f5445a291da63b0",
"assets/AssetManifest.json": "b877b7ca7bd3f0b392390cfdad76f4d6",
"assets/assets/images/app_icon.png": "f56a3316b299e5733a4fa42b19c41c11",
"assets/assets/images/app_icon2.png": "f56a3316b299e5733a4fa42b19c41c11",
"assets/assets/images/logo_icon.ico": "287eb68a4c06b7f79bfd4774144f484f",
"assets/assets/images/logo_icon.png": "027f67e9e86b380450687c3f05568bd0",
"assets/FontManifest.json": "0145b61feb58de804b2be096bec1a76c",
"assets/fonts/MaterialIcons-Regular.otf": "39f8a9e630c3337c32aad2be4445598a",
"assets/NOTICES": "c61573a8863f1193f4f1b6b0af9d9fc2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/lucide_flutter/assets/lucide.ttf": "9e122d3b46a326086c8c28c458ec3e02",
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
"flutter_bootstrap.js": "d088f40e7740a60b540b355b25cc811d",
"icons/Icon-192.png": "f56a3316b299e5733a4fa42b19c41c11",
"icons/Icon-512.png": "f56a3316b299e5733a4fa42b19c41c11",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "99e91961aa35bc994f23a99de9e7bccf",
"/": "99e91961aa35bc994f23a99de9e7bccf",
"main.dart.js": "a105b3b47bb5b3cdcc69f8995332502d",
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
