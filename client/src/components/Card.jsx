import { Button, Image, Text, VStack } from "@chakra-ui/react";



const Card = ({ amount, img, checkoutHandler }) => {
    return (
        <VStack>
            <Image src={img} boxSize={"100"} objectFit="cover" />
            <Text>₹{amount}</Text>
            <Button onClick={() => checkoutHandler(amount)}>Buy Now</Button>
        </VStack>
    )
}


export default Card;