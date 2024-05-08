import React from 'react';


const BadgeCard = () => {
    return (
        <>

        <Link 
         to={`/storyBoard/${department.name}`}
        //Add a unique key prop for each department
          className="transition-all duration-1000 bg-tetriady hover:bg-secondary hover:shadow-xl m-2 p-4 relative z-40 group"
      
        >
          <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-blue-900 group-hover:w-1/2"></div>
          <div className="py-2 px-9 relative">
            
          <div className="text-center my-2">
                            <img class="h-16 w-16 rounded-full"
                                src={department.img_one}
                                alt="" />
                  </div>
            <div>
              <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">{department.name}</h3>
              <p className="mt-4 text-base text-gray-600 group-hover:text-white">{department.details}</p>
            </div>
          </div>
        </Link>
        
        </>

    );
}

export default BadgeCard;