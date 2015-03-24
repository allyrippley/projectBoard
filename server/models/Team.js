var mongoose = require('mongoose');

var teamSchema = mongoose.Schema({

  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});

var Team = mongoose.model('Team', teamSchema);

function createDefaultTeams() {
    Team.find({}).exec(function(err, collection) {
      if(collection.length === 0) {
        Team.create({title: 'a', featured: false, published: new Date('3/14/2015'), tags: []});
        Team.create({title: 'b', featured: true, published: new Date('3/14/2015'), tags: []});
        Team.create({title: 'c', featured: false, published: new Date('3/14/2015'), tags: []});
        Team.create({title: 'd', featured: false, published: new Date('3/14/2015'), tags: []});
        Team.create({title: 'e', featured: true, published: new Date('3/14/2015'), tags: []});
        Team.create({title: 'f', featured: false, published: new Date('3/14/2015'), tags: []});
        Team.create({title: 'g', featured: true, published: new Date('3/14/2015'), tags: []});
        Team.create({title: 'h', featured: false, published: new Date('3/14/2015'), tags: []});
        Team.create({title: 'i', featured: false, published: new Date('3/14/2015'), tags: []});
        Team.create({title: 'j', featured: false, published: new Date('3/14/2015'), tags: []});
        Team.create({title: 'k', featured: false, published: new Date('3/14/2015'), tags: []});
      }
      console.log('dunzo');
    })

}

exports.createDefaultTeams = createDefaultTeams;
