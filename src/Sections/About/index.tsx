import { FC } from "react";
import AboutCard from "../../Components/AboutCard";
import { Container, Header } from "./styles";


const About : FC = () => {
    const title = 'A artesã'

    return (
        <Container>
            <Header>{title}</Header>

            <AboutCard />
        </Container>
    )
}

export default About;