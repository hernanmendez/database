USE songs;

CREATE TABLE songs_and_lyrics (
	id INT auto_increment NOT NULL PRIMARY KEY,
    artist VARCHAR(50) NOT NULL,
    song VARCHAR(100) NOT NULL,
    lyrics TEXT,
    valence FLOAT
);