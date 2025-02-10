import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import * as S from "./styles";
import { FaStar } from "react-icons/fa";

interface CharacterCardProps {
  id: string;
  name: string;
  house?: string;
  image?: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ id, name, house, image }) => {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  const handleFavoriteClick = () => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite({ id, name, house, image });
    }
  };

  return (
    <S.Card>
      {image && <S.CharacterImage src={image} alt={name} />}
      <S.Title>{name}</S.Title>
      {house && <S.InfoText>House: {house}</S.InfoText>}
      <S.FavoriteButton $isFavorite={isFavorite(id)} onClick={handleFavoriteClick}>
        <FaStar size={20} color={isFavorite(id) ? "#FFD700" : "#ccc"} />
      </S.FavoriteButton>
    </S.Card>
  );
};

export default CharacterCard;