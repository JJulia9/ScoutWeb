import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import BadgeCard from "../../components/BadgeCard";



const Badges = () => {
    return (
        <>
        <Navigation />

        
       




        <section className="bg-white">
      <div className="py-10 sm:py-16 block lg:py-24 relative bg-opacity-50 z-40">
        <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="max-w-xl mx-auto text-center">
              <div className="inline-flex px-4 py-1.5 mx-auto rounded-full">
                <p className="text-4xl font-semibold tracking-widest text-g uppercase">
                  Departments
                </p>
              </div>
              <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white">
                click on the department view more details
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20">

             {departments &&
                  departments.map((department, index) => (
                    <CardDepartment key={index} department={department} /> // Pass department data as props
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      


        




        <BadgeCard />

        <Footer />


        </>

    );
}

export default Badges;