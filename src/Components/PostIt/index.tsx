import { FC } from "react";
import { BackBox, Container, FrontBox, Message, Wrapper } from "./styles";

interface Props {
  content: string;
}

const PostIt: FC<Props> = ({ content }) => {
  return (
    <Container>
      <Wrapper>
        <FrontBox>
          <Message>{content}</Message>
        </FrontBox>
        <BackBox></BackBox>
      </Wrapper>
    </Container>
  );
};

export default PostIt;
