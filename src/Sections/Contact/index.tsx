import Image from "next/image";
import { FC } from "react";
import SocialItem from "../../Components/SocialItem";
import { Container, SocialMedias, Title } from "./styles";
import src from "../../../public/images/instagram.png";
import PostIt from "../../Components/PostIt";

const title = "Contatos";

const Icon = (
  <Image
    src={src}
    alt="social media"
    width={64}
    height={64}
    layout="fill"
    objectFit="contain"
  />
);

const Contact: FC = () => {
  const postit = "Não perca mais tempo, solicite um orçamento já! ;)";

  return (
    <Container>
      <Title>{title}</Title>

      <SocialMedias>
        <SocialItem
          icon={Icon}
          content="@bordadosflores - (instagram)"
          href="whatsapp.com"
        />
        <SocialItem
          icon={Icon}
          content="@bordadosflores - (whatsapp)"
          href="whatsapp.com"
        />
        <SocialItem
          icon={Icon}
          content="@bordadosflores - (telegram)"
          href="whatsapp.com"
        />
        <SocialItem
          icon={Icon}
          content="@bordadosflores - (email)"
          href="whatsapp.com"
        />
      </SocialMedias>

      <PostIt content={postit} />
    </Container>
  );
};

export default Contact;
