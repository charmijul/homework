require("../database/db");
const Playlist = require("../model/playlist");

//read all Playlist
const loadPlaylists = () => {
  const playlists = Playlist.find();
  return playlists;
};

const addPlaylist = (playlist) => {
  Playlist.insertMany(playlist);
};

const findPlaylist = (id) => {
  const playlist = Playlist.findOne({ _id: id });
  return playlist;
};

const playSong = (id, searchTitle) => {
    const playlist = Playlist.findOne({ _id: id });
    const play = playlist
      .updateOne(
        { "songs.title": searchTitle },
        {
          $inc: {
            "songs.$.timePlayed": 1,
          },
        }
      )
      .then((result) => {
        return result;
      });

    return play;
};

module.exports = { loadPlaylists, addPlaylist, findPlaylist, playSong };
