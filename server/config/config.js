var path = require('path');
var rootPath = path.normalize(__dirname +'/../../')

module.exports = {
  development: {
    db: 'mongodb://ally:liberty@ds063330.mongolab.com:63330/heroku_app19803277',
    rootPath: rootPath,
    port: process.env.PORT || 3030    
  },
  production: {
    db: 'mongodb://ally:liberty@ds063330.mongolab.com:63330/heroku_app19803277',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
}
