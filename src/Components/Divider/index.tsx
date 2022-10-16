import { FC } from "react";
import { Container, Stick, Stripes } from "./styles";

const Divider: FC = () => {
  return (
    <Container>
      <Stripes>
        <Stick height={36}/>
        <Stick height={45}/>
        <Stick height={36}/>
      </Stripes>
    </Container>
  );
};

export default Divider;
