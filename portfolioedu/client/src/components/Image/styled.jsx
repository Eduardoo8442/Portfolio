import styled, { createGlobalStyle } from 'styled-components';

export const PageStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0px;
    background-color: #101414;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.javascript {
  color: yellow;
}
.typescript {
  color: #2626bb;
}
.linguagem {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 600ms ease-out forwards;
}
.icon {
margin: 0;
opacity: 0;
animation: fadeIn 600ms ease-out forwards;
}
`;
export const Div = styled.div`
  position: relative;
  overflow: hidden;
  height: auto;
  padding-bottom: 5%;
  @media (max-width: 600px) {
    padding-bottom: 50%;
    } 
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/img/imagemain.webp');
    background-size: cover; /* Ajustado para cobrir a área da div */
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: brightness(0.5) blur(7px);
    z-index: -1;
  }

  > div {
    color: white;
    padding: 20px;
    z-index: 1;
  }
`;