var mongoose = require('mongoose'),
  userModel = require('../models/User'),
  clientModel = require('../models/Client'),
  projectModel = require('../models/Project'),
  calendarModel = require('../models/Calendar');
  reportModel = require('../models/Report');
  taskModel = require('../models/Task');
  teamModel = require('../models/Team');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('projectboard db opened');
  });
  userModel.createDefaultUsers();
  projectModel.createDefaultProjects();
  clientModel.createDefaultClients();
  calendarModel.createDefaultCalendars();
  reportModel.createDefaultReports();
  taskModel.createDefaultTasks();
  teamModel.createDefaultTeams();

};
