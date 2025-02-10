import styled from "styled-components";

interface HouseSelectorProps {
  selectedHouse: string;
  onSelectHouse: (house: string) => void;
}

const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

const Selector = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

const HouseButton = styled.button<{ isSelected: boolean }>`
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.secondary : theme.colors.background};
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;

const HouseSelector: React.FC<HouseSelectorProps> = ({ selectedHouse, onSelectHouse }) => {
  return (
    <Selector>
      {houses.map((house) => (
        <HouseButton key={house} isSelected={selectedHouse === house} onClick={() => onSelectHouse(house)}>
          {house}
        </HouseButton>
      ))}
    </Selector>
  );
};

export default HouseSelector;