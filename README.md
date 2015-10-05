# avsc-js

Simple JavaScript wrapper for [avsc](https://github.com/mtth/avsc) module.

## Installation

```
$ bower install avsc-js
```
Bower will autoload this dependency. If You want to add it manually, add this line to your markup:

```
<script src="bower_componenets/avsc-js/dist/avsc-js.min.js"></script>
```

## Usage in browser

Using it is almost the same as in the nodejs version (https://github.com/mtth/avsc#documentation) except that avsc module is already globally available when included, so you just need to skip the `var avsc = require('avsc'); ` part.

## Limitations

+ The same as here https://github.com/mtth/avsc#limitations
+ No support for **file-related** operations, so `avsc.decodeFile` and `avsc.getFileHeader` **are not available**
+ `avsc.parse` support schema as an **`object` only** (we cannot read file in browser so passing string will not work)