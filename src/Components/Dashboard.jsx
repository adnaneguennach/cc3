import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import DashboardCards from "./DashboardCards";
import { updateAnnonce , Reserve} from "../config/annoncesSlice";

const Dashboard = () => {
  const annonces = useSelector((state) => state.annonces.annonces);
  const dispatch = useDispatch()
  const userEmail = localStorage.getItem('userEmail')
  return (
    <div className="flex min-h-screen bg-gray-200" style={{ height: "100vh" }}>
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-200">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Dashboard</h2>
        <DashboardCards />
        <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Annonces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {annonces.map((annonce) => (
            <div key={annonce.id} className="bg-white p-4 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold">{annonce.title}</h3>
              <p className="text-gray-600">{annonce.location}</p>
              <p className="text-blue-500 font-semibold mt-2">{annonce.price}</p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700">Reservations</h4>
                {(annonce.reservations?.length || 0) > 0 ? (
                  annonce.reservations.map((reservation, index) => (
                    <div key={index} className="p-2 bg-gray-100 rounded mt-2">
                      <p className="text-gray-700">User ID: {reservation.userId}</p>
                      <p className={`text-sm ${reservation.status === "pending" ? "text-yellow-500" : reservation.status === "accepted" ? "text-green-500" : "text-red-500"}`}>
                        Status: {reservation.status.toUpperCase()}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No reservations yet.</p>
                )}
              </div>
              <button className="reserve bg-red-500" onClick={()=>{
                dispatch(Reserve({
                  id : annonce.id, 
                  useEmail : userEmail

                }))
              }}>
                Reserve
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;