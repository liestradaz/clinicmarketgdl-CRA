import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
      <Products />

    </>
  );
}
