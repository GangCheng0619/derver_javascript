# Derver changelog

## unreleased

### Other

- Merge branch 'main' of github.com:AlexxNB/derver into main [`9b95dd51`](https://github.com/WebpassionStar/derver_javascript/commit/9b95dd517ae61461700d3993fb6ea014ef307f08)

## 0.4.19 - 2021-09-01

### Features

- Add options to prevent console trashing [`86a63d24`](https://github.com/WebpassionStar/derver_javascript/commit/86a63d2429e3a63c8480c538c3836ba65b994138)

## 0.4.18 - 2021-09-01

### Features

- Ability to run only middlewares when dir option is false [`45cee39d`](https://github.com/WebpassionStar/derver_javascript/commit/45cee39d0959fd68f831d3f19b56acd7cfc4bc98)

### Other

- Merge branch 'main' of github.com:AlexxNB/derver into main [`33cb1376`](https://github.com/WebpassionStar/derver_javascript/commit/33cb13764c4f460bb1b76988c8c201d37d176d4d)

## 0.4.17 - 2021-06-28

### Features

- Add JSON handling in middlewares [`b43d3252`](https://github.com/WebpassionStar/derver_javascript/commit/b43d325203f59853607d6d338518c0778aedfd22)

### Other

- Merge branch 'main' of github.com:AlexxNB/derver into main [`3af95134`](https://github.com/WebpassionStar/derver_javascript/commit/3af951346c646f9acf4a16ca30a7beb175cdee1b)

## 0.4.16 - 2021-06-12

### Documentation

- 📝 Fix some mistakes [`7b2af3f6`](https://github.com/WebpassionStar/derver_javascript/commit/7b2af3f6d332594a97533347901dedca55116497)

### Other

- Merge branch 'main' of github.com:AlexxNB/derver into main [`fe48f6a9`](https://github.com/WebpassionStar/derver_javascript/commit/fe48f6a9ae6b4e145806a46d69242a406f0bead5)
- update dapendencies [`b6538245`](https://github.com/WebpassionStar/derver_javascript/commit/b6538245d6112c1114e325336bd2b0a5cde53524)

## 0.4.15 - 2021-05-02

### Features

- Allow nested index fallbaks in SPA mode [`25b06652`](https://github.com/WebpassionStar/derver_javascript/commit/25b066527ac048cc68beafbaf11cd35f4d6b36b4)

    *If there is some sub directory contents index.html then unexistent URL with first part matched this subdirectory will fallback to this index file instead root one.*

### Bug Fixes

- 🐛 Last param from URL contents also a query part [`a9bc3bfe`](https://github.com/WebpassionStar/derver_javascript/commit/a9bc3bfe01ef923313ad253fc53c547e3f67b062)

## 0.4.14 - 2021-03-20

### Bug Fixes

- 🐛 Livereload doesn't work when no watchers, but uses remote. ([#1](https://github.com/WebpassionStar/derver_javascript/issues/1)) [`859f5d84`](https://github.com/WebpassionStar/derver_javascript/commit/859f5d84e99444cbcdfb20ee0ddabc7632297452)

    *fix [#1](https://github.com/AlexxNB/derver/issues/1)*

## 0.4.13 - 2021-03-10

### Other

- fix 404 with query add usful data to request object [`9f5b48fb`](https://github.com/WebpassionStar/derver_javascript/commit/9f5b48fbdff3b5000a3224d035794aeb7f8594aa)

## 0.4.12 - 2021-01-22

### Other

- dartheme for error modal [`1a965fcd`](https://github.com/WebpassionStar/derver_javascript/commit/1a965fcddfea9f21ab7083496917f472a2eb1df4)

## 0.4.11 - 2021-01-21

### Other

- show modal when server down [`1b4e9811`](https://github.com/WebpassionStar/derver_javascript/commit/1b4e98111c0422397137fc8a75a4b299a382e7cf)

## 0.4.10 - 2021-01-21

### Other

- get remote config in each request [`e7fd2c1a`](https://github.com/WebpassionStar/derver_javascript/commit/e7fd2c1a74f10eabfb477ac26a4157348abf446e)

## 0.4.9 - 2021-01-21

### Other

- add remote server ID option [`05826453`](https://github.com/WebpassionStar/derver_javascript/commit/05826453e6a1bb78723b42b7f6ed6cd10500ca0e)

## 0.4.8 - 2021-01-21

### Other

- add remote control [`c5c4897f`](https://github.com/WebpassionStar/derver_javascript/commit/c5c4897fb3f64e6ec212be052ee272105b551624)

## 0.4.7 - 2021-01-16

### Other

- fix nesting [`17c7d4c6`](https://github.com/WebpassionStar/derver_javascript/commit/17c7d4c654c7655137860250f6726291e2bb7b1e)

## 0.4.6 - 2021-01-16

### Other

- add nested middlewares [`40168291`](https://github.com/WebpassionStar/derver_javascript/commit/40168291208bd66ed2a156b2fc4af22d65b67b3a)

## 0.4.5 - 2021-01-13

### Other

- fix middlewares wrong order [`0cc55ed5`](https://github.com/WebpassionStar/derver_javascript/commit/0cc55ed5aae56a4993d8481a790c0dcc525d96c8)

## 0.4.4 - 2021-01-13

### Other

- fix chaining [`f348d100`](https://github.com/WebpassionStar/derver_javascript/commit/f348d10045aab5198ca1d5aa131089314724f9fa)

## 0.4.3 - 2021-01-12

### Other

- debounce watch log [`4bdd4935`](https://github.com/WebpassionStar/derver_javascript/commit/4bdd49359c1801b035b4804fa1ad0ed586b16900)

## 0.4.2 - 2021-01-12

### Other

- close watchers on exit [`0384166d`](https://github.com/WebpassionStar/derver_javascript/commit/0384166d73c8c5ea161f594981c1d22c1e699237)

## 0.4.1 - 2021-01-12

### Other

- stop server on process exit [`b2d63fc9`](https://github.com/WebpassionStar/derver_javascript/commit/b2d63fc952af396844c7213a3ac1d18050d07836)

## 0.4.0 - 2021-01-12

### Other

- add middlewares [`4c27e389`](https://github.com/WebpassionStar/derver_javascript/commit/4c27e389e8cce9ab90146a7774164297d5d15932)

## 0.3.0 - 2020-11-18

### Other

- fix livereload url [`3c5a9771`](https://github.com/WebpassionStar/derver_javascript/commit/3c5a97718ab6716ac4f87a0d69675128165d52c7)
- use node-watch instead fs.watch [`fa3ae43f`](https://github.com/WebpassionStar/derver_javascript/commit/fa3ae43f1d17a72fc97a27832e887e9a583b0b1f)

## 0.2.2 - 2020-11-14

### Other

- add rollup plugin [`ab8c22a2`](https://github.com/WebpassionStar/derver_javascript/commit/ab8c22a2dedb9a64781b24b813f28644d119d592)

## 0.2.1 - 2020-11-07

### Other

- fix livereload [`56b2596e`](https://github.com/WebpassionStar/derver_javascript/commit/56b2596ea46baed23d8077e214fed0a9f4a54137)

## 0.2.0 - 2020-11-06

### Other

- fix dist size [`1fcf3e9b`](https://github.com/WebpassionStar/derver_javascript/commit/1fcf3e9bb8da0f7fafe2b1928a66d7526b16e111)
- add production mode [`98bb1811`](https://github.com/WebpassionStar/derver_javascript/commit/98bb181111952d88465e1980ce96a989907a34b3)
- add server header [`7eae5d9d`](https://github.com/WebpassionStar/derver_javascript/commit/7eae5d9dfbee1b1bd920a8781fa7e2587acf8bb6)
- add spa mode [`27f6c227`](https://github.com/WebpassionStar/derver_javascript/commit/27f6c227c271f26f6489a99f911f190dd6de0844)
- add cache control [`ebb0c615`](https://github.com/WebpassionStar/derver_javascript/commit/ebb0c6152c8ffcf2a1415730f72116a756ae3bfa)
- add compression support [`7f9c2a7c`](https://github.com/WebpassionStar/derver_javascript/commit/7f9c2a7c7554d8440b576c2c97701f8208a7f06c)
- refactor middlewares [`8aa41509`](https://github.com/WebpassionStar/derver_javascript/commit/8aa415090cbe10a2d11049733a17beef33012579)

## 0.1.6 - 2020-11-05

### Other

- fix URL [`5cf862fb`](https://github.com/WebpassionStar/derver_javascript/commit/5cf862fb7df4ebc47c0417f4f1ba1edc4b75021e)

## 0.1.5 - 2020-11-05

### Other

- add gif [`a90ccbfc`](https://github.com/WebpassionStar/derver_javascript/commit/a90ccbfc443bc817cc50f7aa4049a04c80bb8f37)

## 0.1.4 - 2020-11-05

### Other

- fix readme [`0c50f78d`](https://github.com/WebpassionStar/derver_javascript/commit/0c50f78d5c9222231365e4684dae1a1f9d57a616)
- add error modal [`6735f850`](https://github.com/WebpassionStar/derver_javascript/commit/6735f85049051a484e242f647f174ab6518f27ed)

## 0.1.3 - 2020-11-03

### Other

- add livereload.console method [`c88614ba`](https://github.com/WebpassionStar/derver_javascript/commit/c88614bace9643677cd914c20c6cfe398a9d98ad)

## 0.1.2 - 2020-11-03

### Other

- fix bin path [`928489eb`](https://github.com/WebpassionStar/derver_javascript/commit/928489eb1dd220450259f359a043a2ca132b52aa)

## 0.1.1 - 2020-11-03

### Other

- fix repo [`a298120b`](https://github.com/WebpassionStar/derver_javascript/commit/a298120b1381d92ed3aeb6ef254cb5b41392da16)
- fix formatting [`e673e936`](https://github.com/WebpassionStar/derver_javascript/commit/e673e93675d9ad09e1af9a4d4162307cbfbb61e2)
- add publish workflow [`535e906a`](https://github.com/WebpassionStar/derver_javascript/commit/535e906a6d5b5eb22a85c27aa071cbf472dd6e75)
- fix [`a2e85b81`](https://github.com/WebpassionStar/derver_javascript/commit/a2e85b81c924e33103281d8c0f2e8c0b220d52e2)
- add readme [`1b01090d`](https://github.com/WebpassionStar/derver_javascript/commit/1b01090d718c6593764893c38557dbbd9e3b063c)
- add bin [`1f24f7d9`](https://github.com/WebpassionStar/derver_javascript/commit/1f24f7d9efb7368c0754a6c0750005e5285e9ea4)
- autoreconnection for livereload [`726da397`](https://github.com/WebpassionStar/derver_javascript/commit/726da39775ff810213a81cf9eccdc3b78440e30f)
- make onwatch asyncable [`5a0d6a17`](https://github.com/WebpassionStar/derver_javascript/commit/5a0d6a17affd5f3bfbd12773fdbda8f427a0dc58)
- add onwatch property [`a1eacfaf`](https://github.com/WebpassionStar/derver_javascript/commit/a1eacfafd73b052fa662e6fcd8af7ed4ab158703)
- more beutiful output [`6d75a3c5`](https://github.com/WebpassionStar/derver_javascript/commit/6d75a3c56af52542643f38e1726b1a6d92a8b5fe)
- colorful output [`7b1f94ad`](https://github.com/WebpassionStar/derver_javascript/commit/7b1f94ada540a8d10a200492edcf5ac4be60e278)
- made liverload [`f2b4217b`](https://github.com/WebpassionStar/derver_javascript/commit/f2b4217bbab38cfa4c24236adddabebed0712408)
- add js injector [`b0ac8ece`](https://github.com/WebpassionStar/derver_javascript/commit/b0ac8eceb216814c9965dd19345016fdfe600890)
- rearrange config [`a5952b32`](https://github.com/WebpassionStar/derver_javascript/commit/a5952b32f5cceab251118c7ac09cd76551bf3958)
- make lib [`609d5901`](https://github.com/WebpassionStar/derver_javascript/commit/609d5901f361094f658525f1da2c45ce8a29f9a8)
- add debouncer [`87e7889d`](https://github.com/WebpassionStar/derver_javascript/commit/87e7889d790c2b48f3e159d0b260c7d18c509e91)
- add watcher [`be3fdb46`](https://github.com/WebpassionStar/derver_javascript/commit/be3fdb46a4bdb15af44e8cfa1605e66c50644bfc)
- initial commit [`db76800a`](https://github.com/WebpassionStar/derver_javascript/commit/db76800a5f18bbd2c849b877973883d5525ff03e)
- Initial commit [`d6ce826b`](https://github.com/WebpassionStar/derver_javascript/commit/d6ce826b2a3a7c6f3b5282454dbb6b5fd3735649)