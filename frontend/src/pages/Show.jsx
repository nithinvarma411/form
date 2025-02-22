import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Show() {
  const [users, setUsers] = useState([]);

  const show = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/show');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    show(); 
  }, []);

  return (
    <div>
      <h2>User Details</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <strong>Name:</strong> {user.name} | <strong>Description:</strong> {user.description} | <strong>Price:</strong> {user.price} | <strong>Quantity:</strong> {user.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default Show;
