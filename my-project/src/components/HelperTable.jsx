import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HelperTable = () => {
const [users, setUsers] = useState([]); // State to hold the fetched users
  const role = 'Helper'; // Define the role you're interested in
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }

        const response = await axios.get(`http://localhost:5000/api/users/role/${role}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Set the Authorization header with the token
          },
        });

        setUsers(response.data); // Store the fetched users
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); // Fetch users when the component is mounted
  }, []); // Only run once when the component mounts
    
  return (
    <>
    <h3 className="text-primary font-heading text-xl sm:text-2xl font-medium max-w-screen-xl mx-auto pb-5 p-2"> Helpers Information </h3>

      <div className="relative overflow-x-auto  border-2 border-primary rounded-xl mx-2">
        
        <table className="w-full text-sm text-left rtl:text-right text-text font-paragraph">
          <thead className="text-s text-primary uppercase bg-background">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Phone</th>
              <th scope="col" className="px-6 py-3">Date of Birth</th>
              <th scope="col" className="px-6 py-3">Disclosure Scotland</th>
              <th scope="col" className="px-6 py-3">Training</th>
            </tr>
          </thead>
    
    <tbody className='text-nav font-paragraph'>
            {users.map((user) => (
                <tr key={user._id} className="bg-white border-b">
                  <th scope="row" className=" px-6 py-4 font-medium whitespace-nowrap">
                    {user.firstName} {user.lastName}
                  </th>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">{new Date(user.dob).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{user.disclosureScot ? 'Yes' : 'No'}</td>
                  <td className="px-6 py-4">{user.training.join(', ')}</td>
                 
                </tr>
            )
            )}
          </tbody>
        </table>
      </div>
      </>
  );
};

export default HelperTable;