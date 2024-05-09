import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Gallery from "../../components/Gallery";
import UploadForm from "../../components/UploadForm";

const Home = () => {
    
    
    return(
        <>
        

            <Navigation />
        <div className="h-5/6 bg-[url('/pattern.svg')] ">

            <section className="h-full justify-center items-center lg:pt-9 ">
                    <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12 ">
                    <div className="justify-center w-full text-center lg:p-10 max-auto">
                        <div className="justify-center w-full mx-auto">


                        <p className="sm:mt-8 mt-3 sm:px-44 text-accent text-2xl sm:text-4xl font-bold font-heading">
                         <span className="text-3xl sm:text-7xl">Adventure </span><br/> Begins Here
                        </p>

                        <p className="sm:mt-8 mt-2.5 text-text sm:px-72 sm:text-xl  sm:leading-loose text-l font-semibold  p-2">
                        Empowering the Next  <span className="font-bold text-secondary"> Generation of Scouts!</span>
                        </p>
                        </div>
                    </div>
                
                    </div>
            


                    <div className="text-center space-x-6 mt-4">
                     <Link to="/" className="font-paragraph  lg:inline-block py-4 px-8 bg-secondary hover:bg-red-400 text-l text-white font-bold rounded-xl transition duration-200" >Let's meet</Link>
                    </div>


                        <div className="flex flex-col items-center justify-center max-w-xl  mx-auto lg:flex-row z-0">
                        <img
                            className='w-9/12 '
                            src='/scouts.svg'
                        />
                        </div>

            </section>
  
        </div>

       



            <section className="relative pt-16 bg-background">
            <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
                <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                    <img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" className="w-full align-middle rounded-t-lg"/>
                    <blockquote className="relative p-8 mb-4">
                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                        <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current"></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                        Great for your awesome project
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                        Putting together a page has never been easier than matching
                        together pre-made components. From landing pages presentation
                        to login areas, you can easily customise and built your pages.
                    </p>
                    </blockquote>
                </div>
                </div>

                <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                        <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-sitemap"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">CSS Components</h6>
                        <p className="mb-4 text-blueGray-500">
                            Notus JS comes with a huge number of Fully Coded CSS
                            components.
                        </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                        <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-drafting-compass"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                            JavaScript Components
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                            We also feature many dynamic components for React, NextJS,
                            Vue and Angular.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4">
                        <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-newspaper"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                        <p className="mb-4 text-blueGray-500">
                            This extension also comes with 3 sample pages. They are
                            fully coded so you can start working instantly.
                        </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                        <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-file-alt"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">Documentation</h6>
                        <p className="mb-4 text-blueGray-500">
                            Built by developers for developers. You will love how easy
                            is to to work with Notus JS.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <footer className="relative bg-blueGray-50 pt-8 pb-6 mt-2">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                    </div>
                </div>
                </div>
            </div>
            </footer>
            </section>
       


<div className="grid grid-flow-row-dense grid-cols-2 grid-rows-2">
                <div className="col-span-2">01</div>
                <div className="col-span-1">02</div>
                <div className="col-span-1">03</div>
        </div>



        {/* <div class="bg-white dark:bg-gray-800 h-screen h-full py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div class="flex items-center gap-12">
                <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>

                <p class="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                    This is a section of some simple filler text,
                    also known as placeholder text. It shares some characteristics of a real written text.
                </p>
            </div>

            <a href="#"
                class="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
                More
            </a>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </a>
           

            
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
            </a>
           

            
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
            </a>
           

            
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
            </a>
           
        </div>
    </div>
</div> */}

<Gallery />
<UploadForm />  



        <Footer />
   
        </>
    )
}

export default Home;