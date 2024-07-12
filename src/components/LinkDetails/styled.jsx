import styled, { createGlobalStyle } from 'styled-components';
export const PageStyles = createGlobalStyle`
html {
    scroll-behavior: smooth;
}
.link {
  text-decoration: none;
}
`;
export const Line = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100px;
  margin: auto;
  border: 1px solid white;
`;
export const Paragrafo = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  font-size: 20px;
  color: white;
  font-family: sans-serif;
`;