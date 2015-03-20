var mongoose = require('mongoose'),
  userModel = require('../models/User');

module.exports = function(config) {
  /* if(env === 'development') {
    mongoose.connect('mongodb://localhost/projectboard');
  } else { */
    mongoose.connect(config.db);
  /* } */
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('projectboard db opened');
  });

  userModel.createDefaultUsers();

};
