/* eslint-disable */
const mysql = require('mysql')
let connection = mysql.createConnection({
    host: '157.230.237.112',
port: 3306,
    user: 'remote',
    password: 'Z5S^!%zbOPDQs1MDpA@',
    database: 'songs'
})
/*
dev 
host: '157.230.237.112',
port: 3306,
*/
/*
prod
host: 'localhost',
*/

connection.connect((err) => {
    if (err) throw err
    console.log('Connected!')
});

const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const path = require('path');

app.get('/api/getSongs/:songSearch?', cors(), (req, res) => {
    const parameter = req.params.songSearch ? req.params.songSearch : "";
    connection.query("SELECT artist, song, valence, id FROM songs_and_lyrics WHERE song like " + connection.escape(`%${parameter}%`) + " limit 101", (err, results) => {
        res.json(results)
    })
})

app.get('/api/artistSearch/:artistSearch?', cors(), (req, res) => {
    const parameter = req.params.artistSearch ? req.params.artistSearch : "";
    connection.query("SELECT artist, count(id) songs, AVG(valence) valence FROM songs_and_lyrics WHERE artist like " + connection.escape(`%${parameter}%`) + "group by artist limit 101", (err, results) => {
        res.json(results);
    })
})

app.get('/api/wordSearch/:wordSearch?', cors(), (req, res) => {
    const parameter = req.params.wordSearch ? req.params.wordSearch : "";
    connection.query("SELECT artist, song, valence, id FROM songs_and_lyrics WHERE lyrics like " + connection.escape(`%${parameter}%`) + " limit 101", (err, results) => {
        res.json(results);
    })
})

app.get('/api/lyrics/:song_id?', cors(), (req, res) => {
    const parameter = req.params.song_id ? req.params.song_id : "";
    connection.query("SELECT id, artist, song, valence, lyrics FROM songs_and_lyrics WHERE id = " + connection.escape(parameter), (err, results) => {
        res.json(results);
    })
})

app.get('/api/artist/:artist_name?', cors(), (req, res) => {
    const parameter = req.params.artist_name ? req.params.artist_name : "";
    connection.query("SELECT song, valence, id, artist FROM songs_and_lyrics WHERE artist = " + connection.escape(parameter), (err, results) => {
        res.json(results);
    })
})

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', cors(), (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => console.log("Listening on port: " + port));