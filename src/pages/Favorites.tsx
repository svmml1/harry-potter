import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import styled from "styled-components";
import CharacterCard from "../components/CharacterCard";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 15px;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.5;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const Favorites: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Container>
      <Title>Favorite Characters</Title>
      {favorites.length === 0 ? (
        <Message>You haven't favorited any characters yet.</Message>
      ) : (
        <Grid>
          {favorites.map((char) => (
            <CharacterCard key={char.id} {...char} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Favorites;
