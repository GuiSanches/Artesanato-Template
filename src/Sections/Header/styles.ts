import styled from "styled-components";

export const Navbar = styled.header`
  display: flex;
  width: 100%;
  height: 5em;
  background-color: #ffffff;

  padding-left: 3em;
  position: fixed;
  top: 0;
  z-index: 20;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 0.2em 0.4em;
  justify-content: space-between;
  overflow: hidden;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 140px;
  position: relative;
`;

export const Item = styled.a`
  color: #FFF;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  align-self: center;
  width: 36px;
  height: 30px;
`;
