var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({

  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});

var Task = mongoose.model('Task', taskSchema);

function createDefaultTasks() {
    Task.find({}).exec(function(err, collection) {
      if(collection.length === 0) {
        Task.create({title: 'a', featured: false, published: new Date('3/14/2015'), tags: []});
        Task.create({title: 'b', featured: true, published: new Date('3/14/2015'), tags: []});
        Task.create({title: 'c', featured: false, published: new Date('3/14/2015'), tags: []});
        Task.create({title: 'd', featured: false, published: new Date('3/14/2015'), tags: []});
        Task.create({title: 'e', featured: true, published: new Date('3/14/2015'), tags: []});
        Task.create({title: 'f', featured: false, published: new Date('3/14/2015'), tags: []});
        Task.create({title: 'g', featured: true, published: new Date('3/14/2015'), tags: []});
        Task.create({title: 'h', featured: false, published: new Date('3/14/2015'), tags: []});
        Task.create({title: 'i', featured: false, published: new Date('3/14/2015'), tags: []});
        Task.create({title: 'j', featured: false, published: new Date('3/14/2015'), tags: []});
        Task.create({title: 'k', featured: false, published: new Date('3/14/2015'), tags: []});
      }
      console.log('dunzo');
    })

}

exports.createDefaultTasks = createDefaultTasks;
