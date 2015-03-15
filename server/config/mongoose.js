var mongoose = require('mongoose');

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

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String
  });

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      User.create({firstName:'Joe', lastName:'Rippley', username:'user'});
      User.create({firstName:'Ally', lastName:'Rippley', username:'user2'});
      User.create({firstName:'Brooky', lastName:'Rippley', username:'user3'});
      User.create({firstName:'Riley', lastName:'Rippley', username:'user4'});
    }
  })


  /* var messageSchema = mongoose.Schema({message: String});
  var Message = mongoose.model('Message', messageSchema);
  var mongoMessage;
  Message.findOne().exec(function(err, messageDoc) {
    mongoMessage = messageDoc.message;
  }); */
}
