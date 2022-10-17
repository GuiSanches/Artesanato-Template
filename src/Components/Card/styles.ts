import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.2em;
  margin-bottom: 0.8em;
`;

export const IconWrapper = styled.div`
    position: relative;
    margin-bottom: 0.4em;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
  color: #3c1b5a;
  text-align: center;
  margin: 0;
  margin-bottom: 0.4em;
  font-family: "Fuzzy Bubbles", cursive;
  margin-top: 0.2em;
  font-size: 1.7em;

`;

export const Description = styled.p`
  color: #59575a;
  text-align: center;
  line-height: 1.2em;
  margin: 0;
`;
