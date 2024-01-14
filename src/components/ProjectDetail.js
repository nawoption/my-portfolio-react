import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { projects } from "../data";
import { Helmet } from "react-helmet";

const ProjectDetail = () => {
  const navigate = useNavigate();
  // const projectData = location.state.projectData;
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const projectIndex = parseInt(id, 10) - 1;
    const project = projects[projectIndex];
    if (project) {
      setProjectData(project);
      setLoading(false);
    }else{
      navigate('/not-found')
    }
  }, [id, navigate]);

  const openImageDetail = (index) => {
    setSelectedImage(index);
  };

  const closeImageDetail = () => {
    setSelectedImage(null);
  };
  const webImgStyle = { width: 800, height: 500 };
  const androidImgStyle = { width: 350, height: 500 };
  const listWebImg = { width: 300, height: 200 };
  const listAndroidImg = { width: 200, height: 300 };
  if (loading) return true;
  return (
    <div className="container mx-auto py-5">
    <Helmet>
        <title>{projectData.title}</title>
        <meta property="og:title" content={projectData.title} />
        <meta property="og:image" content={projectData.image} />
      </Helmet>
      <ArrowLeftIcon
        onClick={() => navigate(-1)}
        className="mx-auto inline-block w-10 mb-4"
      />

      {/* Top Section with Three Images */}
      <div className="flex justify-center flex-wrap ">
        {projectData.imageList.map((url, index) => (
          <img
            key={index}
            src={url}
            className="m-2"
            style={
              projectData.category == "android" ? listAndroidImg : listWebImg
            }
            onClick={() => openImageDetail(index)}
          />
        ))}
      </div>
      {/* image detial */}
      {selectedImage !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4">
            <img
              src={projectData.imageList[selectedImage]}
              alt={`Project Image ${selectedImage + 1}`}
              style={
                projectData.category == "android"
                  ? androidImgStyle
                  : webImgStyle
              }
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
      <div className="mt-8 flex flex-col md:flex-row px-4">
        {/* Left Column - Client Info */}
        <div className="md:w-1/3 pr-4">
          <h2 className="text-2xl text-white mb-4">Objective</h2>
          <p className="font-general-regular text-gray-100 text-sm leading-relaxed text-justify">
            {projectData.objective}
          </p>

          <h2 className="text-2xl mt-4 text-white mb-4">
            Tools & Technologies
          </h2>
          <p className="font-general-regular text-gray-100 text-sm leading-relaxed text-justify">
            {projectData.technology}
          </p>
          <h3 className="text-2xl mt-4 text-white mb-4">Project Source Code</h3>
          <a
            className="text-sm text-blue-500"
            href={projectData.githubLink}
            target="_blank"
          >
            {projectData.githubLink}
          </a>
        </div>

        {/* Right Column - Project Details */}
        <div className="md:w-2/3">
          <h2 className="text-2xl text-white mb-4">{projectData.title}</h2>
          <p className="font-general-regular text-gray-100 text-sm leading-loose text-justify">
            {projectData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
