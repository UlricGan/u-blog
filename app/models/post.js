var mongoose = require('mongoose');
var markdown = require('markdown').markdown;
var Schema = mongoose.Schema;


var postSchema = new Schema({

	title: String,
	date: {type: Date, default: Date.now},
	author: String,
	main: String

});

postSchema.statics.getAll = function (callback){

	this.find(function(err, posts){
		if(err){
			callback(err);
		}

		posts.forEach(function(post){
			post.main = markdown.toHTML(post.main);
		});

		callback(null, posts);
	});
};

postSchema.statics.getById = function (id, callback){

	this.findById(id, function(err, post){
		if(err){
			callback(err);
		}

		post.main = markdown.toHTML(post.main);

		callback(null, post);
	});
};

var Post = mongoose.model('Post', postSchema);

module.exports = Post;

