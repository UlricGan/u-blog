var Post = require('../models/post');

var index = function (req, res){

	Post.getAll(function(err, posts){

		res.render('posts', { uposts: posts, user: req.session.user});

	});

};

var show = function (req, res){

	var id = req.params.id;

	Post.getById(id, function(err, post){

		res.render('article', { onepost: post, user: req.session.user});

	});

};

var newPost = function (req, res){
	res.render('edit', {user: req.session.user});
};

exports.index = index;
exports.show = show;
exports.newPost = newPost;