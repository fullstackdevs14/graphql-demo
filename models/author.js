import mongoose from 'mongoose';
import uuid from 'node-uuid';

const schema = new mongoose.Schema({
	id: {type: String, default: uuid.v1},
	name: String,
	age: Number,
	books: [ String ]
})

const model = mongoose.model('author', schema)

export default model;