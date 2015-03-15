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


  /* var messageSchema = mongoose.Schema({message: String});
  var Message = mongoose.model('Message', messageSchema);
  var mongoMessage;
  Message.findOne().exec(function(err, messageDoc) {
    mongoMessage = messageDoc.message;
  }); */
}
