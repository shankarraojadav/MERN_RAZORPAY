import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

export default function Home() {

    
    const checkoutHandler =async (amount) => {
        const { data: { key } } = await axios.get("https://razorpay-mern-app.onrender.com/payment/getkey")
        const { data: { order } } = await axios.post("https://razorpay-mern-app.onrender.com/payment/checkout", {
            amount
        });

        const options = {
            key : key,
            amount: order.amount,
            currency: "INR",
            name: "SHANKARA RAO JADAV C",
            description: "RazorPay PRACTICE",
            order_id: order.id,
            callback_url: "https://razorpay-mern-app.onrender.com/payment/paymentverification",
            prefill: {
                name: "SHANKAR RAO JADAV",
                email: "shankarjadav.com",
                contact: "7229444449"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems="center"
        justifyContent="center"
        direction={["column", "row"]}
      >
        <Card
          amount={50000}
          img={
            "https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={30000}
          img={
            "http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
}
