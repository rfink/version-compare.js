version-compare
===============

Semver version comparer, inspired by https://github.com/kevva/compare-version,
but it no longer appears to be maintained (and has disappeared from github).

## Install

```bash
$ npm install --save version-compare.js
```

```bash
$ bower install --save version-compare.js
```

## Usage

```js
var compareVersion = require('version-compare');

compareVersion('1.11.0', '1.11.0'); // => 0
compareVersion('1.11.0', '1.2.9'); // => 1
compareVersion('1.11.3', '1.11.25'); // => -1
```

## Testing

```js
$ npm test
```

## License

MIT license, keep calm and do whatever you want.
