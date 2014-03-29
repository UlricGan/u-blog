

var checkLogin = function(req, res, next){
	var user = req.session.user;
	if(!user){
		res.redirect('/posts');
	}else{
		next();
	}
};

var checkPost = function (req, res, next){
	var title = req.body.title;
	if(!title){
		res.redirect('/posts/new');
	}else{
		next();
	}
};

exports.checkLogin = checkLogin;
exports.checkPost = checkPost;