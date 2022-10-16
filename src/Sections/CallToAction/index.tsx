import Image from "next/image";
import { FC } from "react";
import {
  BackgroundFilter,
  BackgroundWrapper,
  Button,
  Container,
  Content,
  Title,
} from "./styles";

import backgroundSrc from "../../../public/images/background.jpg";

const CallToAction: FC = () => {
  const title = "Uma forma incrível de personalizar a sua festa";
  const button = "SOLICITAR ORÇAMENTO";
  return (
    <Container>
      <BackgroundWrapper>
        <Image
          src={backgroundSrc}
          alt="bordados logo"
          priority
          layout="fill"
          objectFit="cover"
        />
        <BackgroundFilter />
      </BackgroundWrapper>
      <Content>
        <Title>{title}</Title>
        <Button href="">{button}</Button>
      </Content>
    </Container>
  );
};

export default CallToAction;
