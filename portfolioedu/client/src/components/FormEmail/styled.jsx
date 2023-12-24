import { styled } from 'styled-components';

export const Email = styled.div`
display: flex;
flex-direction: column;
`;
export const Container = styled.div`
display: flex;
margin: auto;
`;
export const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const Button = styled.button`
  width: 300px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;
