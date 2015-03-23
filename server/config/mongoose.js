var mongoose = require('mongoose'),
  userModel = require('../models/User'),
  projectModel = require('../models/Project');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('projectboard db opened');
  });
  userModel.createDefaultUsers();
  projectModel.createDefaultProjects();

};
