import styled from "styled-components";
import StaffContainer from "../containers/StaffContainer";

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const Characters: React.FC = () => {
  return (
    <Container>
      <Title>Staff List</Title>
      <StaffContainer />
    </Container>
  );
};

export default Characters;