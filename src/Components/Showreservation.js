import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../config/firebase.config'; 

const firestore = getFirestore(app);

export default function ShowReservation() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const reservationsCollection = collection(firestore, 'reservations');
        const reservationsSnapshot = await getDocs(reservationsCollection);
        const reservationsList = reservationsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReservations(reservationsList);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching reservations:", err);
        setError("Failed to load reservations.");
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) return <div className="loading">Loading reservations...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="reservations-container">
      <h2 className="reservations-title">Reservations</h2>
      {reservations.length > 0 ? (
        reservations.map((reservation) => (
          <div className="reservation-card" key={reservation.id}>
            <p className="reservation-name"><strong>Name:</strong> {reservation.name}</p>
            <p className="reservation-date"><strong>Date:</strong> {reservation.date}</p>
            <p className="reservation-time"><strong>Time:</strong> {reservation.time}</p>
            <p className="reservation-guests"><strong>Guests:</strong> {reservation.guests}</p>
          </div>
        ))
      ) : (
        <p className="no-reservations">No reservations found.</p>
      )}
    </div>
  );
}
