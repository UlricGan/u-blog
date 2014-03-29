var blogs = require('../app/controllers/blogs');
var user = require('../app/controllers/users');

module.exports = function (app){

	app.get('/blog', blogs.index );
	app.get('/blog/:id', blogs.show);

	app.get('/login', user.index);
	app.get('/logout', user.logout);
	app.post('/login', user.login);


};