import HouseContainer from "../containers/HouseContainer";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const House: React.FC = () => {
  return (
    <Container>
      <HouseContainer />
    </Container>
  );
};

export default House;