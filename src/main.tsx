import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { FavoritesProvider } from "./context/FavoritesContext";
import App from "./App";
import { HouseProvider } from "./context/HouseContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <HouseProvider>
          <FavoritesProvider>
            <GlobalStyle />
            <App />
          </FavoritesProvider>
        </HouseProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
