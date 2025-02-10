import CharacterDetailsContainer from "../containers/CharacterDetailsContainer";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const CharacterDetails: React.FC = () => {
  return (
    <Container>
      <Title>Character Details</Title>
      <CharacterDetailsContainer />
    </Container>
  );
};

export default CharacterDetails;