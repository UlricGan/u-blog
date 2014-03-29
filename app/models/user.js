var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

	name: String,
	password: String

});

userSchema.statics.getByName = function (n, callback){
	this.findOne({name: n}, function(err, user){
		if(err){
			callback(err);
		}

		callback(null, user);
	});
};

var User = mongoose.model('User', userSchema);

module.exports = User;