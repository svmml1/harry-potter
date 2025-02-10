import { useContext } from "react";
import { HouseContext } from "../context/HouseContext";
import styled from "styled-components";

const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

export const Container = styled.div`
  text-align: center;
  padding: 10px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  outline: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const SelectHouse: React.FC = () => {
    const { favoriteHouse, setFavoriteHouse } = useContext(HouseContext);
  
    return (
      <Container>
        <Title>Choose your favorite house:</Title>
        <Select value={favoriteHouse} onChange={(e) => setFavoriteHouse(e.target.value)}>
          <option value="">Select</option>
          {houses.map((house) => (
            <option key={house} value={house}>
              {house}
            </option>
          ))}
        </Select>
      </Container>
    );
  };

export default SelectHouse;