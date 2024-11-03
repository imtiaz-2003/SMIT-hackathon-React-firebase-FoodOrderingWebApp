import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../config/firebase.config';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firestore = getFirestore(app);

export default function ShowUsers() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    const fetchUsers = async () => {
      try {
        const usersCollection = collection(firestore, 'users');
        const userSnapshot = await getDocs(usersCollection);
        const userList = userSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(userList);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError('Failed to load users');
        setLoading(false);
      }
    };

    fetchUsers();

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  if (loading) return <div>Loading user information...</div>;
  if (error) return <div>Error: {error}</div>;

  // Filter out the current authenticated user from the list of users
  const filteredUsers = currentUser
    ? users.filter((user) => user.email !== currentUser.email)
    : users;

  return (
    <div className="user-container">
      <h1 className="user-title">Registered Users</h1>
      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div className="user-card" key={user.id}>
              <img
                src={user.photoURL || 'https://via.placeholder.com/150'}
                alt="User Avatar"
                className="user-avatar"
              />
              <div className="user-details">
                <p className="user-name">Name: {user.displayName || 'N/A'}</p>
                <p className="user-email">Email: {user.email}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No users found in the database.</p>
        )}
      </div>
      {currentUser && (
        <div className="current-user">
          <h2>Your Profile</h2>
          <p>Email: {currentUser.email}</p>
          <p>Name: {currentUser.displayName || 'N/A'}</p>
          <img src={currentUser.photoURL || ''} alt="User Avatar" className="current-user-avatar" />
        </div>
      )}
    </div>
  );
}
