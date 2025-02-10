import { createContext, useState, ReactNode } from "react";

interface HouseContextType {
  favoriteHouse: string;
  setFavoriteHouse: (house: string) => void;
}

export const HouseContext = createContext<HouseContextType>({
  favoriteHouse: "",
  setFavoriteHouse: () => {},
});

export const HouseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoriteHouse, setFavoriteHouse] = useState<string>("");

  return (
    <HouseContext.Provider value={{ favoriteHouse, setFavoriteHouse }}>
      {children}
    </HouseContext.Provider>
  );
};