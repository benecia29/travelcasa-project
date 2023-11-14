import React from "react";
import ReportClient from "./ReportClient";

import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";
import Button from "../components/Button";
import "bootstrap/dist/css/bootstrap.min.css";

interface ReportPageProps {
  handlePrint: () => void;
  //disabled?: boolean;
}

const ReportPage: React.FC<ReportPageProps> = async ({ handlePrint }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({ authorId: currentUser.id });
  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReportClient>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table
                  className="table table-hover"
                  //classNameName="table caption-top display table-fixed"
                  id="reporttable"
                >
                  {/* <caption>List of reservations</caption> */}
                  <thead>
                    <tr>
                      <th scope="col">Reservation ID</th>
                      <th scope="col">User ID</th>
                      <th scope="col">Listing ID</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">End Date</th>
                      <th scope="col">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservations.map((reservation) => (
                      <tr key={reservation.id}>
                        <td>{reservation.id}</td>
                        <td>{reservation.userId}</td>
                        <td>{reservation.listingId}</td>
                        <td>{reservation.startDate}</td>
                        <td>{reservation.endDate}</td>
                        <td>{reservation.totalPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center mt-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handlePrint}
          >
            Print
          </button>

          <Button disabled={false} label="Print" onClick={handlePrint} />
        </div> */}
      </ReportClient>
    </ClientOnly>
  );
};

export default ReportPage;
