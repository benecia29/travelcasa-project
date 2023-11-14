"use client";

import React, { ReactNode } from "react";
import Container from "../components/Container";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

interface ReportClientProps {
  children: ReactNode;
}

const ReportClient = ({ children }: ReportClientProps) => {
  const [reservations, setReservations] = useState([]);
  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    // Fetch data from the server
    axios
      .get("/api/reservations")
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <div>
        <header>
          {/* Customize the header for the report layout */}
          <h2 className="text-center mt-4">Report</h2>
        </header>
        <main>
          <div className="text-center">
            <h6 className="text-muted">List of reservations</h6>
          </div>
          {/* Content specific to the report layout */}
          {children}
        </main>
      </div>
    </Container>
  );
};

const handlePrint = () => {
  console.log("Print button clicked"); // Add this line
  window.print();
};

export { handlePrint };
export default ReportClient;
