import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import theme from "../../styles/theme";
import { HouseContext } from "../../context/HouseContext";
import SelectHouse from "../SelectHouse";

interface HouseContextType {
  favoriteHouse: string;
  setFavoriteHouse: (house: string) => void;
}

const renderWithProviders = (
  ui: React.ReactNode,
  contextValue: HouseContextType
) => {
  return render(
    <ThemeProvider theme={theme}>
      <HouseContext.Provider value={contextValue}>{ui}</HouseContext.Provider>
    </ThemeProvider>
  );
};

describe("SelectHouse Component", () => {
  test("renders the select dropdown with correct options", () => {
    renderWithProviders(<SelectHouse />, {
      favoriteHouse: "",
      setFavoriteHouse: jest.fn(),
    });

    expect(screen.getByText("Choose your favorite house:")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();

    // Verifica se todas as opções estão presentes
    expect(screen.getByText("Select")).toBeInTheDocument();
    expect(screen.getByText("Gryffindor")).toBeInTheDocument();
    expect(screen.getByText("Slytherin")).toBeInTheDocument();
    expect(screen.getByText("Hufflepuff")).toBeInTheDocument();
    expect(screen.getByText("Ravenclaw")).toBeInTheDocument();
  });

  test("calls setFavoriteHouse when a new house is selected", () => {
    const mockSetFavoriteHouse = jest.fn();
    renderWithProviders(<SelectHouse />, {
      favoriteHouse: "",
      setFavoriteHouse: mockSetFavoriteHouse,
    });

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Gryffindor" } });

    expect(mockSetFavoriteHouse).toHaveBeenCalledTimes(1);
    expect(mockSetFavoriteHouse).toHaveBeenCalledWith("Gryffindor");
  });

  test("shows the selected house as the default value", () => {
    renderWithProviders(<SelectHouse />, {
      favoriteHouse: "Hufflepuff",
      setFavoriteHouse: jest.fn(),
    });

    const select = screen.getByRole("combobox") as HTMLSelectElement;
    expect(select.value).toBe("Hufflepuff");
  });
});
