import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PaymentSuccess from "./components/PaymentSuccess";


export default function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
    </Routes>
    </BrowserRouter>
  )
}