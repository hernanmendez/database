import './App.css'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Artist from './routes/Artist'
import ArtistSearch from './routes/ArtistSearch'
import Lyrics from './routes/Lyrics'
import SongSearch from './routes/SongSearch'
import WordSearch from './routes/WordSearch'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <h1 className="header"><a href="/">Songs & Lyrics</a></h1>
          <div className="navbar">
            <span className="nav-subheader">Ranked by cheerfulness</span>
            <Link to="/">Songs</Link> |
            <Link to="/artistSearch">Artists</Link> |
            <Link to="/wordSearch">Word Search</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/artistSearch/:artistSearch?" component={ArtistSearch} />
          <Route path="/wordSearch/:wordSearch?" component={WordSearch} />
          <Route path="/artist/:artist" component={Artist} />
          <Route path="/lyrics/:id" component={Lyrics} />
          <Route path="/:songSearch?" component={SongSearch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App