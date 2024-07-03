import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [theme, setTheme] = useState("light"); // Default theme is light
  const [popupVisible, setPopupVisible] = useState(false);

  const searchLyrics = () => {
    if (artist === "" || song === "") {
      return;
    }
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then(res => {
        if (res.data.lyrics) {
          setLyrics(res.data.lyrics);
          setPopupVisible(false);
        } else {
          setLyrics("");
          setPopupVisible(true);
        }
      })
      .catch(() => {
        setLyrics("");
        setPopupVisible(true); // Show popup on error
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchLyrics();
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className={`App ${theme}-theme`}>
      <div className="card">
        <h1>Song Lyrics Finder</h1>
        <div className="theme-toggle">
          <input
            type="checkbox"
            id="theme-toggle"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <label htmlFor="theme-toggle">Dark Theme</label>
        </div>
        <input
          className="form-control"
          type="text"
          placeholder="Artist name"
          onChange={(e) => setArtist(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Song name"
          onChange={(e) => setSong(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="btn-search" onClick={searchLyrics}>
          Search
        </button>
        <hr />
        {lyrics && (
          <div className="lyrics-area">
            <pre>{lyrics}</pre>
            <a
              className="btn-youtube"
              href={`https://www.youtube.com/results?search_query=${artist}+${song}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
            </a>
          </div>
        )}
      </div>

      {/* Popup for lyrics not found */}
      <div className={`popup ${popupVisible ? 'active' : ''}`}>
        <div className="popup-content">
          <h2>No Lyrics Found</h2>
          <button onClick={closePopup}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default App;
