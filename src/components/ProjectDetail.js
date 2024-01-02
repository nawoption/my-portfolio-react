import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const ProjectDetail = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const data = location.state.data;
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageDetail = (index) => {
    setSelectedImage(index);
  };

  const closeImageDetail = () => {
    setSelectedImage(null);
  };
  const webImgStyle = { width: 800, height: 500 };
  const androidImgStyle = { width: 350, height: 500 };

  return (
    <div className="container mx-auto py-5">
          <ArrowLeftIcon onClick={()=>navigate(-1)} className="mx-auto inline-block w-10 mb-4" />

      {/* Top Section with Three Images */}
      <div className="flex justify-center flex-wrap ">
        {data.imageList.map((url, index) => (
          <img
            key={index}
            src={url}
            className="m-2"
            style={{ height: 200, width: 300 }}
            onClick={() => openImageDetail(index)}
          />
        ))}
      </div>
      {/* image detial */}
      {selectedImage !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4">
            <img
              src={data.imageList[selectedImage]}
              alt={`Project Image ${selectedImage + 1}`}
              style={data.category == "android" ? androidImgStyle : webImgStyle}
            />
            <button
              onClick={closeImageDetail}
              className="mt-4 float-right text-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Two Columns Layout */}
      <div className="mt-8 flex flex-col md:flex-row">
        {/* Left Column - Client Info */}
        <div className="md:w-1/3 pr-4">
          <h2 className="text-2xl text-white mb-4">Objective</h2>
          <p className="font-general-regular text-gray-100 text-sm leading-relaxed text-justify">
            {data.objective}
          </p>

          <h2 className="text-2xl mt-4 text-white mb-4">
            Tools & Technologies
          </h2>
          <p className="font-general-regular text-gray-100 text-sm leading-relaxed text-justify">
            {data.technology}
          </p>
          <h3 className="text-2xl mt-4 text-white mb-4">Project Source Code</h3>
          <a className="text-sm" href={data.githubLink} target="_blank">
            {data.githubLink}
          </a>
        </div>

        {/* Right Column - Project Details */}
        <div className="md:w-2/3">
          <h2 className="text-2xl text-white mb-4">{data.title}</h2>
          <p className="font-general-regular text-gray-100 text-sm leading-loose text-justify">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
