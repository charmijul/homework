const mongoose = require('mongoose');

//create ad collection schema then create the model
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: String,
    artists: Array,
    album: String,
    releaseDate: Date,
    timePlayed: Number,
    url: String
});

const playlistSchema = new Schema({
    name: String,
    songs: [songSchema]
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
