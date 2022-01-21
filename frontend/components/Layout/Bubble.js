import { useEffect, useRef, useState } from "react";
import drawBubbles from "./DrawBubble";
import styled from "styled-components";

const ParticleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

function Bubble() {
  const canvasRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  window.addEventListener("resize", () => {
    if (canvasRef.current) {
      setWidth(canvasRef.current.offsetWidth);
      setHeight(canvasRef.current.offsetHeight);
    }
  });

  useEffect(() => {
    setHeight(canvasRef.current.offsetHeight);
    setWidth(canvasRef.current.offsetWidth);
    if (canvasRef && width && height) {
      drawBubbles(canvasRef, width, height);
    }
  }, [height, width, canvasRef]);

  return (
    <>
      <ParticleContainer>
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          style={{
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </ParticleContainer>
    </>
  );
}

export default Bubble;
