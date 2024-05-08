import React from 'react';
import { Link } from 'react-router-dom';

const BadgeCard = ({id, name, picture }) => {
    return (
        <>

        <Link 
         to="#"
          className="transition-all duration-1000 bg-tetriady hover:bg-secondary hover:shadow-xl m-2 p-4 relative z-40 group"
        >
          <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-blue-900 group-hover:w-1/2"></div>
          <div className="py-2 px-9 relative">
            
          <div className="text-center my-2">
                            <img className="h-16 w-16 rounded-full"
                                src={picture}
                                alt="badge icon" />
                  </div>
            <div>
              <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">{name}</h3>
              {/* <p className="mt-4 text-base text-gray-600 group-hover:text-white"> nothing for now</p> */}
            </div>
          </div>
        </Link>
        
        </>

    );
}

export default BadgeCard;