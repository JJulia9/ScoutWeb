import React from 'react';
import { Link } from 'react-router-dom';

const Training = () => {
    return (
        <div>
      <section className=" max-w-screen-xl mx-auto  border-2 border-secondary rounded-xl m-20 p-10">
        <h2 className="text-4xl text-center  font-heading text-secondary pb-10">Have you been through training?</h2>

        <p className='text-text font-medium tracking-wide font-paragraph text-l text-center pb-5'>
        At Obanshire, we understand the importance of providing comprehensive training to our helpers to ensure they are well-equipped to support our young scouts effectively. Our training program is designed to empower helpers with the skills and knowledge they need to make a meaningful difference in the lives of our scouts.
        </p>


        <p className='text-text font-bold tracking-wide font-paragraph text-l text-center pb-5'>
        Please visit the website below to find out more about the training programs we offer and how you can get involved.
            </p>

        <p className='text-text font-medium tracking-wide font-paragraph text-l text-center'>
            <Link to="https://www.scouts.org.uk/volunteers/learning-development-and-awards/training/learners/" className="text-secondary">Scouts.org</Link>.
            </p>
       
    </section>

        </div>
    )
}

export default Training;