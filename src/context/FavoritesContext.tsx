import { createContext, useState, ReactNode } from "react";

interface Character {
  id: string;
  name: string;
  house?: string;
  image?: string;
}

interface FavoritesContextType {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
});

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const addFavorite = (character: Character) => {
    setFavorites((prev) => [...prev, character]);
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((char) => char.id !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some((char) => char.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};