import { styled } from 'styled-components';

export const TextEmail = styled.h1`
display: flex;
justify-content: center;
font-family: sans-serif;
color: white;
`;
export const ContainerEmail = styled.div`
display: flex;
flex-direction: column;
`;
export const Container = styled.div`
overflow-y: auto;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: #101011;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffef11;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #7a791c;
  }
`;