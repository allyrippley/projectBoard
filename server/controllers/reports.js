var Report = require('mongoose').model('Report');

exports.getReports = function(req, res) {
  Report.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};
