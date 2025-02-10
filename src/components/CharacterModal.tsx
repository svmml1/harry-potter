import * as S from "./styles";

interface Wand {
  wood: string;
  core: string;
  length?: number;
}

interface Character {
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

interface ModalProps {
  character: Character | null;
  onClose: () => void;
}

const CharacterModal: React.FC<ModalProps> = ({ character, onClose }) => {
  if (!character) return null;

  return (
    <>
      <S.Overlay onClick={onClose} />
      <S.ModalContainer>
        {character.image && (
          <S.CharacterImageModal src={character.image} alt={character.name} />
        )}
        <S.CharacterDetails>
          <S.CharacterTitle>{character.name}</S.CharacterTitle>

          {character.alternate_names &&
            character.alternate_names.length > 0 && (
              <S.CharacterText>
                Also known as: {character.alternate_names.join(", ")}
              </S.CharacterText>
            )}

          {character.species && (
            <S.CharacterText>Species: {character.species}</S.CharacterText>
          )}
          {character.gender && (
            <S.CharacterText>Gender: {character.gender}</S.CharacterText>
          )}
          {character.house && (
            <S.CharacterText>House: {character.house}</S.CharacterText>
          )}

          {character.dateOfBirth && (
            <S.CharacterText>
              Birth: {character.dateOfBirth}{" "}
              {character.yearOfBirth ? `(${character.yearOfBirth})` : ""}
            </S.CharacterText>
          )}

          {character.ancestry && (
            <S.CharacterText>Ancestry: {character.ancestry}</S.CharacterText>
          )}
          {character.eyeColour && (
            <S.CharacterText>Eye Color: {character.eyeColour}</S.CharacterText>
          )}
          {character.hairColour && (
            <S.CharacterText>
              Hair Color: {character.hairColour}
            </S.CharacterText>
          )}

          {character.wand && (
            <S.CharacterText>
              Wand: {character.wand.wood}, {character.wand.core} core
              {character.wand.length ? `, ${character.wand.length} inches` : ""}
            </S.CharacterText>
          )}

          {character.patronus && (
            <S.CharacterText>Patronus: {character.patronus}</S.CharacterText>
          )}

          {character.hogwartsStudent !== undefined && (
            <S.CharacterText>
              Hogwarts Student: {character.hogwartsStudent ? "Yes" : "No"}
            </S.CharacterText>
          )}
          {character.hogwartsStaff !== undefined && (
            <S.CharacterText>
              Hogwarts Staff: {character.hogwartsStaff ? "Yes" : "No"}
            </S.CharacterText>
          )}

          {character.actor && (
            <S.CharacterText>Actor: {character.actor}</S.CharacterText>
          )}
          {character.alive !== undefined && (
            <S.CharacterText>
              Status: {character.alive ? "Alive" : "Deceased"}
            </S.CharacterText>
          )}
        </S.CharacterDetails>
        <S.CloseButton onClick={onClose}>Fechar</S.CloseButton>
      </S.ModalContainer>
    </>
  );
};

export default CharacterModal;
