import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";


const Home = () => {
    
    
    return(
        <>
        
            
                    <div className="h-screen bg-[url('/pattern.svg')] ">
                    <Navigation />
                    <section className="h-full justify-center items-center">
            <div className="pt-12 px-4 sm:px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                <div className="text-center lg:p-10 max-auto">
                <div className="mx-auto pt-9">
                    <p className="sm:mt-8 mt-3 sm:px-10 text-accent text-3xl sm:text-5xl font-bold font-heading">
                    <span className="text-4xl sm:text-7xl">ADVENTURE </span><br/> 
                    Begins Here
                    </p>
                
                    <p className="sm:mt-8 mt-2.5 sm:px-20 sm:text-xl sm:leading-loose text-l font-semibold p-2 font-paragraph">
                    Empowering the Next <span className="font-bold text-secondary">Generation of Scouts!</span>
                    </p>
                </div>
                </div>


                
            </div>


         <div>
   <div className="text-center mt-2 pt-3 lg:pb-8 m-2 z-10">
                <Link to="/about" className="font-paragraph py-4 px-8 bg-secondary hover:bg-shade text-lg sm:text-xl text-white font-bold rounded-xl transition duration-200 z-10">Let's meet</Link>
            </div>

            <div className="flex items-center justify-center w-full absolute bottom-0 z-0">
                <img
                className='w-1/2 sm:w-1/4 z-0' 
                src='/scouts.svg'
                alt='scoutsIcon'
                />
            </div>
</div>
            
            </section>

            
                    </div>

            
     
            <div className="bg-background">
                <div className="flex items-center justify-center w-1/2 m-auto">
                    <div className="pt-40 pb-10 text-center px-5 sm:px-0">
                        <h3 className="text-3xl sm:text-4xl text-primary font-heading pb-10">
                            <span className="block"> WELCOME</span>
                            to Obanshire Cub Scouts
                        </h3>

                        <p className="text-text font-paragraph text-m sm:text-xl  tracking-wide">
                        Our club has been dedicated to providing enriching experiences for children and youth for over a decade. Through exciting outdoor adventures, skill-building activities, and community service projects, we aim to instill values of leadership, teamwork, and resilience in our Scouts
                                            
                        </p>
                        
                    </div>
                </div>
            </div>
            






            <div className="bg-background h-full pb-6 sm:pb-8 lg:pb-12">
            <div className="mx-auto  max-w-screen-xl  px-4 md:px-8">
              
            

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 pt-5">
                    
                    <Link to="/games"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src="/3.jpg" loading="lazy" alt="Photo by from image bank" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-heading">Games</span>
                    </Link>
                

                    
                    <Link to="/login"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src="/4.jpg" loading="lazy" alt="Photo from image bank" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-heading">Info for helpers</span>
                    </Link>
                

                    
                    <Link to="/login"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src="/5.jpg" loading="lazy" alt="Photo from image bank" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-heading">Training</span>
                    </Link>
                

                    
                    <Link to="/gallery"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src="/9.jpg" loading="lazy" alt="Photo from image bank" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-heading">Gallery</span>
                    </Link>
                
                </div>
            </div>
        </div>


        
<div className="flex items-center justify-center  bg-background  pt-28 pb-10">
    <div className="flex flex-col">
        <div className="flex flex-col ">
            <div className="container max-w-7xl px-4">
                <div className="flex flex-wrap justify-center text-center mb-5">
                    <div className="w-full px-4">
                        <h4 className="text-2xl sm:text-3xl text-secondary font-heading pb-10">
                            Our Team
                        </h4>
                        
                    </div>
                </div>


                <div className="flex flex-wrap max-w-7xl">
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col justify-center items-center">
                        <div className="h-96 w-72">
                                <img className="h-full w-full object-cover rounded-xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                     src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile picture"/>
                            </div>

                            <div className="text-center mt-6">
                                <h1 className="text-secondary font-heading text-xl font-bold mb-1">
                                Sarah Thompson
                                </h1>

                                <div className="text-text font-paragraph font-light mb-2">
                                    Founder & Director
                                </div>
                            </div>
                        </div>
                    </div> 


                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col justify-center items-center">
                        <div className="h-96 w-72">
                                <img className="h-full w-full object-cover rounded-xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile picture"/>
                            </div>
                            <div className="text-center mt-6">
                                <h1 className="text-secondary font-heading text-xl font-bold mb-1">
                                Michael Patel 
                                </h1>

                                <div className="text-text font-paragraph font-light mb-2">
                                Volunteer Coordinator
                                </div>
                            </div>
                        </div>
                    </div> 


                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col justify-center items-center">
                        <div className="h-96 w-72">
                                <img className="h-full w-full object-cover rounded-xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile picture"/>
                            </div>

                            <div className="text-center mt-6">
                                <h1 className="text-secondary font-heading text-xl font-bold mb-1">
                                Emily Rodriguez 
                                </h1>

                                <div className="text-text font-paragraph font-light mb-2">
                                Outdoor Education Specialist
                                </div>
                            </div>
                        </div>
                    </div> 


                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col justify-center items-center">
                        <div className="h-96 w-72">
                                <img className="h-full w-full object-cover rounded-xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile picture"/>
                            </div>

                            <div className="text-center mt-6">
                                <h1 className="text-secondary font-heading text-xl font-bold mb-1">
                                David Lee 
                                </h1>

                                <div className="text-text font-paragraph font-light mb-2">
                                   Head Leader
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                   
                </div>
            </div>
        </div>
    </div>

    <div className="flex flex-wrap justify-center text-center  p-10 bg-shade">
                    <div className="w-full px-4">
                        <h4 className="text-2xl sm:text-3xl text-primary font-heading">
                            Join Us
                        </h4>


                        <p className="text-white font-paragraph text-m sm:text-xl  tracking-wide py-2">
                         and get ready to embark on the adventure with us
                        </p>


                        <div className="text-center mt-10 pt-3  m-2">
                        <Link to="/register" className="font-paragraph py-4 px-8 bg-primary hover:bg-red-400 text-lg sm:text-xl text-white font-bold rounded-xl transition duration-200">Become a helper</Link>
                         </div>
                
                       
                    </div>
                </div>


<div  id="section1" className=" mx-auto px-5 bg-background min-h-sceen pt-40 pb-20 ">
	<div className="flex flex-col items-center ">
    <h4 className="text-2xl sm:text-3xl text-accent font-heading">
                            FAQ
                        </h4>
		<p className="text-text font-paragraph text-xl mt-3 tracking-wide ">
			frequenty asked questions
		</p>
	</div>
	<div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
		
        
        <div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className="text-nav font-paragraph font-semibold tracking-wide"> Who can join Obanshire Cub Scouts?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-text font-medium font-paragraph tracking-wide mt-3 group-open:animate-fadeIn">
                Obanshire Cub Scouts welcomes children and youth aged 8 to 10, providing an enriching experience for growth and development, and helpers all ages.
				</p>
			</details>
		</div>

        <div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className="text-nav font-paragraph font-semibold tracking-wide"> What are the benefits of joining Obanshire Cub Scouts?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-text font-medium font-paragraph tracking-wide mt-3 group-open:animate-fadeIn">
                Obanshire Cub Scouts offers a platform for fostering leadership skills, outdoor adventures, community service opportunities, and lifelong friendships.
				</p>
			</details>
		</div>

        <div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className="text-nav font-paragraph font-semibold tracking-wide"> Are there any specific requirements for joining?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-text font-medium font-paragraph tracking-wide mt-3 group-open:animate-fadeIn">
                To join  Obanshire Cub Scouts, future cubs must meet the age requirements and adhere to the principles of inclusivity, respect, and cooperation. Future helpers must be willing to undergo a background check and have a Disclosure Scotland.
				</p>
			</details>
		</div>
    
        <div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className="text-nav font-paragraph font-semibold tracking-wide"> How can I register my child for Obanshire Cub Scouts?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-text font-medium font-paragraph tracking-wide mt-3 group-open:animate-fadeIn">
                 Registration for Obanshire Cub Scouts can be done only  contacting us via email.
				</p>
			</details>
		</div>

        <div  className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className="text-nav font-paragraph font-semibold tracking-wide"> How can I register as a helper for Obanshire Cub Scouts?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-text font-medium font-paragraph tracking-wide mt-3 group-open:animate-fadeIn">
                 Registration of helper for Obanshire Cub Scouts can be done online on our website. Submit a registration form and we will get in touch with you.
				</p>
			</details>
		</div>


        <div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className="text-nav font-paragraph font-semibold tracking-wide"> How can I obtain a Disclosure Scotland?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-text font-medium font-paragraph tracking-wide mt-3 group-open:animate-fadeIn">
                 To obtain a Disclosure Scotland, you need to apply online through 
                 <Link to="https://www.mygov.scot/basic-disclosure/apply-for-basic-disclosure"> <span className="text-accent underline">the official website</span></Link> . The process typically takes 14 days to complete.
				</p>
			</details>
		</div>


        <div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className="text-nav font-paragraph font-semibold tracking-wide"> How to register for a training? </span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-text font-medium font-paragraph tracking-wide mt-3 group-open:animate-fadeIn">
                 To register for training you need to be registered as a helper. Once you are registered, you can sign up for training sessions on our website. To register please click
                 <Link to="/register"> <span className="text-accent underline">here</span></Link>.
				</p>
			</details>
		</div>

	
	</div>
</div>





           
       



    






        <Footer />
   
        </>
    )
}

export default Home;