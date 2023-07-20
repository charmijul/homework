const mongoose = require('mongoose');

//local mongodb database
// mongoose.connect('mongodb://127.0.0.1:27017/homework'); 

//cloud mongodb atlas
mongoose.connect('mongodb+srv://charmi:qwerty123@clustertest.4qpnuk7.mongodb.net/homework'); 

//create ad collection schema then create teh model
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// const songSchema = new Schema({
// //   _id: ObjectId,
//   title: String,
//   artists: Array,
//   album: String,
//   releaseDate: Date,
//   timePlayed: Number,
//   url: String,
// });

// const Song = mongoose.model('Song', songSchema);
