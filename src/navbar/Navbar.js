import { useRef } from "react";

import styled from "styled-components";
import Gallery from "../components/screens/Gallery";
import Home from "../components/screens/Home";
import { AiOutlineSearch } from "react-icons/ai";
import { GiOctopus } from "react-icons/gi";
import Contact from "../components/screens/Contact";

const Navbar = () => {
  const home = useRef(null);
  const gallery = useRef(null);
  const contact = useRef(null);
  const ref = useRef(null);

  const scrollToSection = (eleRef) => {
    window.scrollTo({ top: eleRef.current.offsetTop, behavior: "smooth" });
  };

  const HandleInput = () => {
    const refValue = ref.current.value;
    console.log(refValue);
  };

  return (
    <>
      <Container>
        <LogoContainer>
          <SPAN onClick={() => scrollToSection(home)} to="/">
            <StyledGiOctopus />
          </SPAN>
        </LogoContainer>
        <SearchBarContainer>
          <Input ref={ref} placeholder="  Search" type="text" />
          <Button onClick={HandleInput}>
            <StyledAiOutlineSearch />
          </Button>
        </SearchBarContainer>
        <LiContainer>
          <Li onClick={() => scrollToSection(home)}>Home</Li>
          <Li onClick={() => scrollToSection(gallery)}>Gallery</Li>
          <Li onClick={() => scrollToSection(contact)}>Contact Us</Li>
        </LiContainer>
      </Container>
      <Section ref={home}>
        <Home />
      </Section>
      <Section ref={gallery}>
        <Gallery />
      </Section>
      <Section ref={contact}>
        <Contact />
      </Section>
    </>
  );
};

export default Navbar;

const Container = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: #5564;
`;

const Section = styled.section`
  height: 100vh;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 15px;
  font-weight: 900;
  font-family: sans-serif;
  font-size: 20px;
  color: #000;
`;

const SPAN = styled.span`
  color: #fff;
  font-size: 35px;
  display: flex;
  size: 50px;
  align-items: center;
  margin-left: 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  border-radius: 10px;
  height: 27px;
  width: 300px;
  border: none;
  color: #fff;
  background-color: #000;
`;

const Button = styled.button`
  border-radius: 10px;
  height: 35px;
  border: none;
  width: 100px;
  background-color: #000;
  color: #fff;
  margin-left: 0.3rem;
`;
const StyledAiOutlineSearch = styled(AiOutlineSearch)`
  font-size: 25px;
  margin-top: 0.3rem;
`;
const StyledGiOctopus = styled(GiOctopus)`
  font-size: 65px;
  color: #000;
`;
