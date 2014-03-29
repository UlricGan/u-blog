var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var blogSchema = new Schema({

	title: String,
	author: String,
	main: String

});

blogSchema.statics.getAll = function (callback){

	this.find(function(err, blogs){
		if(err){
			callback(err);
		}

		callback(null, blogs);
	});
};

blogSchema.statics.getById = function (id, callback){

	this.findById(id, function(err, blog){
		if(err){
			callback(err);
		}

		callback(null, blog);
	});
};

var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

