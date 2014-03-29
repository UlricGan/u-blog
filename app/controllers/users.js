var User = require('../models/user');

var index = function (req, res){

	res.render('login', {
		error: req.flash('fail').toString()
	});

};

var login = function (req, res){

	var name = req.body.aname;
	var password = req.body.password;

	User.getByName(name, function(err, user){
		if(user){
			if(user.password == password){
				req.session.user=user;
				res.redirect('/posts');
			}else{
				req.flash('fail', 'Hey guy! Something is Wrong!');
				res.redirect('/login');
			}
		}else{
			req.flash('fail', 'Hey guy! Something is Wrong!');
			res.redirect('/login');
		}
	});

};

var logout = function (req, res){
	req.session.user = null;
	res.redirect('/login');
};

exports.index = index;
exports.login = login;
exports.logout = logout;