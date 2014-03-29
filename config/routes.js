var posts = require('../app/controllers/posts');
var user = require('../app/controllers/users');
var middleware = require('./middleware');

module.exports = function (app){

	app.get('/posts', posts.index );
	app.get('/posts/new', middleware.checkLogin, posts.newPost);
	// app.post('/posts/create',
	// 	middleware.checkLogin, middleware.checkPost, posts.createPost);
	app.get('/posts/:id', posts.show);


	app.get('/login', user.index);
	app.get('/logout', user.logout);
	app.post('/login', user.login);


};