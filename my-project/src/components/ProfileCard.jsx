import React from 'react';
import UserInformation from "./UserInformation";



const ProfileCard = () => {
    const user = UserInformation()
    
    const formatDOB = (dob) => {
        const formattedDOB = new Date(dob).toLocaleDateString('en-GB');
        const [day, month, year] = formattedDOB.split('/');
        return `${day}.${month}.${year}`;
      }; 

    return (
       
        <>

        {user && (

        <div className='mx-2 mb-20'>
        <h3 className="text-primary font-heading text-xl sm:text-2xl font-medium max-w-screen-xl mx-auto pb-5 p-2"> Profile </h3>
        <div className="h-64 max-w-screen-xl mx-auto">
        <div className="bg-white p-3 shadow-m border-secondary border-2 border-solid rounded-xl">
            <div className="flex items-center space-x-2 font-semibold text-nav font-paragraph">
                <span className="text-secondary">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span className="tracking-wide">About</span>
            </div>
            <div className="text-nav font-paragraph">
                <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">First Name</div>
                        <div className="px-4 py-2">{user.firstName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Last Name</div>
                        <div className="px-4 py-2">{user.lastName}</div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Birthday</div>
                        <div className="px-4 py-2">{formatDOB(user.dob)}</div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Address</div>
                        <div className="px-4 py-2">{user.address}</div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold"> Cub Email</div>
                        <div className="px-4 py-2">
                            <a className="text-secondary" href="mailto:jane@example.com">{user.email}</a>
                        </div>
                    </div>


                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Parent Name</div>
                        <div className="px-4 py-2">{user.parentName}</div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Parent Email</div>
                        <div className="px-4 py-2">
                            <a className="text-secondary" href="mailto:jane@example.com">{user.parentEmail}</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Parent Phone</div>
                        <div className="px-4 py-2">{user.parentPhone}</div>
                    </div>

                    
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Allergies</div>
                        <div className="px-4 py-2">{user.allergies}</div>
                    </div>

                    
                   
                </div>
            </div>
           
           
        </div>
        </div>
        </div>
        )}

        </>
    );
}




export default ProfileCard;
