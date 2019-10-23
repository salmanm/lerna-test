const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

fs.writeFileSync(path.join(__dirname, '..', 'dist/package.json'), JSON.stringify(pkg, null, 2));
