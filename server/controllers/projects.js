var Project = require('mongoose').model('Project');

exports.getProjects = function(req, res) {
  Project.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};
