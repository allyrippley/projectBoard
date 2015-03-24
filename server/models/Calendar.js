var mongoose = require('mongoose');

var calendarSchema = mongoose.Schema({

  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});

var Calendar = mongoose.model('Calendar', calendarSchema);

function createDefaultCalendars() {
    Calendar.find({}).exec(function(err, collection) {
      if(collection.length === 0) {
        Calendar.create({title: 'a', featured: false, published: new Date('3/14/2015'), tags: []});
        Calendar.create({title: 'b', featured: true, published: new Date('3/14/2015'), tags: []});
        Calendar.create({title: 'c', featured: false, published: new Date('3/14/2015'), tags: []});
        Calendar.create({title: 'd', featured: false, published: new Date('3/14/2015'), tags: []});
        Calendar.create({title: 'e', featured: true, published: new Date('3/14/2015'), tags: []});
        Calendar.create({title: 'f', featured: false, published: new Date('3/14/2015'), tags: []});
        Calendar.create({title: 'g', featured: true, published: new Date('3/14/2015'), tags: []});
        Calendar.create({title: 'h', featured: false, published: new Date('3/14/2015'), tags: []});
        Calendar.create({title: 'i', featured: false, published: new Date('3/14/2015'), tags: []});
        Calendar.create({title: 'j', featured: false, published: new Date('3/14/2015'), tags: []});
        Calendar.create({title: 'k', featured: false, published: new Date('3/14/2015'), tags: []});
      }
      console.log('dunzo');
    })

}

exports.createDefaultCalendars = createDefaultCalendars;
