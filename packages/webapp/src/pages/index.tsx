import React, { ReactElement, useEffect, useRef } from "react";
import { Box, Flex, Grid, Link, Text, VStack } from "@chakra-ui/react";
import TextTypeing from "../Components/TextTypeing";
import { StaticImage } from "gatsby-plugin-image";
const RealSoftwarePage = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size in pixels
    const width = 800; // Canvas width in pixels
    const height = 600; // Canvas height in pixels
    canvas.width = width;
    canvas.height = height;

    // Parameters
    const depth = 5; // Number of iterations
    const size = 200; // Size of the initial triangle in pixels
    const startX = width / 2 - size / 2; // Center horizontally
    const startY = height / 2 - (size * Math.sqrt(3)) / 4; // Center vertically

    // Draw Koch Snowflake
    function drawKochSnowflake(x1, y1, x2, y2, depth) {
      if (depth === 0) {
        // Draw a straight line segment
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1;
        ctx.stroke();
        return;
      }

      // Calculate the 1/3 and 2/3 points
      const xA = x1 + (x2 - x1) / 3;
      const yA = y1 + (y2 - y1) / 3;
      const xB = x1 + ((x2 - x1) * 2) / 3;
      const yB = y1 + ((y2 - y1) * 2) / 3;

      // Calculate the tip of the equilateral "bump" (folding outward symmetrically)
      const dx = xB - xA;
      const dy = yB - yA;
      const xC = xA + dx / 2 - (dy * Math.sqrt(3)) / 2;
      const yC = yA + dy / 2 + (dx * Math.sqrt(3)) / 2;

      // Recursively draw each segment
      drawKochSnowflake(x1, y1, xA, yA, depth - 1);
      drawKochSnowflake(xA, yA, xC, yC, depth - 1);
      drawKochSnowflake(xC, yC, xB, yB, depth - 1);
      drawKochSnowflake(xB, yB, x2, y2, depth - 1);
    }

    // Initialize
    function drawSnowflake() {
      const x1 = startX;
      const y1 = startY;
      const x2 = startX + size;
      const y2 = startY;
      const x3 = startX + size / 2;
      const y3 = startY - (size * Math.sqrt(3)) / 2;

      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // Draw the three sides of the triangle
      drawKochSnowflake(x1, y1, x2, y2, depth); // Bottom side
      drawKochSnowflake(x2, y2, x3, y3, depth); // Right side
      drawKochSnowflake(x3, y3, x1, y1, depth); // Left side
    }

    // Draw the snowflake
    drawSnowflake();
  });

  return (
    <Box>
      <Box
        bg="#1A6D41"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        position={"relative"}
        w={"100%"}
      >
        <canvas
          style={{
            width: "1000px",
            height: "1000px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          ref={ref}
        />
        <Text
          fontSize={["4xl", "7xl"]}
          fontWeight="bold"
          fontFamily="'Horizons', sans-serif"
          color="white"
          textTransform="uppercase"
        >
          Real Software
        </Text>

        <Text
          fontSize={["2xl", "4xl"]}
          fontFamily="'Horizons', sans-serif"
          color="white"
          mt={4}
        >
          Real <TextTypeing as={"span"} texts={["Impact", "Progress"]} />
          In The Real World
        </Text>
      </Box>
      <Box minH={"100vh"} bg={"#1A1F2C"}>
        <Flex
          flexDirection={"column"}
          justifyContent="start"
          alignItems="center"
          h={"100%"}
        >
          <Box
            width={["100%", "100%", "80%", "80%"]}
            mt={["20px", "20px", "20px", "20px"]}
            p={"8px"}
          >
            <TextTypeing
              typingSpeed={50}
              backspaceSpeed={0}
              textAlign={"left"}
              color={"#27A744"}
              fontSize={["24px", "24px", "24px", "40px"]}
              h={["280px", "280px", "200px", "200px"]}
              fontFamily={"Courier New"}
              texts={[
                `
 Real-world impact is measured by delivering measurable outcomes that address real challenges and create tangible results. True progress is not driven by reliance on elaborate tools or adherence to methodologies for their own sake.`,
                `When software surpasses the limits of hardware, it demands something new.
Building its own hardware turns vision into reality without limits, creating tools that shape the future.`,
              ]}
            />
          </Box>
          <Box w={"100%"} px={"8px"} mt={"40px"}>
            <Grid
              templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
              gap={"16px"}
              mx={"auto"}
              mt={["40px", "40px", "40px", "40px"]}
              w={["100%", "100%", "80%"]}
              alignItems="stretch"
              gridAutoRows={"auto"}
              height="100%"
            >
              <ArticleCard
                image={
                  <StaticImage
                    src="./1724157535434.png"
                    objectFit={"cover"}
                    alt="Low Level Rust on ESP32"
                    layout="fullWidth"
                    height={270}
                  />
                }
                link={
                  "https://www.linkedin.com/pulse/low-level-rust-esp32-without-hardware-abstraction-layer-rayudu-fwrce/"
                }
                title={"Low level Rust on ESP32"}
                description={`When programming in Rust for ESP32 with a Hardware Abstraction Layer
            (HAL) like esp-hal we typically write code using a higher-level
            interface to control...`}
              />

              <ArticleCard
                image={
                  <StaticImage
                    src="./cross-coreleation.png"
                    objectFit={"cover"}
                    alt="AI Without ML"
                    layout="fullWidth"
                    height={270}
                  />
                }
                link={"https://www.youtube.com/watch?v=juvza_AzkHI"}
                title={"AI without ML"}
                description={`AI without ML. This project is a result of my exploration done 15 years ago to find application of some digital signal processing concepts. This is object tracking...`}
              />

              <ArticleCard
                image={
                  <StaticImage
                    src="./1722592764680.png"
                    objectFit={"cover"}
                    alt="Streamlining Web Application Diagnostics"
                    layout="fullWidth"
                    height={270}
                  />
                }
                link={
                  "https://www.linkedin.com/pulse/streamlining-web-application-diagnostics-azure-functions-rayudu-weiie/?trackingId=KVkhoMJKSniReR8OC%2BGG%2Fg%3D%3D"
                }
                title={"Streamlining Web Application Diagnostics"}
                description={`Web application diagnostics on the client side involve, identifying, and troubleshooting issues that occur in a web application. In this process, we collect data for...`}
              />

              <ArticleCard
                image={
                  <StaticImage
                    src="../images/earthandmars.webp"
                    objectFit={"cover"}
                    alt="Earth To Mars Travel"
                    layout="fullWidth"
                    height={270}
                  />
                }
                link={"/earth-to-mars"}
                title={"Earth To Mars Travel"}
                description={`A Hohmann transfer is a fuel-efficient method for moving a spacecraft between two orbits, commonly used for interplanetary travel...`}
              />
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default RealSoftwarePage;

const ArticleCard = ({
  image,
  title,
  description,
  link,
}: {
  image: ReactElement;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      sx={{
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      <Box border={"1px solid #2d374f"} bg="#1A1F2C" color={"#27A744"}>
        <Box w={"100%"} overflow="hidden">
          {image}
        </Box>
        <VStack align="start" spacing={2} p={4}>
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="lg">{description}</Text>
        </VStack>
      </Box>
    </Link>
  );
};
