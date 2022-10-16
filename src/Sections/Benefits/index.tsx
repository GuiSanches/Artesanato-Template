import { FC } from "react";
import Card from "../../Components/Card";
import { Container, Title, List } from "./styles";

interface ReasonsType {
  logoSrc?: string;
  title: string;
  description: string;
}

const reasons: ReasonsType[] = [
  {
    title: "Único",
    description:
      "Todas as nossas produções são personalizadas e únicas, feitas com carinho e total exclusividade.",
  },
  {
    title: "Mágico",
    description:
      "Todas as nossas produções são personalizadas e únicas, feitas com carinho e total exclusividade.",
  },
  {
    title: "Ilimitado",
    description:
      "Todas as nossas produções são personalizadas e únicas, feitas com carinho e total exclusividade.",
  },
];

const Benefits: FC = () => {
  const title = "Encantos do artesanato";

  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {reasons.map(({ title, description, logoSrc }) => (
          <Card
            key={title}
            title={title}
            description={description}
            logoSrc={logoSrc}
          />
        ))}
      </List>
    </Container>
  );
};

export default Benefits;
