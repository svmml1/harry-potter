import styled from "styled-components";

export const Card = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  width: 250px;
  height: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 300px;
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 10px;
`;

export const InfoText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 10px;
`;

export const FavoriteButton = styled.button<{ $isFavorite: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.background};
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  width: 300px;
  max-width: 90%;
  text-align: left;
`;

export const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

export const CharacterDetails = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  line-height: 1.5;
`;

export const CharacterImageModal = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const CharacterText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 5px 0;
`;

export const CharacterTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;