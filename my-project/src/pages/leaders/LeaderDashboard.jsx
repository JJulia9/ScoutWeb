import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import Subnav from '../../components/Subnav';
import Footer from '../../components/Footer';
import UserInformation from '../../components/UserInformation';
import HelperTable from '../../components/HelperTable';
import UploadForm from '../../components/UploadForm';
import AvailableDaysCalendar from '../../components/AvailableDaysCalendar';
import CubsTable from '../../components/CubsTable'; 
import Events from '../../components/Events';


const LeaderDashboard = () => {
  const user = UserInformation();

  const [activeSection, setActiveSection] = useState('section1');


  const handleNavigation = (section) => {
    setActiveSection(section);
  };


  return (
    <>
      <Navigation />
      <div className='bg-background pb-20'>

      <div className='w-full py-10  bg-accent mb-10'> 
      <div className="max-w-screen-xl mx-auto">
        {user && (
        <h1 className="text-white font-heading text-4xl mb-2 p-2">Hello leader, {user.firstName}!</h1>
        )}
      </div>
      </div>

    <Subnav  onNavigate={handleNavigation}/>
      
      

      <div className="max-w-screen-xl mx-auto">
      <div>
      {activeSection === 'section1' && <div><CubsTable /></div> }
      {activeSection === 'section2' && <div><HelperTable/></div>}
      {activeSection === 'section3' && <div><AvailableDaysCalendar/></div>}
      {activeSection === 'section4' && <div><Events /></div>}

    </div>
      
      </div>

      {activeSection === 'section5' && <div><UploadForm /></div>}
      
      </div>

      <Footer />
    </>
  );
};


export default LeaderDashboard;