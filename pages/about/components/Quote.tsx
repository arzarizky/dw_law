import React, { useRef } from "react";
import { Box, Fade, ScaleFade } from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";

function Quote() {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-50px" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <div className="quote">
      <Box className="md:px-20 md:py-20 px-20 py-16">
        <Box className="flex justify-center mt-52" ref={ref}>
          <ScaleFade initialScale={0.9} in={inViewport}>
            <h1 className="text-6xl md:text-center text-white mb-4">
              “A Law Is Valuable, Not Because It <br /> Is A Law, But Because
              There <br /> Is Right In It.”
            </h1>
          </ScaleFade>
        </Box>
        <Box className="flex md:justify-center" ref={ref}>
          <ScaleFade initialScale={0.95} in={inViewport}>
            <text className="text-xl text-center font-light text-white">
              Henry Ward Beecher
            </text>
          </ScaleFade>
        </Box>
      </Box>
      <Box className="md:px-20 pb-20 px-10"></Box>
    </div>
  );
}

export default Quote;
