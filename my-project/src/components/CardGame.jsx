import React from 'react';
import { Link } from 'react-router-dom';



const CardGame = ({image, url, name, description}) => {
    return (
        <>
            <div className="transition-all duration-1000 bg-tetriady hover:bg-primary hover:shadow-xl m-2 p-4 relative  group rounded-xl">
  <div className="py-2 px-9 relative flex flex-col items-center rounded-xl border-secondary border-solid border-2"> {/* Updated */}
    <div className="text-center my-2 rounded-xl">
      <img className="h-16 w-16 rounded-full" src={image} alt="game picture" />
    </div>
    <div className="text-center flex flex-col justify-center rounded-xl"> {/* Updated */}
      <h3 className="mt-8 text-lg font-semibold text-secondary group-hover:text-white">{name}</h3>
      <p className="mt-4 text-base text-text font-paragraph group-hover:text-white">{description}</p>

      <Link to={url} target="_blank">
                    <div className="flex justify-center items-center m-5">
                  <button className="font-paragraph  lg:inline-block py-2 px-6 bg-secondary hover:bg-shade text-l text-white font-bold rounded-xl transition duration-200">PLAY</button>
                  </div>
                  </Link>
    </div>
  </div>
</div>

        </>
    );
}


export default CardGame;