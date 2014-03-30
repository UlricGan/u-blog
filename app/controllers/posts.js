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

var createPost = function (req, res){
	var ntitle = req.body.title;
	var nmain = req.body.main;
	var nauthor = req.session.user.name;
	var ndate = new Date();

	Post.create({
			title: ntitle,
			author: nauthor,
			main: nmain,
			date: ndate
		}, function (err, post){
			res.redirect('/posts/'+post._id);
	});
};

exports.index = index;
exports.show = show;
exports.newPost = newPost;
exports.createPost = createPost;