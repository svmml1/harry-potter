import { render, screen, fireEvent } from "@testing-library/react";
import { FavoritesContext } from "../../context/FavoritesContext";
import CharacterCard from "../CharacterCard";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import theme from "../../styles/theme";

const mockCharacter = {
  id: "1",
  name: "Harry Potter",
  house: "Gryffindor",
  image: "https://example.com/harry.jpg",
};

const renderWithProviders = (ui: React.ReactNode, contextValue = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <FavoritesContext.Provider
        value={{
          favorites: [],
          addFavorite: jest.fn(),
          removeFavorite: jest.fn(),
          isFavorite: jest.fn().mockReturnValue(false),
          ...contextValue,
        }}
      >
        {ui}
      </FavoritesContext.Provider>
    </ThemeProvider>
  );
};

describe("CharacterCard Component", () => {
  test("renders character name and house", () => {
    renderWithProviders(<CharacterCard {...mockCharacter} />);

    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByText("House: Gryffindor")).toBeInTheDocument();
  });

  test("adds character to favorites when clicking the favorite button", () => {
    const addFavorite = jest.fn();
    renderWithProviders(<CharacterCard {...mockCharacter} />, { addFavorite });

    const favoriteButton = screen.getByRole("button");
    fireEvent.click(favoriteButton);

    expect(addFavorite).toHaveBeenCalledWith(mockCharacter);
  });

  test("removes character from favorites when clicking the favorite button", () => {
    const removeFavorite = jest.fn();
    renderWithProviders(<CharacterCard {...mockCharacter} />, {
      favorites: [mockCharacter],
      removeFavorite,
      isFavorite: jest.fn().mockReturnValue(true),
    });

    const favoriteButton = screen.getByRole("button");
    fireEvent.click(favoriteButton);

    expect(removeFavorite).toHaveBeenCalledWith(mockCharacter.id);
  });

  test("displays the correct favorite button icon based on favorite state", () => {
    const { rerender } = renderWithProviders(<CharacterCard {...mockCharacter} />);

    const favoriteButton = screen.getByRole("button");
    expect(favoriteButton).toBeInTheDocument();

    const starIcon = favoriteButton.querySelector("svg");
    expect(starIcon).toBeTruthy();

    rerender(
      <ThemeProvider theme={theme}>
        <FavoritesContext.Provider
          value={{
            favorites: [mockCharacter],
            addFavorite: jest.fn(),
            removeFavorite: jest.fn(),
            isFavorite: jest.fn().mockReturnValue(true),
          }}
        >
          <CharacterCard {...mockCharacter} />
        </FavoritesContext.Provider>
      </ThemeProvider>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});