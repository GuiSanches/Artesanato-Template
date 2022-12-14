import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 20em;
  background-color: green;
  padding-left: 1em;
  position: relative;
  margin-top: 5em;
  font-family: "Fuzzy Bubbles";
`;

export const BackgroundWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BackgroundFilter = styled.div`
  display: flex;
  background-image: linear-gradient(to bottom right, #643981, #ebd1fe);
  opacity: 0.7;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

export const Title = styled.h3`
  font-size: 2.3em;
  line-height: 1.1em;
  padding-right: 0.8em;
  color: #ffff;
`;

export const Button = styled.a`
  display: flex;
  width: fit-content;
  border-radius: 0.6em;
  font-weight: 700;
  padding: 0.8em 1.2em;
  background-color: #fcff34;
  color: #36254e;
  font-size: 0.9em;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    background-color: #ffff;
    color: #36254e;
  }
`;
