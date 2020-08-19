import React from 'react';
import UsersList from '../components/UsersList';
const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'max',
      image: 'https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg',
      places: 3,
    },
  ]; //dummy data
  return (
    <h2>
      <UsersList items={USERS} />
    </h2>
  );
};

export default Users;
