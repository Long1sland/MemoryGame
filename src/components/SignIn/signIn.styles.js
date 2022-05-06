import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  #Title {
    font-size: 9vmin;
    margin-bottom: 0px;
    margin-top: 0px;
  }
  #grid {
    display: grid;
    grid-template-columns: repeat(3, 10vmin);
    grid-template-rows: repeat(3, 10vmin);
    grid-gap: 6vmin;
  }
  .grid-item {
    background: #304859;
    border-radius: 50%;
    animation: color 0.5s forwards;
    animation-delay: calc(var(--order) * 0.5s);

    @keyframes color {
      from {
        background: #304859;
      }
      to {
        background: orange;
      }
    }
  }
  button {
    display: flex;
    align-items: center;
    background: none;
    border: 1px solid black;
    border-radius: 30px;
    padding: 0px 3px;
    width: 60vmin;
    animation: floating 20s infinite;
    #sign-in {
      font-size: 4vmin;
      margin: 0;
      color: black;
    }

    @keyframes floating {
      0% {
        transform: translate(0px, 0px);
      }
      10% {
        transform: translate(1px, -3px);
      }
      20% {
        transform: translate(-2px, -3px);
      }
      30% {
        transform: translate(1px, -3px);
      }
      40% {
        transform: translate(0px, 4px);
      }
      50% {
        transform: translate(-2px, 3px);
      }
      60% {
        transform: translate(0px, -3px);
      }
      70% {
        transform: translate(2px, 2px);
      }
      80% {
        transform: translate(1px, -3px);
      }
      90% {
        transform: translate(-2px, 1px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    }
    img {
      width: 11vmin;
      margin-right: 20px;
    }
  }
`;
