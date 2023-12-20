import { styled, createGlobalStyle } from 'styled-components';


export const HoverIcon = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 400px; 
  @media (max-width: 600px) {
    right: auto;
    margin-top: 120px;
    } 
  display: flex;
  align-items: center;
  background-color: #212222d5;
  width: 200px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid grey;
  margin-top: 50px;
  z-index: 1; 
  opacity: 0;
  transition: opacity 0.2s ease; 
`;
export const PageStyle = createGlobalStyle`
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    display: flex;
    justify-content: center;
    z-index: 0;
    img {
      width: 100px;
      margin-top: 14px;
      border-radius: 50%;
    }
    &:hover + ${HoverIcon} {
      opacity: 1;
      transition: opacity 0.3s ease; 
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;


export const Paragrafo = styled.p`
  color: white;
  font-family: sans-serif;
  font-weight: bold;
`;
