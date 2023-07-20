const express = require("express");
const { loadSongs } = require("./controllers/songs");
const { loadPlaylists, addPlaylist, findPlaylist, playSong }= require("./controllers/playlists");

// require('./database/db');
// const Song = require('./model/song');

const app = express();
const port = 3000;

//view engine dengan ejs
app.set("view engine", "ejs");

//Build-in Middleware for folder public
// app.use(express.static("public"));
// app.use(express.urlencoded());

//agar bisa post data via postman
app.use(express.json())

app.get("/", async (req, res) => {
  const songs = await loadSongs();
  res.send(songs);
  // res.render("main", {
  //   username: "Charmijul",
  //   songs,
  // });
});

//menampilkan seluruh playlist
app.get("/playlists", async (req, res) => {
  const playlists = await loadPlaylists();
  res.send(playlists);
});

//menambah 1 playlist
app.post("/playlists", async (req, res) => {
  await addPlaylist(req.body);
  res.redirect("/playlists");
});

//menampilkan 1 playlist
app.get("/playlists/:id", async (req, res) => {
    const playlist = await findPlaylist(req.params.id);

    //mengurutkan songs yang ada pada playlist berdasarkan timePlayed secara descending
    const sortedPlaylist = playlist.songs.sort((a,b) => b.timePlayed - a.timePlayed);
    res.status(200).send(sortedPlaylist);
});

//"memainkan" sebuah lagu dari sebuah playlist
app.get("/playlists/:id/:title", async (req, res) => {
    const play = await playSong(req.params.id, req.params.title);
    res.redirect("/playlists/"+req.params.id);
});

app.use("/", (req, res) => {
  res.status(404).send("<h1>Error 404: Page Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
