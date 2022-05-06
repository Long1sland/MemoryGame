import styled from "styled-components";

export const Backgound = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100vw;
  position: fixed;
  opacity: 0;
  animation: fade-in 1s forwards;

  @keyframes fade-in {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(8px);
    }
  }
`;

export const Card = styled.div`
  height: 80vmin;
  padding: 5vmin;
  width: 70vmin;
  background: white;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 2vmin;
  text-align: center;
  overflow-y:scroll;
  
 //display: flex;
 //flex-direction: column;
 //justify-content: space-between;
 //align-items: center;
  h1 {
    font-size: 7vmin;
    margin: 0px;
  }

  sup {
    font-size: 1vmin;
  }

  .play-info {
    display: flex;
    justify-content: space-between;
  }

  #new {
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
  }
`;
