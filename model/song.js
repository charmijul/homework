const mongoose = require('mongoose');

//create a collection model+schema
const Song = mongoose.model("Song", {
    title: {
      type: String
    },
    artists: {
      type: Array
    },
    album: {
      type: String
    },
    releaseDate: {
      type: Date
    },
    timePlayed: {
      type: Number
    },
    url: {
      type: String
    },
  });
  
  //menambah 1 data song
  // const song1 = new Song({
  //         title: "Fly Me to the Moon",
  //         artists: ["Frank Sinatra"],
  //         album: "In Other Words",
  //         releaseDate: "1964-06-09",
  //         timePlayed: 145,
  //         url: "https://open.spotify.com/track/7FXj7Qg3YorUxdrzvrcY25"
  // });
  
  //simpan ke db collection
  // song1.save().then((song) => console.log(song));

  module.exports = Song;