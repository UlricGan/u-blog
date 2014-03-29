var Blog = require('../models/blog');

var index = function (req, res){

	Blog.getAll(function(err, blogs){

		res.render('blog', { ublog: blogs, user: req.session.user});

	});

};

var show = function (req, res){

	var id = req.params.id;

	Blog.getById(id, function(err, blog){

		res.render('article', { oneblog: blog, user: req.session.user});

	});

};

exports.index = index;
exports.show = show;