# Media Search

A simple, responsive, and user-friendly **Media Search App** built with **React**, **Redux Toolkit**, and **Tailwind CSS**. Search for photos and videos using the **Unsplash** and **Pexels** APIs, browse results through separate tabs, and save your favorite media to a personal collection using browser **localStorage**.

## Features

* Search for photos and videos using a single search interface
* Fetch photos from the **Unsplash API**
* Fetch videos from the **Pexels API**
* Switch between Photos and Videos using tabs
* View media results in a responsive grid layout
* Open media on the original source website
* Add media to a personal collection
* Prevent duplicate items from being added to the collection
* Remove individual items from the collection
* Clear the entire collection at once
* Automatically saves the collection using browser `localStorage`
* Collection persists even after refreshing or reopening the browser
* Loading and error states for API requests
* Toast notifications for adding and removing collection items
* Responsive and modern UI using Tailwind CSS

## Tech Stack

* **React.js** – Frontend library for building the user interface
* **Redux Toolkit** – Global state management for search and collection data
* **React Router DOM** – Client-side routing between pages
* **Tailwind CSS** – Styling and responsive design
* **JavaScript (ES6+)** – Application logic
* **Axios** – Making API requests
* **Unsplash API** – Fetching photo search results
* **Pexels API** – Fetching video search results
* **React Toastify** – Displaying toast notifications
* **LocalStorage** – Persistent browser-based collection storage
* **Vite** – Development and build tool

## Project Structure

```text
Media_Search/
│
├── src/
│   ├── api/
│   │   └── mediaApi.js
│   │
│   ├── components/
│   │   ├── CollectionCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── ResultCard.jsx
│   │   ├── ResultGrid.jsx
│   │   ├── SearchBar.jsx
│   │   └── Tabs.jsx
│   │
│   ├── pages/
│   │   ├── CollectionPage.jsx
│   │   └── HomePage.jsx
│   │
│   ├── redux/
│   │   ├── features/
│   │   │   ├── collectionSlice.js
│   │   │   └── searchSlice.js
|   |   |
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/harsh-17114/Media_Search.git
```

### 2. Navigate to the project directory

```bash
cd Media_Search
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure API Keys

Create a `.env` file in the root directory and add your API keys:

```env
VITE_UNSPLASH_KEY=your_unsplash_api_key
VITE_PEXELS_KEY=your_pexels_api_key
```
You can obtain API keys from the respective developer platforms.

### 5. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## How It Works

The application uses **React**, **Redux Toolkit**, and external media APIs to search and manage photos and videos.

* `useState` manages the text entered in the search bar.
* `useSelector` reads search and collection data from the Redux store.
* `useDispatch` sends actions to update Redux state.
* `useEffect` triggers API requests whenever the search query or selected media tab changes.
* **Unsplash API** provides photo search results.
* **Pexels API** provides video search results.
* **Redux Toolkit** manages global search and collection states.
* `localStorage` stores the user's collection directly in the browser.
* `React Router` handles navigation between the Search and Collection pages.
* **React Toastify** displays notifications when media is added or removed.

## Main Components

### App.jsx

Contains the main application structure, including:

* Navigation bar
* Application routes
* Home page
* Collection page
* Toast notification container

### index.css

Contains the Tailwind CSS import:

```css
@import "tailwindcss";
```

### main.jsx

The application entry point that renders the `App` component using React's `createRoot` and `StrictMode`.

### HomePage.jsx

Displays the main search interface and conditionally renders:

* SearchBar
* Tabs
* ResultGrid

### SearchBar.jsx

Handles the search input and:

* Stores the entered text
* Submits the search query
* Updates the Redux search state

### Tabs.jsx

Provides tabs for switching between:

* Photos
* Videos

The selected tab is stored in the Redux store.

### ResultGrid.jsx

Responsible for:

* Fetching media based on the search query
* Calling the Unsplash or Pexels API
* Formatting API responses
* Managing loading and error states
* Displaying search results using `ResultCard`

### ResultCard.jsx

Displays individual search results and provides functionality to:

* View the media
* Add media to the collection
* Display relevant media information

### CollectionPage.jsx

Displays all saved media and provides functionality to:

* View saved items
* Remove individual items
* Clear the entire collection

### CollectionCard.jsx

Displays an individual saved media item and provides a Remove button.

### searchSlice.js

Manages the global search state, including:

* Search query
* Active media tab
* Search results
* Loading state
* Error state

### collectionSlice.js

Manages the user's collection, including:

* Adding media
* Removing media
* Clearing the collection
* Saving collection data to `localStorage`
* Toast notifications

### mediaApi.js

Contains API functions responsible for communicating with:

* Unsplash API for photos
* Pexels API for videos

## Conclusion

Media Search is a practical media discovery application designed to demonstrate modern React development. It combines external APIs with Redux Toolkit to provide a smooth search experience for photos and videos while allowing users to save their favorite media locally. The project demonstrates important frontend concepts including React hooks, Redux state management, API integration, React Router, component-based development, conditional rendering, event handling, localStorage persistence, and responsive UI design with Tailwind CSS.