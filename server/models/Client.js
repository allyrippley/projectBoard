var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({

  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});

var Client = mongoose.model('Client', clientSchema);

function createDefaultClients() {
    Client.find({}).exec(function(err, collection) {
      if(collection.length === 0) {
        Client.create({title: 'a', featured: false, published: new Date('3/14/2015'), tags: []});
        Client.create({title: 'b', featured: true, published: new Date('3/14/2015'), tags: []});
        Client.create({title: 'c', featured: false, published: new Date('3/14/2015'), tags: []});
        Client.create({title: 'd', featured: false, published: new Date('3/14/2015'), tags: []});
        Client.create({title: 'e', featured: true, published: new Date('3/14/2015'), tags: []});
        Client.create({title: 'f', featured: false, published: new Date('3/14/2015'), tags: []});
        Client.create({title: 'g', featured: true, published: new Date('3/14/2015'), tags: []});
        Client.create({title: 'h', featured: false, published: new Date('3/14/2015'), tags: []});
        Client.create({title: 'i', featured: false, published: new Date('3/14/2015'), tags: []});
        Client.create({title: 'j', featured: false, published: new Date('3/14/2015'), tags: []});
        Client.create({title: 'k', featured: false, published: new Date('3/14/2015'), tags: []});
      }
      console.log('dunzo');
    })

}

exports.createDefaultClients = createDefaultClients;
