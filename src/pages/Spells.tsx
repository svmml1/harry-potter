import { useEffect, useState } from "react";
import styled from "styled-components";

interface Spell {
  id: string;
  name: string;
  description: string;
}

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 15px;
`;

export const SpellName = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.accent};
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.5;
`;

const SpellCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  border-radius: 8px;
  text-align: center;
`;

const Spells: React.FC = () => {
  const [spells, setSpells] = useState<Spell[]>([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/spells")
      .then((res) => res.json())
      .then((data) => setSpells(data));
  }, []);

  return (
    <Container>
      <Title>Spell List</Title>
      <Grid>
        {spells.map((spell) => (
          <SpellCard key={spell.id}>
            <SpellName>{spell.name}</SpellName>
            <Description>{spell.description}</Description>
          </SpellCard>
        ))}
      </Grid>
    </Container>
  );
};

export default Spells;
