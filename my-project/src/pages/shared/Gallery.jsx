import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";



const GalleryPage = () => {
    return (
        <>
        <Navigation />
        <div className="bg-background p-20">
            <div className="max-w-screen-xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl tracking-wide text-secondary font-heading pt-5 mb-5">
                           GALLERY
                </h1>

                <h2 className="text-text font-paragraph text-m sm:text-xl  tracking-wide mb-14 ">
                            click on to see details    
                </h2>

            <Gallery />
            </div>
        </div>

        <div className="flex flex-wrap justify-center text-center  p-10 mb-10 bg-shade">
                    <div className="w-full px-4">
                        <h4 className="text-2xl sm:text-3xl text-primary font-heading">
                            Share your moments with us!
                        </h4>


                        <p className="text-white font-paragraph text-m sm:text-xl  tracking-wide py-2">
                         please sign in to upload your pictures
                        </p>


                        <div className="text-center mt-10 pt-3  m-2">
                        <Link to="/login" className="font-paragraph py-4 px-8 bg-primary hover:bg-red-400 text-lg sm:text-xl text-white font-bold rounded-xl transition duration-200">Sign In</Link>
                         </div>
                
                       
                    </div>
        </div>

        <Footer />
        </>
    );
}

export default GalleryPage;