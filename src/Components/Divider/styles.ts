import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  position: absolute;
`;

export const Stripes = styled.div`
  display: flex;
  align-self: center;
  flex-direction: row;
  position: absolute;
  box-sizing: border-box;
  align-content: center;
`;

export const Stick = styled.div<{ height: number }>`
  display: flex;
  align-self: center;
  width: 6px;
  background-color: #e6b97e;
  border-radius: 17px;
  margin-right: 6px;

  height: ${(props) => props.height}px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
