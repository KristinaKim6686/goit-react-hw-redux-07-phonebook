import styled from "@emotion/styled";
export const List = styled.ul`
  list-style: none;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 16px;
  padding: 0;
  margin: 0;
`;
export const ListItem = styled.li`
  margin: 20px;
`;
export const Info = styled.p`
  color: rgb(12, 33, 197);
`;
export const Button = styled.button`
  padding: 5px 10px;
  border: 1px white;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  color: whitesmoke;
  border-radius: 8px;
`;
