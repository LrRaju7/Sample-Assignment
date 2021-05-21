//IMPORTING FILES
const User = require('../../models/userModel');


exports.checkUserExists = async (email) => {
	let user = await User.findOne({ email });
	if (user) return user;
	return false
}