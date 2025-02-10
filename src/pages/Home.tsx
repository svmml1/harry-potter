import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://img.freepik.com/fotos-premium/castillo-hogwarts-es-simbolo-harry-potter_901003-8070.jpg?w=1380");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
`;
const Home: React.FC = () => {
    return (
        <Container>
        <Title>Welcome to the Harry Potter Mischief Managed App</Title>
        <Description>
          Explore your favorite characters and spells! Select your Hogwarts house and dive into the magical world.
        </Description>
      </Container>
    );
  };

export default Home;