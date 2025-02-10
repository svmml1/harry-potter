import { TextEncoder } from "util";
global.TextEncoder = TextEncoder;
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "../Navbar";
import theme from "../../styles/theme";
import "@testing-library/jest-dom";

const renderWithProviders = (ui: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>{ui}</MemoryRouter>
    </ThemeProvider>
  );
};

describe("Navbar Component", () => {
  test("renders all main navigation links", () => {
    renderWithProviders(<Navbar />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Characters")).toBeInTheDocument();
    expect(screen.getByText("Students")).toBeInTheDocument();
    expect(screen.getByText("Staff")).toBeInTheDocument();
    expect(screen.getByText("Spells")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
    expect(screen.getByText("Houses ▼")).toBeInTheDocument();
  });

  test("opens dropdown when 'Houses ▼' is clicked", () => {
    renderWithProviders(<Navbar />);

    const dropdownButton = screen.getByText("Houses ▼");
    fireEvent.click(dropdownButton);

    expect(screen.getByText("Gryffindor")).toBeInTheDocument();
    expect(screen.getByText("Slytherin")).toBeInTheDocument();
    expect(screen.getByText("Hufflepuff")).toBeInTheDocument();
    expect(screen.getByText("Ravenclaw")).toBeInTheDocument();
  });

  test("closes dropdown when 'Houses ▼' is clicked again", async () => {
    renderWithProviders(<Navbar />);
  
    const dropdownButton = screen.getByText("Houses ▼");
    fireEvent.click(dropdownButton);
    fireEvent.click(dropdownButton);
  
    await waitFor(() => {
      expect(screen.queryByText("Gryffindor")).not.toBeVisible();
      expect(screen.queryByText("Slytherin")).not.toBeVisible();
      expect(screen.queryByText("Hufflepuff")).not.toBeVisible();
      expect(screen.queryByText("Ravenclaw")).not.toBeVisible();
    });
  });

  test("navigates correctly when clicking on a dropdown item", () => {
    renderWithProviders(<Navbar />);

    fireEvent.click(screen.getByText("Houses ▼"));
    expect(screen.getByText("Gryffindor")).toBeInTheDocument();

    const gryffindorLink = screen.getByText("Gryffindor") as HTMLAnchorElement;
    expect(gryffindorLink).toHaveAttribute("href", "/houses/gryffindor");
  });
});