var auth = require('./auth'),
  projects = require('../controllers/projects'),
  mongoose = require('mongoose'),
  users = require('../controllers/users'),
  clients = require('../controllers/clients'),
  calendars = require('../controllers/calendars'),
  reports = require('../controllers/reports'),
  tasks = require('../controllers/tasks'),
  teams = require('../controllers/teams'),
  User = mongoose.model('User');

module.exports = function(app) {

  app.get('/api/users', auth.requireRole('admin'), users.getUsers );
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  app.get('/api/projects', projects.getProjects);
  app.get('/api/clients', auth.requireRole('admin'), clients.getClients);
  app.get('/api/calendars', calendars.getCalendars);
  app.get('/api/reports', reports.getReports);
  app.get('/api/tasks', tasks.getTasks);
  app.get('/api/teams', teams.getTeams);
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res){
    res.render('index', {
      bootstrappedUser: req.user
    });
  });


}
