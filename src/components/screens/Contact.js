import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <input type="text" />
      <input type="text" />
     <textarea name="" id="" cols="30" rows="10"></textarea>
      <Button>Submit</Button>
    </Container>
  );
};

export default Contact;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  
`;
const Button = styled.button`

`;
