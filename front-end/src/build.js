var fs = require('fs');
var htmlFiles = fs.readdirSync(__dirname).filter(i => i.endsWith('.html'))

console.log(htmlFiles)
