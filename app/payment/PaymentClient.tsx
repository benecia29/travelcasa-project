"use client";

import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Container from "@/app/components/Container";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import Link from 'next/link';
import { Router } from "next/router";

interface PaymentClientProps {
  children: ReactNode;
}


const PaymentClient = ({ children }: PaymentClientProps) => {
  return (
    <Container>
      <div>
        <header>
          {/* Customize the header for the report layout */}
          <h3 className="text-center mt-2">Payment Details</h3>
        </header>
        <main>
          {/* Content specific to the report layout */}
          {children}
        </main>
      </div>
    </Container>
  );
};

// const ResSuccess = () => {
//   const router = useRouter();
//   toast.success("Reservation confirmed!");
//   router.push("/trips");
// };

// export { ResSuccess };

// const handleClick = () => {
//   Swal.fire({
//     icon: "success",
//     title: "Payment Successful",
//     text: "Reservation confirmed!",
//     footer: '<a href="localhost:3000/trips">Check out your reservation in Trips</a>',
//   });
// };

const HandleClick = () => {
  //const router = useRouter();
  Swal.fire({
    icon: "success",
    title: "Payment Successful",
    text: "Reservation confirmed!",
    footer:'<a><Link href="/trips">Check out your reservation in Trips</Link></a>',
    showConfirmButton: true, 
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = '/trips';
    }
  });
};

export { HandleClick };
export default PaymentClient;
