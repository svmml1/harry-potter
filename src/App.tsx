import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/Navbar";
import HomeContainer from "./containers/HomeContainer";
import CharactersContainer from "./containers/CharactersContainer";
import CharacterDetailsContainer from "./containers/CharacterDetailsContainer";
import FavoritesContainer from "./containers/FavoritesContainer";
import Spells from "./pages/Spells";
import Staff from "./pages/Staff";
import Students from "./pages/Students";
import House from "./pages/House";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FavoritesProvider>
          <GlobalStyle />
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/characters" element={<CharactersContainer />} />
              <Route path="/spells" element={<Spells />} />
              <Route path="/characters/:id" element={<CharacterDetailsContainer />} />
              <Route path="/favorites" element={<FavoritesContainer />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/students" element={<Students />} />
              <Route path="/houses/:house" element={<House />} />
            </Routes>
          </Router>
        </FavoritesProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
