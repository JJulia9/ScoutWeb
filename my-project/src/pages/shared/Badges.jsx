import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import BadgeCard from "../../components/BadgeCard";
import badges from "../../json/badges.json";
import { useState } from "react";


const Badges = () => {
  //search functionality

  const [searchQuery, setSearchQuery] = useState(""); // Track the search input

  // Filter badges based on the search query (case-insensitive)
  const filteredBadges = badges.filter(badge => 
      badge.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  

    return (
        <>
        <Navigation />

        <section className="bg-background">
      <div className="py-10 sm:py-16 block lg:py-24 relative bg-opacity-50 ">
        <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="max-w-xl mx-auto text-center">
              <div className="inline-flex px-4 py-1.5 mx-auto rounded-full">

                 <h1 className="text-4xl sm:text-5xl tracking-wide text-primary font-heading pb-5">
                           BADGES
                        </h1>
              </div>
             
                 {/* Search input */}
                 <div className="mt-4">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        placeholder="search for cub badge..."
                                        className="border-2 border-primary rounded-xl p-2"
                                    />
                                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20">

            {filteredBadges.map((badge) => (
                <BadgeCard 
                  key={badge.id}  // Use a unique identifier for the key
                  id={badge.id}
                  name={badge.name}
                  picture={badge.picture}
                  description={badge.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      


        




       

        <Footer />


        </>

    );
}

export default Badges;