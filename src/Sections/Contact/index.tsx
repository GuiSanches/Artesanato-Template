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
          content="@bordadosflores"
          href="whatsapp.com"
        />
        <SocialItem
          icon={Icon}
          content="(11) 95220-6881"
          href="whatsapp.com"
        />
        <SocialItem
          icon={Icon}
          content="@claudiaflores"
          href="whatsapp.com"
        />
        <SocialItem
          icon={Icon}
          content="claudiaflores1903@gmail.com"
          href="whatsapp.com"
        />
      </SocialMedias>

      <PostIt content={postit} />
    </Container>
  );
};

export default Contact;
