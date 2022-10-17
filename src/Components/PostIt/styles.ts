import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  justify-content: center;
`;

const size = 220;
const padding = 16;

const Box = css`
  width: ${size}px;
  height: ${size}px;
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: ${padding}px;
`;

export const BackBox = styled.div`
  ${Box}
  background-color: #ECAB59;
  position: absolute;
  bottom: -${padding}px;
  left: -${padding}px;
  z-index: 0;
`;

export const FrontBox = styled.div`
  display: flex;
  align-items: center;
  ${Box}
  background-color: #B8D9E2;
  z-index: 1;
  position: relative;
`;

export const Message = styled.h4`
  font-family: "Fuzzy Bubbles";
  font-size: 1.4em;
  text-align: center;
  color: #c2a0aa;
  margin: 0;
`;
