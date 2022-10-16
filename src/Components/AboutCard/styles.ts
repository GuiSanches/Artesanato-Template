import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  justify-content: center;
`;

const size = 220;
const padding = 8;

const Box = css`
  width: ${size}px;
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: ${padding}px;
`;

export const BackBox = styled.div`
  ${Box}
  height: 100%;
  background-color: #EEAA58;
  position: absolute;
  bottom: -${padding}px;
  left: -${padding}px;
  z-index: 0;
`;

export const FrontBox = styled.div`
  display: flex;
  align-items: center;
  ${Box}
  background-color: #CBA0A9;
  z-index: 1;
  position: relative;
  padding: 0.8em 0.4em;
`;

export const Message = styled.h4`
  font-size: 1.6em;
  text-align: center;
  color: #c2a0aa;
  margin: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.8em;
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: 1.2em;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h4`
    color: #645F74;
    font-size: 1.6em;
    font-weight: 700;
    margin: 0;
`;

export const Subcontent = styled.p`
    color: #FFFF;
    font-size: 1.1em;
    line-height: 1.3em;
`;
