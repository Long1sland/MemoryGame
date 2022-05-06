import styled from "styled-components"
import { Button } from "../NewGame/newGame.styles"



export const Buttons = styled(Button)`
 border-radius: 26px;
    border: none;
    padding: 2vmin 3vmin;
    font-size: minmax(4vmin, 20px);
    background: #dfe7ec;
    color: #304859; 
    transition: all 0.2s ease-in-out;
    animation: shake 2s infinite;
    cursor: pointer;
    @keyframes shake {
      0% {
        transform: translateX(5px);
      }
      3% {
        transform: translateX(-5px);
      }
      6% {
        transform: translateX(2px);
      }
      9% {
        transform: translateX(-2px);
      }
      12% {
        transform: translateX(0px);
      }

      100% {
        transform: translateX(0px);
      }
    }
    &:hover {
      background: #6395b8;
      color: white;
    }
`