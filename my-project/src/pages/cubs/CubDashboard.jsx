import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import UploadForm from '../../components/UploadForm';   
import ProfileCard from '../../components/ProfileCard';
import Events from '../../components/Events';



const CubDashboard = () => {


    return (
        <>
        <Navigation />
        <div className='bg-background'>
        <div className="w-full py-10 mb-10 bg-secondary  flex-row">
        <div className="flex max-w-screen-xl mx-auto">
        <h1 className="font-heading  text-white text-4xl p-2 mb-2">Welcome back Cub </h1>
        <svg className="w-38 h-38 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none" viewBox="0 0 38 38">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.99 9H15M8.99 9H9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM7 13c0 1 .507 2.397 1.494 3.216a5.5 5.5 0 0 0 7.022 0C16.503 15.397 17 14 17 13c0 0-1.99 1-4.995 1S7 13 7 13Z"/>
        </svg>
        </div>
    </div>
    

         <ProfileCard />
         <Events />


         <UploadForm />
        
        </div>
        <Footer />
        </>
    )
}

export default CubDashboard;