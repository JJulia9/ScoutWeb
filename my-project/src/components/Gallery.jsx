import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {

    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/posts");
              
                if (response && response.data) {
                    setPosts(response.data);
                } else {
                    console.error("Invalid response from the server:", response);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    } , []);
       

      return (
        <div className="flex items-center justify-center bg-background" >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">

        {posts.map((post) => {
          // Construct the URL using the correct base path and the filename stored in `post.picture`
          const imageUrl = `http://localhost:5000/uploads/${post.picture}`;

          return (
            
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg"  key={post._id}>

            <div className="h-96 w-72 rounded-lg">
              <LazyLoadImage className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-lg" src={imageUrl} alt="activityPicture" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-lg" ></div>
            <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 rounded-lg">
              <h1 className="font-heading text-3xl font-bold text-white">{post.title}</h1>
              <p className="mb-3 mt-1 font-paragraph text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{post.about}</p>
            </div>
           
          </div>
         
          );
    })}

      
        </div>
        
      </div>
      
      );
    }

  export default Gallery;