var Team = require('mongoose').model('Team');

exports.getTeams = function(req, res) {
  Team.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};
