require("../database/db");
const Song = require("../model/song");

//read all data
const loadSongs = () => {
  const songs = Song.find();
  return songs;
};

//read 1 data
const findSong = (id) => {
  const song = Song.findOneAndUpdate({ _id: id }, { $inc: { timePlayed: 1 } });
  return song;
};

//create/insert 1 song data
const addSong = (song) => {
  Song.insertMany(song);
};

//update 1 song data
const updateSong = (song) => {
  Song.updateOne(
    { _id: song.id },
    {
      $set: {
        title: song.title,
        artists: song.artists,
        album: song.album,
        releaseDate: song.releaseDate,
        timePlayed: song.timePlayed,
        url: song.url
      }
    }
  ).then((result) => {
    return result;
  });
};

//delete 1 song data
const deleteSong = (id) => {
    Song.deleteOne({ _id: id }).then((result) => {
        return result;
    });
};

module.exports = { loadSongs, findSong, addSong, deleteSong, updateSong };
