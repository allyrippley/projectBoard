var Task = require('mongoose').model('Task');

exports.getTasks = function(req, res) {
  Task.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};
