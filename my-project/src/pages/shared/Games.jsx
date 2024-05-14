import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import gameData from "../../json/games.json";
import CardGame from "../../components/CardGame";



const Games = () => {
    return (
        <>
        <Navigation />  

        <section className="bg-background">
      <div className="py-10 sm:py-16 block lg:py-20 relative bg-opacity-50 ">
        <div className="relative mx-auto h-full px-4  sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="max-w-xl mx-auto text-center">
              <div className="inline-flex px-4 mx-auto  flex-col rounded-full">

                 <h1 className="text-4xl sm:text-5xl tracking-wide text-primary font-heading p-5">
                          GAMES
                        </h1>
                        <h2 className="text-text font-paragraph text-m sm:text-xl  tracking-wide">
                           play, have fun and learn  
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-10 sm:grid-cols-3 ">

            {gameData.map((game, index) => (
            <CardGame
             key={index}
             image={game.image}
             url={game.url}
             name={game.name}
             description={game.description}
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


export default Games;