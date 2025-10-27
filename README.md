# 🎬 My-MDB - Movie page in Next.js

An **educational project** for learning modern frontend development with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This app simulates a movie discovery platform using the TMDB API, allowing you to explore popular and upcoming movies, view detailed movie pages, and perform live searches.

**Key learning goals demonstrated in this project:**

- Next.js App Router & Server Components (dynamic routes, server actions)
- API integration & async data fetching from TMDB
- Component-based architecture with reusable props and TypeScript types
- Responsive UI with Tailwind CSS for desktop and mobile
- Interactive features: debounced search, pagination and horizontal scroll

---

## 📑 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Contribute](#contribute)
- [License](#license)

---

## Features
- **Homepage Hero:** Highlights a random featured movie with backdrop, genres, release year, and rating.

- **Movie Browsing:** Responsive card grid for all, popular, or upcoming movies with pagination.

- **Horizontal Card Rows with Sidescroll:** Smooth horizontal scrolling for movie cards, complete with left/right buttons on desktop.

- **Movie Details:** Individual movie pages showing detailed info with backdrop and metadata.

- **Search:** Debounced, real-time search

- **Responsive Navbar:** Desktop and mobile navigation with toggleable search and menu.

- **TMDB Integration:** Fetches movies, genres, and metadata from The Movie Database API.

---

## Tech Stack
- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TMDB - API](https://developer.themoviedb.org/docs/getting-started)
- [WAVE](https://wave.webaim.org/)

---

## Installation

```bash
1. Clone repository
git clone https://github.com/MissKowalik/movie-page.git

2. Change directory
cd movie-page

3. Install dependencies
npm install

4. Create a .env file in the root with your TMDB API key:
API_KEY=your_tmdb_api_key_here

5. Start the development server
npm run dev
```

---

## Project structure

```
├── app
│   ├── movies
│   │   ├── [id]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── server-actions
│   │   └── search-movies.ts 
│   ├── global.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── card-row
│   │   ├── card-row-heading.tsx
│   │   ├── card-row.tsx
│   │   ├── scroll-button.tsx
│   │   └── use-horizontal-scroll.ts
│   ├── hero
│   │   ├── hero-actions.tsx
│   │   ├── hero-backdrop.tsx
│   │   ├── hero-heading.tsx
│   │   ├── hero-moviepage.tsx
│   │   ├── hero-release-rating.tsx
│   │   └── hero-startpage.tsx
│   ├── navbar
│   │   ├── mobile-menu.tsx
│   │   ├── navbar-icons.tsx
│   │   ├── navbar.tsx
│   │   ├── search-results.tsx
│   │   └── searchbar.tsx
│   ├── card-grid.tsx
│   ├── footer.tsx
│   ├── movie-card.tsx
│   └── pagination.tsx
└── lib
    ├── data
    │   └── tmdb.ts
    ├── interfaces
    │   └── movie.ts
    └── types
        ├── cardrow-heading-props.ts
        ├── cardrow-props.ts
        ├── genre.ts
        ├── hero-backdrop-props.ts
        ├── scroll-button-props.ts
        ├── search-results-props.ts
        └── searchbar-props.ts
```

---

## Usage
- Browse the homepage to see a featured movie and trending/upcoming movies.
- Navigate to Movies to explore all movies with filters and pagination.
- Click a movie to view detailed information.
- Use the search bar in the navbar for live movie search results.
- Scroll horizontally in CardRow sections using the left/right buttons on desktop or swipe on mobile.
- The app is fully responsive for desktop and mobile.

---

## Screenshots

### Startpage

| Browser                                            | Mobile                                                    |
| -------------------------------------------------------- | --------------------------------------------------------------------- |
| ![Startpage Desktop](./public/screenshots/startpage_(browser).png) | ![Movie Details Desktop](./public/screenshots/startpage_(mobile).png) |
| 

### Movie details page

| Browser                                            | Mobile                                                    |
| -------------------------------------------------------- | --------------------------------------------------------------------- |
| ![Startpage Desktop](./public/screenshots/movie-details-page_(browser).png) | ![Movie Details Desktop](./public/screenshots/movie-details-page_(mobile).png) |
| 

### All movies

| Browser                                            | Mobile                                                    |
| -------------------------------------------------------- | --------------------------------------------------------------------- |
| ![Startpage Desktop](./public/screenshots/all-movies_(browser).png) | ![Movie Details Desktop](./public/screenshots/all-movies_(mobile).png) |
| 

### Searchbar

| Browser                                            | Mobile                                                    |
| -------------------------------------------------------- | --------------------------------------------------------------------- |
| ![Startpage Desktop](./public/screenshots/searchbar_(browser).png) | ![Movie Details Desktop](./public/screenshots/searchbar_(mobile).png) |
| 

### View all search results

| Browser                                            | Mobile                                                    |
| -------------------------------------------------------- | --------------------------------------------------------------------- |
| ![Startpage Desktop](./public/screenshots/view-all-search-results_(browser).png) | ![Movie Details Desktop](./public/screenshots/view-all-search-results_(mobile).png) |
| 

---

## Future Improvements

- Add advanced filtering by genre, rating, and release year.
- Add pages for people/actors.
- Add more information on movie detail pages.
- Add user authentication and personalized watchlists.
- Implement movie trailers or video previews.

---

## Contribute
Would you like to contribute? Feel free to fork the project, create a feature branch, and submit a pull request.

---

## License
The project is developed for **educational purposes** and is not meant for production use.