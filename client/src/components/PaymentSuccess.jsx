import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useSearchParams, Link } from "react-router-dom";
const PaymentSuccess = () => {
  // const seachQuery = useSearchParams()[0];

  // const referenceNum = seachQuery.get("reference");
  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}> Order Successfull</Heading>

        {/* <Text>Reference No.{referenceNum}</Text> */}
        <Link to="/">
        <Button cursor="pointer" border="none" fontSize="25">Get Back To Home Page</Button>
      </Link>
      </VStack>
      
    </Box>
  );
};

export default PaymentSuccess;
