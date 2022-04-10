import styled from "@emotion/styled";

export const Form = styled.form`
  max-width: 90vw;
`;

export const Label = styled.label`
  border: 1px white;
  border-radius: 8px;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: whitesmoke;
`;

export const Input = styled.input`
  color: whitesmoke;
  background-color: transparent;
  border: none;
  margin-bottom: 15px;
  margin-left: 10px;
  &:focus {
    outline: none;
    background-color: transparent;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: 1px white;
  color: whitesmoke;
  border-radius: 8px;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;
  background-color: transparent;
  font-size: inherit;
`;
