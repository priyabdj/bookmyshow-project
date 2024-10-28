import { Route, Routes } from "react-router-dom";

import { Offers } from "../components/Offers/Offers";

import { Payment } from "../components/payment";


export const Router = () => {
  return (
    <Routes>
          

      <Route path="/payment/:id" element={<Payment />} />
      <Route path="/offers" element={<Offers />} />
    </Routes>
  );
};
