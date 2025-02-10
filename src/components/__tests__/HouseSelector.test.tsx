import { render, screen, fireEvent } from "@testing-library/react";
import HouseSelector from "../HouseSelector";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import "@testing-library/jest-dom";

const renderWithProviders = (ui: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("HouseSelector Component", () => {
  test("renders all house buttons", () => {
    renderWithProviders(
      <HouseSelector selectedHouse="" onSelectHouse={jest.fn()} />
    );

    const houseButtons = screen.getAllByRole("button");
    expect(houseButtons).toHaveLength(4);

    expect(screen.getByText("Gryffindor")).toBeInTheDocument();
    expect(screen.getByText("Slytherin")).toBeInTheDocument();
    expect(screen.getByText("Hufflepuff")).toBeInTheDocument();
    expect(screen.getByText("Ravenclaw")).toBeInTheDocument();
  });

  test("calls onSelectHouse when a house is clicked", () => {
    const mockOnSelectHouse = jest.fn();
    renderWithProviders(
      <HouseSelector selectedHouse="" onSelectHouse={mockOnSelectHouse} />
    );

    const gryffindorButton = screen.getByText("Gryffindor");
    fireEvent.click(gryffindorButton);

    expect(mockOnSelectHouse).toHaveBeenCalledTimes(1);
    expect(mockOnSelectHouse).toHaveBeenCalledWith("Gryffindor");
  });

  test("applies selected style to the correct house", () => {
    renderWithProviders(
      <HouseSelector selectedHouse="Slytherin" onSelectHouse={jest.fn()} />
    );

    const slytherinButton = screen.getByText("Slytherin");

    expect(slytherinButton).toHaveStyle(
      `background-color: ${theme.colors.secondary}`
    );
  });
});
