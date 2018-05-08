const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test").then((err) => {
	console.log("db connect success");
});
const schema = new mongoose.Schema({ num:Number, name: String, size: String });
const MyModel = mongoose.model('MyModel', schema);
module.exports = new MyModel({ size: 'small' });