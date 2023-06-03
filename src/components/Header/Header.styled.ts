import styled from 'styled-components';

export const Wrapper = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.accent};

  color: ${({ theme }) => theme.contrastText};
`;

export const Title = styled.h1`
  margin: 0;

  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`;
