# Harry Potter Character Explorer

This project is a React application built with TypeScript and Vite. It allows users to explore characters from the Harry Potter universe, view detailed information in a modal, and manage their favorite characters.

## Features
- Display a list of Harry Potter characters
- Show detailed character information in a modal
- Filter characters by students, staff, and houses
- Add and remove characters from favorites
- Fully responsive design

## Installation

To set up the project locally, follow these steps:

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/harry-potter.git
cd harry-potter
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Development Server
```sh
npm run dev
```
The application will be available at `http://localhost:5173/`.

## Running Tests

This project includes unit tests using Jest and React Testing Library.
To run the tests, use the following command:

```sh
npm test
```

## Project Structure
```
📦 harry-potter-app
├── 📂 src
│   ├── 📂 components        # Reusable components like CharacterCard, CharacterModal
│   ├── 📂 containers        # Page-level components
│   ├── 📂 context           # Context API for managing state (favorites)
│   ├── 📂 styles            # Styled-components
│   ├── 📂 tests             # Unit and integration tests
│   ├── 📜 main.tsx          # Entry point
│   ├── 📜 App.tsx           # Main app component
│   └── 📜 vite-env.d.ts     # Vite environment settings
├── 📜 package.json          # Dependencies and scripts
├── 📜 tsconfig.json         # TypeScript configuration
├── 📜 vite.config.ts        # Vite configuration
└── 📜 README.md             # Project documentation
```

## Technologies Used
- React + TypeScript
- Vite
- Styled-components
- React Router
- Jest & React Testing Library

## Contributing
If you would like to contribute, feel free to fork the repository and submit a pull request with improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

Enjoy exploring the world of Harry Potter characters! 🧙‍♂️✨

