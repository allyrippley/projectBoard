var mongoose = require('mongoose');

var reportSchema = mongoose.Schema({

  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});

var Report = mongoose.model('Report', reportSchema);

function createDefaultReports() {
    Report.find({}).exec(function(err, collection) {
      if(collection.length === 0) {
        Report.create({title: 'a', featured: false, published: new Date('3/14/2015'), tags: []});
        Report.create({title: 'b', featured: true, published: new Date('3/14/2015'), tags: []});
        Report.create({title: 'c', featured: false, published: new Date('3/14/2015'), tags: []});
        Report.create({title: 'd', featured: false, published: new Date('3/14/2015'), tags: []});
        Report.create({title: 'e', featured: true, published: new Date('3/14/2015'), tags: []});
        Report.create({title: 'f', featured: false, published: new Date('3/14/2015'), tags: []});
        Report.create({title: 'g', featured: true, published: new Date('3/14/2015'), tags: []});
        Report.create({title: 'h', featured: false, published: new Date('3/14/2015'), tags: []});
        Report.create({title: 'i', featured: false, published: new Date('3/14/2015'), tags: []});
        Report.create({title: 'j', featured: false, published: new Date('3/14/2015'), tags: []});
        Report.create({title: 'k', featured: false, published: new Date('3/14/2015'), tags: []});
      }
      console.log('dunzo');
    })

}

exports.createDefaultReports = createDefaultReports;
