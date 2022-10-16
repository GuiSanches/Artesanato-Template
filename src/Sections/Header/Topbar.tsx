import Image from "next/image";
import { FC } from "react";
import { slide as Menu } from "react-burger-menu";

import logo from "../../../public/images/logo.png";
import {
  ButtonWrapper,
  Container,
  Item,
  LogoContainer,
  Navbar,
} from "./styles";

const Topbar: FC = () => {
  return (
    <Navbar>
      <Container>
        <LogoContainer>
          <Image
            src={logo}
            alt="bordados logo"
            priority
            layout="fill"
            width={140}
            objectFit="contain"
          />
        </LogoContainer>

        <ButtonWrapper id="outer-container">
          <Menu outerContainerId="outer-container" width={280} right>
            <Item className="menu-item" href="#portfolio">
              Portfólio
            </Item>
            <Item className="menu-item" href="#depoimentos">
              Depoimentos
            </Item>
            <Item className="menu-item" href="#contato">
              Contato
            </Item>
          </Menu>
        </ButtonWrapper>
      </Container>
    </Navbar>
  );
};

export default Topbar;
