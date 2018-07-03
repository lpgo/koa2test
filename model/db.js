import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/test").then((err) => {
	console.log("db connect success")
});

const schema = new mongoose.Schema({ num:Number, name: String, size: String })
const MyModel = mongoose.model('MyModel', schema)

export default MyModel