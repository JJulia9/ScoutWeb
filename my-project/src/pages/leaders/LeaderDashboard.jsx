import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import UserInformation from '../../components/UserInformation';
import HelperTable from '../../components/HelperTable';


const LeaderDashboard = () => {
  const user = UserInformation();

  return (
    <>
      <Navigation />
      <div className="">
        {user && (
        <h1 className="text-accent font-heading text-4xl mb-4">Hello leader {user.firstName}!</h1>
        )}
      </div>



      <HelperTable />

      <Footer />
    </>
  );
};


export default LeaderDashboard;