# flag

Quickly check if a flag is set.
```js
var flag = require('flag');
var watching = flag('watch');
```

`flag` checks following methods to set the flag:
```sh
node script.js --watch      # via command line argument
watch=1 node script.js      # via environment variable, mixed case
watch=true node script.js
WATCH=1 node script.js      # via environment variable, uppercase
WATCH=true node script.js
```
