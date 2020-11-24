USE songs;

LOAD DATA LOCAL INFILE '/tmp/labeled_lyrics_cleaned.csv'
	INTO TABLE songs_and_lyrics
	FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
    LINES TERMINATED BY '\n'
    IGNORE 1 ROWS
    (id, artist, lyrics, song, valence);

CREATE INDEX artist ON songs_and_lyrics(artist);
CREATE INDEX song ON songs_and_lyrics(song);
CREATE INDEX valence ON songs_and_lyrics(valence);
CREATE INDEX song_valence_index ON songs_and_lyrics(valence, artist, song);