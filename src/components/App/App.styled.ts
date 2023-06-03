import { transparentize } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  height: 100%;
`;

export const Main = styled.main`
  grid-area: main;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Text = styled.div`
  font-size: 1.2rem;
  margin: 2rem 1rem;
  text-align: center;
`;

export const Loader = styled.div<{ loading: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => transparentize(0.8, theme.contrastText)};

  ${({ loading }) => !loading && 'display: none;'}
`;
