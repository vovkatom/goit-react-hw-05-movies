import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 40px;
  }
`;

export const Item = styled.li`
  img {
    border-radius: 5px;
  }
`;
