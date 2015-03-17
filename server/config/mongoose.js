var mongoose = require('mongoose'),
  crypto = require('crypto');

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
    username: String,
    salt: String,
    hashed_pwd: String
  });
  userSchema.methods = {
      authenticate: function(passwordToMatch) {
        return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
      }
  }
  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      var salt, hash;
      salt = createSalt();
      hash = hashPwd(salt, 'joe');
      User.create({firstName:'Joe', lastName:'Rippley', username:'joe', salt: salt, hashed_pwd: hash});
      salt = createSalt();
      hash = hashPwd(salt, 'ally');
      User.create({firstName:'Ally', lastName:'Rippley', username:'ally', salt: salt, hashed_pwd: hash});
      salt = createSalt();
      hash = hashPwd(salt, 'brook');
      User.create({firstName:'Brooky', lastName:'Rippley', username:'brook', salt: salt, hashed_pwd: hash});
      salt = createSalt();
      hash = hashPwd(salt, 'riley');
      User.create({firstName:'Riley', lastName:'Rippley', username:'riley', salt: salt, hashed_pwd: hash});
    }
  })


  /* var messageSchema = mongoose.Schema({message: String});
  var Message = mongoose.model('Message', messageSchema);
  var mongoMessage;
  Message.findOne().exec(function(err, messageDoc) {
    mongoMessage = messageDoc.message;
  }); */
}

function createSalt() {

  return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd) {
  var hmac = crypto.createHmac('sha1', salt);
  return hmac.update(pwd).digest('hex');
}
