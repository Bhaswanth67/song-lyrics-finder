

# Song Lyrics Finder

A React-based web application that allows users to search for song lyrics and view them in a themed interface. The application toggles the theme of the lyrics display area between light and dark modes.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [API Integration](#api-integration)
- [Contribution](#contribution)

## Features

- Search for song lyrics by artist and song name.
- Toggle the lyrics display area between light and dark themes.
- Responsive design for various screen sizes.
- Popup notification when lyrics are not found.
- Direct link to watch the song on YouTube.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for the browser and Node.js, used for making API requests.
- **CSS:** Styling the application, including responsive design and theme toggling.
- **API:** Integration with the Lyrics.ovh API to fetch song lyrics.

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Bhaswanth67/song-lyrics-finder.git
    cd song-lyrics-finder
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm start
    ```

4. Open your browser and visit `http://localhost:3000`.

## Usage

1. Enter the artist's name and song name in the respective input fields.
2. Click the "Search" button or press Enter to search for the lyrics.
3. If the lyrics are found, they will be displayed in the lyrics area.
4. Use the toggle switch to change the theme of the lyrics display area.
5. Click the "Watch on YouTube" button to search for the song on YouTube.
6. If the lyrics are not found, a popup notification will appear.

## Project Structure

```
song-lyrics-finder/
├── public/
│   ├── index.html
│   └── images/
│       └── image.jpg
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

### Components

- **App.js:** The main component that contains the application logic and UI elements.
- **App.css:** The CSS file for styling the application.

### Styling

- **CSS:** Styles are written in `App.css` to create a responsive design and theme toggling. The styles are applied conditionally based on the current theme (light or dark).

    ```css
    .App {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url(./images/image.jpg) no-repeat center center fixed;
      background-size: cover;
      font-family: "Montserrat", sans-serif;
      position: relative;
      transition: background-color 0.3s, color 0.3s;
    }

    .card {
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      padding: 20px;
      width: 100%;
      max-width: 600px;
      box-sizing: border-box;
      position: relative;
      z-index: 1;
    }

    .lyrics-area {
      padding: 15px;
      border-radius: 8px;
      margin-top: 1rem;
    }

    .App.light-theme .lyrics-area {
      background-color: rgba(255, 255, 255, 0.8);
      color: #000000;
      border: 2px solid #1e2a38;
    }

    .App.dark-theme .lyrics-area {
      background-color: rgba(34, 34, 34, 0.8);
      color: #ffffff;
      border: 2px solid #ffffff;
    }

    .theme-toggle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem 0;
      padding: 10px;
      border: 2px solid #1e2a38;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.9);
      box-sizing: border-box;
    }

    .theme-toggle input[type="checkbox"] {
      appearance: none;
      background-color: #ccc;
      width: 50px;
      height: 24px;
      border-radius: 12px;
      position: relative;
      cursor: pointer;
      outline: none;
      transition: background-color 0.3s;
      margin-right: 10px;
    }

    .theme-toggle input[type="checkbox"]::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: white;
      top: 2px;
      left: 2px;
      transition: transform 0.3s;
    }

    .theme-toggle input[type="checkbox"]:checked {
      background-color: #0056b3;
    }

    .theme-toggle input[type="checkbox"]:checked::before {
      transform: translateX(26px);
    }
    ```

### API Integration

- **Lyrics.ovh API:** The application uses the Lyrics.ovh API to fetch song lyrics based on the artist's name and song name.

    ```jsx
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
          setPopupVisible(true);
        });
    };
    ```

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

This README provides a comprehensive overview of your project, explaining its purpose, features, technologies used, and how to get started. It also includes a detailed description of the project structure and key components, which will help users and contributors understand how the application works.
