import React, { ReactElement } from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import TextTypeing from "../Components/TextTypeing";
import { StaticImage } from "gatsby-plugin-image";
import { ArrowBackIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

const RealSoftwarePage = () => {
  const distance = useIframeMessage();
  const distanceInMillionKM = ((distance || 105000000) / 1000000).toFixed(2);
  const distanceInKM = distance.toFixed(2);
  const distanceInAU = (distance / 149597870.7).toFixed(7);
  const lightTravelTime = distance / 299792.458;

  return (
    <Box w={"100%"} bg={"#1A1F2C"} color={"#e3e7f2"}>
      <Flex alignItems={"center"} justifyContent={"center"} gap={"16px"}>
        <Box textAlign={"center"} minW={"200px"}>
          <Link href="/">
            <Box>
              <Text
                fontSize={["78px"]}
                fontWeight={"bold"}
                color={"#b72a2a"}
                my={"40px"}
              >
                Mars Travel
              </Text>
            </Box>
          </Link>
        </Box>
        <Box></Box>
      </Flex>
      <Box
        minH={"100vh"}
        bg={"#1A1F2C"}
        w={["100%", "100%", "80%"]}
        margin={"0 auto"}
        mt={"80px"}
      >
        <Box textAlign={"center"} my={"40px"}>
          <Heading size={"2xl"}>
            Current Distance Between Earth And Mars
          </Heading>
          <Text></Text>
        </Box>
        <Box w={"100%"} margin={"0 auto"}>
          <Flex
            w={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"8px"}
          >
            <Box>
              <StaticImage
                width={400}
                src={"./earth.png"}
                alt={"Earth"}
                placeholder="none"
              />
            </Box>
            <Box textAlign={"center"} minW={"200px"}>
              <Box>
                <Text
                  fontSize={["24px", "24px", "24px", "48px", "100px"]}
                  display={["block", "block", "block", "none", "none"]}
                >
                  {distanceInMillionKM}M km
                </Text>
                <Text
                  fontSize={["12px", "12px", "12px", "32px", "3rem", "3.8rem"]}
                  display={["none", "none", "none", "block", "block"]}
                >
                  {distanceInMillionKM} million kilometers
                </Text>
                <Text fontSize={["12px", "18px", "24px", "28px"]}>
                  {distanceInKM} kilometers
                </Text>
                <Text fontSize={["12px", "18px", "24px", "28px"]}>
                  {distanceInAU} astronomical units
                </Text>
              </Box>
              <Box display={["block", "block", "block", "block", "block"]}>
                <Text
                  fontSize={["12px", "12px", "12px", "24px"]}
                  color={"#FF0000"}
                >
                  Time it takes for light to travel
                </Text>
                <Text fontSize={["10px", "10px", "10px", "24px", "24px"]}>
                  {Math.floor(lightTravelTime / 60)} minutes and{" "}
                  {(
                    lightTravelTime -
                    Math.floor(lightTravelTime / 60) * 60
                  ).toFixed(5)}{" "}
                  seconds
                </Text>
              </Box>
            </Box>
            <Box mr={"10%"}>
              <StaticImage
                width={200}
                src={"./mars.png"}
                alt={"Mars"}
                placeholder="none"
              />
            </Box>
          </Flex>
        </Box>
        <Box my={"40px"}>
          <Text fontSize={"28px"}>
            This line graph presents the variation in the distance between Earth
            and Mars over time, based on precise calculations utilizing SPICE
            data from NASA's Jet Propulsion Laboratory.
          </Text>
        </Box>
        <Box margin={"0 auto"}>
          <iframe
            src={"https://realsoftwarecharts.netlify.app/"}
            width={"100%"}
            height={"400px"}
            style={{}}
          />
        </Box>
        <Box py={"40px"} minH={"200px"}>
          <TextTypeing
            fontSize={"38px"}
            typingSpeed={50}
            backspaceSpeed={0}
            color={"brand.green"}
            texts={[
              "The Earth-to-Mars launch window comes around roughly every 26 months, when the planets are aligned perfectly for an efficient journey. This is the best time to launch, as it takes less fuel, less time, and keeps costs down. If you miss this window, the journey will take longer and cost much more due to higher fuel needs. That’s why careful planning around this period is so crucial for Mars missions.",
              "A Hohmann transfer is a fuel-efficient method for moving a spacecraft between two orbits, commonly used for interplanetary travel. It involves two engine burns: the first burn places the spacecraft on an elliptical orbit that intersects the destination orbit, and the second burn adjusts the spacecraft's velocity to match the destination orbit upon arrival. This transfer takes advantage of the gravitational forces of celestial bodies and minimizes energy requirements.",
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RealSoftwarePage;

function useIframeMessage(
  iframeOrigin = "https://realsoftwarecharts.netlify.app/"
) {
  const [message, setMessage] = useState<number>(0);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === "https://realsoftwarecharts.netlify.app")
        setMessage(event?.data);
    };
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [iframeOrigin]);

  return message;
}
