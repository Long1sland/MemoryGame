import styled from "styled-components";

export const Wrapper = styled.div`
  height: 8vmin;
  min-height: 35px;
  width: 20vmin;
  min-width: 90px;
  background: #dfe7ec;
  border-radius: 10px;
  padding: 2.5vmin 2vmin;
`;

export const Content = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  font-size: clamp(13px, 4vmin, 17px);
`;
