var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({

  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});

var Project = mongoose.model('Project', projectSchema);

function createDefaultProjects() {
    Project.find({}).exec(function(err, collection) {
      if(collection.length === 0) {
        Project.create({title: 'a', featured: false, published: new Date('3/14/2015'), tags: []});
        Project.create({title: 'b', featured: true, published: new Date('3/14/2015'), tags: []});
        Project.create({title: 'c', featured: false, published: new Date('3/14/2015'), tags: []});
        Project.create({title: 'd', featured: false, published: new Date('3/14/2015'), tags: []});
        Project.create({title: 'e', featured: true, published: new Date('3/14/2015'), tags: []});
        Project.create({title: 'f', featured: false, published: new Date('3/14/2015'), tags: []});
        Project.create({title: 'g', featured: true, published: new Date('3/14/2015'), tags: []});
        Project.create({title: 'h', featured: false, published: new Date('3/14/2015'), tags: []});
        Project.create({title: 'i', featured: false, published: new Date('3/14/2015'), tags: []});
        Project.create({title: 'j', featured: false, published: new Date('3/14/2015'), tags: []});
        Project.create({title: 'k', featured: false, published: new Date('3/14/2015'), tags: []});
      }
      console.log('dunzo');
    })

}

exports.createDefaultProjects = createDefaultProjects;
