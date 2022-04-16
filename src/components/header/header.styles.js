import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vmin 20vmin;
  @media screen and (max-width: 820px) {
    padding: 5vmin 5vmin;
  }

  #Title {
    font-size: clamp(20px, 6vmin, 40px);
  }
`;

export const Content = styled.div`
  #restart {
    margin-right: 20px;
    border: none;
    border-radius: 26px;
    width: 127px;
    height: 52px;
    font-size: 20px;
    background: #fda214;
    color: white;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  #new {
    border-radius: 26px;
    border: none;
    width: 149px;
    height: 52px;
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    background: #6395b8;
    color: white;
    &:hover {
      background: #fda214;
      color: white;
    }
  }

  @media screen and (max-width: 600px) {
    #restart {
      margin-right: 10px;
      border-radius: 26px;
      width: 80px;
      height: 25px;
      font-size: 12px;
    }
    #new {
      border-radius: 26px;
      width: 90px;

      height: 25px;
      font-size: 12px;
    }
  }
`;
