# basic-auth-ware

## Install

```bash
$ npm install basic-auth-ware
```

## Use

```js
const app = require('express')
app.use(require('basic-auth-ware')('joe', 'myPassword123'))
app.listen(8080)
```

## License
MIT
