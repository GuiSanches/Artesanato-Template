import Image from "next/image";
import { FC } from "react";
import {
  BackBox,
  Container,
  FrontBox,
  Header,
  ImageWrapper,
  Subcontent,
  TextContent,
  Wrapper,
  Content
} from "./styles";

import aboutSrc from "../../../public/images/artesa.jpg";

const AboutCard: FC = () => {
  const header = "Sempre com foco no aprendizado";
  const subcontent =
    "Nossa querida artesã Márcia vem criando com muito amor produtos exclusivos e de qualidade.";

  return (
    <Container>
      <Wrapper>
        <FrontBox>
          <Content>
            <ImageWrapper>
              <Image
                src={aboutSrc}
                alt="Foto da artesã"
                layout="fill"
                objectFit="cover"
                width={"100%"}
                height={100}
              />
            </ImageWrapper>

            <TextContent>
              <Header>{header}</Header>
              <Subcontent>{subcontent}</Subcontent>
            </TextContent>
          </Content>
        </FrontBox>
        <BackBox></BackBox>
      </Wrapper>
    </Container>
  );
};

export default AboutCard;
