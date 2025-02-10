import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CharacterCard from "../components/CharacterCard";

interface Character {
  id: string;
  name: string;
  house?: string;
  image?: string;
}

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  justify-content: center;
  padding: 20px;
`;


const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 20px;
`;

const HouseContainer: React.FC = () => {
  const { house } = useParams();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (house) {
      fetch(`https://hp-api.onrender.com/api/characters/house/${house.toLowerCase()}`)
        .then((res) => res.json())
        .then((data) => {
          setCharacters(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [house]);

  return (
    <Container>
      <Title>{house ? `${house} Characters` : "Select a House"}</Title>
      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <Grid>
          {characters.map((char) => (
            <CharacterCard key={char.id} id={char.id} name={char.name} house={char.house} image={char.image} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default HouseContainer;