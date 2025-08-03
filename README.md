# Movie Selection Dashboard

A Netflix-inspired movie selection dashboard built with React and TypeScript.

## Features

- Browse a grid of curated shows and movies
- View a featured "billboard" show with artwork and logline
- Add or remove shows from your personal "My List"
- Responsive, interactive UI

## Project Structure

```
.
├── public/
│   ├── index.html
│   └── assets/
│       ├── boxart/
│       ├── icons/
│       └── storyart/
├── src/
│   ├── app/
│   │   ├── jsApp.tsx
│   │   └── ReactApp.tsx
│   ├── components/
│   │   ├── Billboard.tsx
│   │   ├── GridBox.tsx
│   │   ├── Home.tsx
│   │   ├── Mylist.tsx
│   │   └── Tabs.tsx
│   ├── data/
│   │   ├── billboard.json
│   │   ├── grid.json
│   │   └── videos.json
│   ├── styles/
│   │   └── app.css
│   └── index.tsx
├── package.json
├── tsconfig.json
└── .nvmrc
```

## Getting Started

### Prerequisites

- Node.js (see `.nvmrc` for recommended version)
- npm

### Installation

```sh
npm install
```

### Running the App

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```sh
npm run build
```

## Scripts

- `npm start` – Start the development server
- `npm run build` – Build for production
- `npm test` – Run tests

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [react-scripts](https://www.npmjs.com/package/react-scripts)

## License

MIT

---

**Note:** This project is for educational/demo purposes and uses static data for shows and images.
