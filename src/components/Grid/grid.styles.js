import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 12vmin);
  grid-template-rows: repeat(4, 12vmin);
  grid-gap: 5vmin;

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(4, 16vmin);
    grid-template-rows: repeat(4, 16vmin);
    grid-gap: 4vmin;
  }
`;
export const Tile = styled.div`
  background: ${({ background }) => background}};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;

  color: ${({ color }) => color};
  font-size: 7vmin;
  transition: all 0.2s ease-in-out;
  animation: ${({ animation }) => animation} 3s ease-in-out;


@media screen and (max-width: 420px) {
    font-size: 9vmin;
  }

  :active {
    background: #6395b8;
    color: #6395b8;
  }

  @keyframes fade-out {
    from {
      color: white;
    }
    to {
      color: #304859;
    }
  }


  
`;
