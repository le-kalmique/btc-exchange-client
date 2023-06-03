import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

export const Greeting = styled.div`
  font-size: 1.2rem;
`;

export const LinkButton = styled.a`
  color: ${({ theme }) => theme.contrastText};
  font-size: 0.85rem;
`;
