import StudentsContainer from "../containers/StudentsContainer";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Students: React.FC = () => {
  return (
    <Container>
      <StudentsContainer />
    </Container>
  );
};

export default Students;