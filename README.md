# flag

Quickly check if a flag is set.
```js
var vlag = require('vlag');
var watching = vlag('watch');
```
## Installation
```
npm install --save vlag
```

## Usage

`vlag` checks following methods to set the flag:
```sh
node script.js --watch      # via command line argument
watch=1 node script.js      # via environment variable, mixed case
watch=true node script.js
WATCH=1 node script.js      # via environment variable, uppercase
WATCH=true node script.js
```
