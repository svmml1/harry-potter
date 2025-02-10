import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import CharacterModal from "../components/CharacterModal";
import styled from "styled-components";

interface Wand {
  wood: string;
  core: string;
  length?: number;
}

interface Student {
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

const StudentsContainer: React.FC = () => {   
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      });
  }, []);

  const handleSelectStudent = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };

  return (
    <Container>
      <Title>Hogwarts Students</Title>
      {loading ? (
        <LoadingText>Loading students...</LoadingText>
      ) : (
        <Grid>
          {students.map((char) => (
           <div key={char.id} onClick={() => handleSelectStudent(char)}>
           <CharacterCard id={char.id} name={char.name} house={char.house} image={char.image} />
         </div>
          ))}
        </Grid>
      )}

      {selectedStudent && (
        <CharacterModal character={selectedStudent} onClose={handleCloseModal} />
      )}
    </Container>
  );
};

export default StudentsContainer;