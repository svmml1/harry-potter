import { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterCard from "../components/CharacterCard";
import CharacterModal from "../components/CharacterModal";

interface Wand {
  wood: string;
  core: string;
  length?: number;
}

interface StaffMember {
  id: string;
  name: string;
  alternate_names?: string[];
  species?: string;
  gender?: string;
  house?: string;
  dateOfBirth?: string;
  yearOfBirth?: number;
  ancestry?: string;
  eyeColour?: string;
  hairColour?: string;
  wand?: Wand;
  patronus?: string;
  hogwartsStudent?: boolean;
  hogwartsStaff?: boolean;
  actor?: string;
  alive?: boolean;
  image?: string;
}

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 20px;
`;

const LoadingText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-top: 20px;
`;

const StaffContainer: React.FC = () => {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/staff")
      .then((res) => res.json())
      .then((data) => setStaff(data));
  }, []);

  return (
    <Container>
      <Title>Hogwarts Staff</Title>
      {staff.length === 0 ? (
        <LoadingText>Loading staff members...</LoadingText>
      ) : (
        <Grid>
          {staff.map((char) => (
           <div key={char.id} onClick={() => setSelectedStaff(char)}>
           <CharacterCard id={char.id} name={char.name} house={char.house} image={char.image} />
         </div>
          ))}
        </Grid>
      )}

      {selectedStaff && (
        <CharacterModal
          character={selectedStaff}
          onClose={() => setSelectedStaff(null)}
        />
      )}
    </Container>
  );
};

export default StaffContainer;