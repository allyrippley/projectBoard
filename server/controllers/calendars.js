var Calendar = require('mongoose').model('Calendar');

exports.getCalendars = function(req, res) {
  Calendar.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};
