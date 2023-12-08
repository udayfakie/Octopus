import React from 'react'
import styled from 'styled-components';


const Home = () => {
  return (
    <Container>
      <H1>home</H1>
   
    </Container>
  )
}

export default Home
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  z-index: 10000;
  
`;
const H1 = styled.h1`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%; */
  /* color:#fff ; */
  z-index: 10000;
  /* background-image: linear-gradient(lightgreen, teal); */
`;