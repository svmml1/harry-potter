import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface Character {
  name: string;
  house?: string;
  image?: string;
  ancestry?: string;
  patronus?: string;
  wand?: {
    wood: string;
    core: string;
    length: number;
  };
}

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const CharacterImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 10px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  margin-top: 10px;
`;

export const InfoText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 5px 0;
  line-height: 1.5;
`;

export const LoadingText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-style: italic;
`;

const CharacterDetailsContainer: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    fetch(`https://hp-api.lainocs.fr/characters/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCharacter(data[0]);
        } else {
          setCharacter(null);
        }
      });
  }, [id]);

  if (!character) {
    return <LoadingText>Loading character details...</LoadingText>;
  }

  return (
    <Container>
      {character.image && (
        <CharacterImage src={character.image} alt={character.name} />
      )}
      <Title>{character.name}</Title>
      {character.house && <InfoText>House: {character.house}</InfoText>}
      {character.ancestry && (
        <InfoText>Ancestry: {character.ancestry}</InfoText>
      )}
      {character.patronus && (
        <InfoText>Patronus: {character.patronus}</InfoText>
      )}
      {character.wand && (
        <InfoText>
          Wand: {character.wand.wood} with a {character.wand.core} core,{" "}
          {character.wand.length} inches
        </InfoText>
      )}
    </Container>
  );
};

export default CharacterDetailsContainer;
