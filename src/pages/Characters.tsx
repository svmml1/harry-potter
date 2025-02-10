import CharactersContainer from "../containers/CharactersContainer";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const Characters: React.FC = () => {
  return (
    <Container>
      <Title>Character List</Title>
      <CharactersContainer />
    </Container>
  );
};

export default Characters;