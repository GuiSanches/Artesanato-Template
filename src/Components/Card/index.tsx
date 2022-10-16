import Image from "next/image";
import { FC } from "react";
import { Container, IconWrapper, Content, Title, Description } from "./styles";

import defaultSrc from "../../../public/images/doll.png";

interface Props {
  logoSrc?: string;
  title: string;
  description: string;
}

const Card: FC<Props> = ({ logoSrc, title, description }) => {
  return (
    <Container>
      <IconWrapper>
        <Image
          src={logoSrc || defaultSrc}
          objectFit="contain"
          width={64}
          alt="motivos icone"
        />
      </IconWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
};

export default Card;
