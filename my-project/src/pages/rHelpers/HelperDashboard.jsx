import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import AvailableDaysForm from '../../components/AvailableDaysForm';
import AvailableDaysCalendar from '../../components/AvailableDaysCalendar';
import UploadForm from '../../components/UploadForm';
import UserInformation from '../../components/UserInformation';
import Events from '../../components/Events';
import ProfileCard  from '../../components/HelperProfileCard';
import Training from '../../components/Training';

const HelperDashboard = () => {
    const user = UserInformation();

    return (
        <div>
            <Navigation />


            <div className='bg-background'>
            <div className='w-full py-10  bg-primary mb-10'> 
                <div className="max-w-screen-xl mx-auto">
                    {user && (
                    <h1 className="text-white font-heading text-4xl mb-2 p-2">Hello helper, {user.firstName}!</h1>
                    )}
                </div>
                </div>

            <ProfileCard />
            <Events />
            <AvailableDaysForm />
            
            <div className='max-w-screen-xl mx-auto'>
                 
                <AvailableDaysCalendar />
                


            </div>

            <UploadForm />
            <Training />
            

            </div>

            <Footer />
        </div>
    )
}

export default HelperDashboard;