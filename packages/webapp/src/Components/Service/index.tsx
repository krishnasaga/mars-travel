import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Box,
  Center,
  Heading,
  Highlight,
  List,
  ListItem,
  Text,
  useColorMode,
  Code,
  Button,
  calc,
  CodeProps,
  Link as ChakraLink,
  Divider,
  Flex,
  Image,
  Grid,
  GridItem,
  UnorderedList,
} from "@chakra-ui/react";
import { css, keyframes } from '@emotion/react'
import { FloatingAnimation } from "../../utils";
import { LorenzAttractor } from "../ LorenzAttractor";
const $lineHeight = "1rem";

export const Service  = () => {

  return (
    <Box as="section" px={['1rem','10rem']} mb={'10rem'}>
     <Grid templateColumns={['1fr','1fr 1fr']} gridTemplateAreas={`
     `}>
        <GridItem>
          <Heading color={'#4A5568'}>
            Continues Monitoring
          </Heading>
          <Heading color={'#C53030'} mt={'2rem'}>
            24x7 Application Health Monitoring
          </Heading>
          <Text mt={'2rem'} fontSize={'18px'}>
          Benefit from continuous monitoring of your software systems, enabling us to detect performance issues, security vulnerabilities, and anomalies in real-time, and intervene proactively.
          </Text>
          <UnorderedList fontSize={'24px'} mt={'2.4rem'}>
            <ListItem>Real-time detection of performance issues and system irregularities.</ListItem>
            <ListItem>Immediate identification of security vulnerabilities.</ListItem>
            <ListItem>Continuous monitoring for swift anomaly detection.</ListItem>
            <ListItem>Proactive intervention to prevent system disruptions.</ListItem>
           </UnorderedList>
        </GridItem>
        <GridItem >
            <FloatingAnimation>
               <Image maxW={["100%","50%"]} marginLeft={['0px','250px']} src="/analytics.png" />
            </FloatingAnimation>
        </GridItem>
     </Grid>
    </Box>
  );
};
