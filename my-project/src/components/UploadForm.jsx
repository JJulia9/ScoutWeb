import React from "react";
import axios from "axios";
import {useState} from "react";

const UploadForm = () => {
    const [title, setTitle] = useState("");
    const [about, setAbout] = useState("");
    const [picture, setPicture] = useState(null); //not a string but a file object
    const [message, setMessage] = useState("");

    const [selectedFileName, setSelectedFileName] = useState(""); // To hold the selected file name

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first selected file
        if (file) {
          setPicture(file); // Set the picture state to the selected file
          setSelectedFileName(file.name); // Store the file name for display
        }
      };
      
    const handleUpload = async (e) => {
        e.preventDefault();

        const formData = new FormData(); // Use FormData to upload files
        formData.append("title", title);
        formData.append("about", about);
        formData.append("picture", picture);

        try{
            const response = await axios.post("http://localhost:5000/api/posts", formData, 
            {
             headers: 
             { "Content-Type": "multipart/form-data" }, // Proper content-type for file uploads
             });
            setMessage("Post uploaded successfully!");
            // Reset form inputs after successful upload
                setTitle(""); // Reset text input for title
                setAbout(""); // Reset text input for about
                setPicture(null); // Reset file input
                setSelectedFileName(""); // Clear the displayed file name
        }
        catch(error){
            console.error("Error uploading post", error);
            setMessage("Error uploading post");
        }
    }



    return (
        <>
        
<div className="min-h-screen flex  justify-center bg-primary py-12 px-4 sm:px-6 lg:px-8 relative items-center">
	<div className="absolute  inset-0 z-0"></div>
	<div className="sm:max-w-lg w-full p-10 bg-white rounded-lg shadow-lg z-10">
		<div className="text-center">
			<h2 className="mt-5 text-3xl font-bold text-secondary font-heading">
				Captured a moment?
			</h2>
			<p className="mt-3 text-sm text-gray-400">THEN POST YOUR PICTURE HERE</p>
		</div>

        <form className="mt-8 space-y-3"  onSubmit={handleUpload}>
                    <div className="grid grid-cols-1 space-y-2">
                        <label htmlFor="title" className="text-sm font-bold text-gray-500 tracking-wide">Event title</label>
                            <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary" type="text" placeholder="Spring Competition"
                            id="title" 
                            name="title" 
                            value={title} onChange={(e) => setTitle(e.target.value)}
                            required
                            />
                        
                        <label htmlFor="about" className="text-sm font-bold text-gray-500 tracking-wide">Tell us about it</label>
                            <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary" type="text" placeholder="Obanshire Cub Scouts won 25 badges!"
                            id="about"
                            name="about"
                            value={about} onChange={(e) => setAbout(e.target.value)}
                            required
                            />
                            
                    </div>

                    <div className="grid grid-cols-1 space-y-2">
                                    <label className="text-sm font-bold text-gray-500 tracking-wide">Attach ONE picture</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                <div className="h-full w-full text-center flex flex-col  justify-center items-center">
                                   
                                    <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                    <img className="has-mask h-36 object-center" src="/upload.svg" alt="upload illustration"/>
                                    </div>

                                    <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <span  className="text-primary hover:underline flex-row">select a file</span> from your computer</p>
                                </div>
                                <label htmlFor="picture"></label>
                                <input 
                                type="file"
                                id="picture"
                                name="picture"

                                // onChange={(e) => setPicture(e.target.files[0])}   
                                
                                onChange={handleFileChange}
                                required   />
                                {/* useOnchange to set the file object */}
                            </label>
                        </div>
                    </div>
                            {/* Display selected file name */}
                            {selectedFileName && (
                                    <p className="text-m text-text">Added file: {selectedFileName}</p> // Show the name of the selected file
                                )}

                            <p className="text-sm text-gray-300">
                                <span>File type: png, svg, jpeg</span>
                            </p>

                               
                    <div>
                        <button type="submit" className="my-5 w-full flex justify-center bg-secondary text-gray-100 p-4  rounded-xl tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-shade shadow-lg cursor-pointer transition ease-in duration-300">
                        Upload
                    </button>

                   
                    </div>

                    {message && (
                <div className="font-paragrapg mt-1 text-m text-accent alert alert-danger text-center" role="alert">
                    {message}
                </div>
            )}

            </form>
        </div>
        
    </div>



        </>
    )
}

export default UploadForm;