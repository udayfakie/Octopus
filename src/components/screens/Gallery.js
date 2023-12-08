import React, { useState } from "react";
import styled from "styled-components";
import { GrNext, GrPrevious } from "react-icons/gr";
import IMG from "../slides/Slides";
const Gallery = () => {
  const [currentPic, setCurrentPic] = useState(0);
  const imgValues = Object.values(IMG);
  const totalImages = imgValues.length;

  const activePic = (index) => {
    setCurrentPic(index);
    console.log(index);
  };
  const NextPic = () => {
    setCurrentPic((prev) => (prev + 1) % totalImages);
  };
  const previous = () => {
    setCurrentPic((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <Container>
      <button onClick={previous}>
        <GrPrevious />
      </button>

      {/* <Images src={imgValues[currentPic]} alt="" /> */}

      <Div>
        {imgValues.map((item, i) => (
          <Thumbnail
            key={i}
            src={item}
            alt=""
            onClick={() => activePic(i)}
            isActive={i === currentPic}
          />
        ))}
      </Div>

      <button onClick={NextPic}>
        <GrNext />
      </button>
    </Container>
  );
};

export default Gallery;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(#eee, #5fd5fd, #eee);
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
`;

const Thumbnail = styled.img`
  height: ${(props) => (props.isActive ? " 500px" : "60px")};
  width: ${(props) => (props.isActive ? "600px" : " 80x")};
  border-radius: 10px;
  border: ${(props) => (props.isActive ? "0.1px solid" : "none")};
  cursor: pointer;
`;
