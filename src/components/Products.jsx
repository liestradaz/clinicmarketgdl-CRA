import { useState, useEffect } from "react";
import { Wrap, WrapItem, Box, Flex, Text, useBreakpointValue  } from "@chakra-ui/react";
import productsList from "../products.json";

export default function Products() {
  const [productHeader, setProductHeader] = useState([]);

  useEffect(() => {
    setProductHeader(productsList);
  }, []);

  return (
    <>
      <Wrap spacing="50px" justify="center" mx={100}>
        {productHeader &&
          productHeader.map((elem, idx) => (
            <WrapItem key={idx}>
              <Box
                w="277px"
                h="368px"
                backgroundImage={elem.imageUrl}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize={"cover"}
              >
                <Text fontSize={"xl"} fontWeight={700} color="white" mt={"95%"}>
                  {elem.header}
                </Text>
              </Box>
            </WrapItem>
          ))}
      </Wrap>
    </>
  );
}
