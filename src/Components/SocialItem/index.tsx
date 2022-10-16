import { FC } from "react";
import { Card, Container, Icon, Link } from "./styles";

interface Props {
  icon: JSX.Element;
  href: string;
  content: string;
}

const SocialItem: FC<Props> = ({ icon, content, href }) => {
  return (
    <Container>
      <Card>
        <Icon>{icon}</Icon>
        <Link href={href} target="_blank">
          {content}
        </Link>
      </Card>
    </Container>
  );
};

export default SocialItem;
