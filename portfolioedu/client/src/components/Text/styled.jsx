import styled, { createGlobalStyle } from "styled-components";
export const PageStyles = createGlobalStyle`
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
span {
  color: #eb0bdf;

}
@font-face {
    font-family: 'Whitney-BoldItalic';
    src: url('fonts/whitney-bolditalicsc.otf') format('opentype');
}
`;
export const Paragrafo = styled.p`
color: white;
`;
export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: 'Whitney-BoldItalic', sans-serif;
font-size: 40px;
margin: 0;
opacity: 0;
animation: fadeIn 1s ease-out forwards;
`;