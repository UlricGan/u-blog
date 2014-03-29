var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var postSchema = new Schema({

	title: String,
	author: String,
	main: String

});

postSchema.statics.getAll = function (callback){

	this.find(function(err, posts){
		if(err){
			callback(err);
		}

		callback(null, posts);
	});
};

postSchema.statics.getById = function (id, callback){

	this.findById(id, function(err, post){
		if(err){
			callback(err);
		}

		callback(null, post);
	});
};

var Post = mongoose.model('Post', postSchema);

module.exports = Post;

