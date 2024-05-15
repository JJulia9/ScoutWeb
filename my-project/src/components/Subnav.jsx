import React from "react";  


const Subnav = ({onNavigate}) => {

    return (
        <>
          
  
  <nav role="navigation" className="max-w-screen-xl mx-auto border-b-2 border-t-2 border-accent mb-10" >
  <div className="flex items-center justify-end ">


<div className='flex  '>

            <button onClick={() => onNavigate('section1')}  className="text-nav font-medium font-paragraph border-b-2 rounded-r-xl border-transparent focus:border-accent flex px-5 items-center py-6 text-m leading-5 hover:rounded-xl hover:bg-red-100 focus:bg-red-100 focus:outline-none  focus: rounded-xl transition duration-150 ease-in-out">
                Cubs
            </button>

            <button onClick={() => onNavigate('section2')}  className="text-nav font-medium font-paragraph border-b-2 rounded-r-xl border-transparent focus:border-accent flex px-5 items-center py-6 text-m leading-5 hover:rounded-xl hover:bg-red-100 focus:bg-red-100 focus:outline-none  focus: rounded-xl transition duration-150 ease-in-out">
                Helpers
            </button>

            <button onClick={() => onNavigate('section3')}    className="text-nav font-medium font-paragraph border-b-2 rounded-r-xl border-transparent focus:border-accent flex px-5 items-center py-6 text-m leading-5 hover:rounded-xl hover:bg-red-100 focus:bg-red-100 focus:outline-none  focus: rounded-xl transition duration-150 ease-in-out">
                 Helpers Availability
            </button>

            <button onClick={() => onNavigate('section4')}   className="text-nav font-medium font-paragraph border-b-2 rounded-r-xl border-transparent focus:border-accent flex px-5 items-center py-6 text-m leading-5 hover:rounded-xl hover:bg-red-100 focus:bg-red-100 focus:outline-none  focus: rounded-xl transition duration-150 ease-in-out">
                Events
            </button>

            <button onClick={() => onNavigate('section5')}    className="text-nav font-medium font-paragraph border-b-2 rounded-r-xl border-transparent focus:border-accent flex px-5 items-center py-6 text-m leading-5 hover:rounded-xl hover:bg-red-100 focus:bg-red-100 focus:outline-none  focus: rounded-xl transition duration-150 ease-in-out">
                Upload
            </button>






           
              
            
            </div>



          </div>
        
      
  </nav>
  
   




        </>

    );
}

export default Subnav;