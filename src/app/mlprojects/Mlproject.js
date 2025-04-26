import React from "react";

const Mlproject = () => {
  const img_proj = ["chatbots-in-healthcare.webp",
    "Main-breastcancer.jpg",
    "https://res.cloudinary.com/domiypko6/image/upload/v1734711340/Portfolio/Images_ML_Project/ncepllsjquajzuhgd0kj.jpg",
    "https://res.cloudinary.com/domiypko6/image/upload/v1734712626/Portfolio/Images_ML_Project/cwoi35r3hsxgat7yjpch.png",
    "m1.jpg",
    "m2.jpg"
  ];

  const title = [
    "Medical-Chatbot and Medical Document Analyser",
    "Breast Cancer Detection using Machine Learning",
    "Netflix Stock Price Predictor using Machine Learning",
    "Deep Learning-Based Semantic Segmentation for Tumor Detection in MRI Brain Scans",
    "Real-Time Car Number Plate Recognition",
   "Keyless Touch: Gesture-Based Virtual Keyboard"
  ];

  const live = [ "#",
    "https://shashwat100k.pythonanywhere.com/",
    "#",
    "#",
    "#",
    "#",
  ];

  const github = ["https://github.com/Shashwat-Manglam-Jain/medical-chatbot-and-document-analyser",
    "https://github.com/Shashwat-Manglam-Jain/Breast_Cancer_Predictor_ML",
    "https://github.com/Shashwat-Manglam-Jain/Netflix-Stock-Price-Predictor",
    "https://github.com/Shashwat-Manglam-Jain/brain-tumor-mri-prediction/blob/main/brain_tumor_mri.ipynb",
    "https://github.com/Shashwat-Manglam-Jain/License-Plate-Recognition-System",
    "https://github.com/Shashwat-Manglam-Jain/Virtual-Keyboard-Using-Hand-Tracking",
  ];

  const technology = ["Medicine.pdf, Therapy.pdf, langchain , transformers , faiss",
    "Machine Learning, numpy, sklearn, pandas, Matplotlib , Seaborn, Kaggle_dataset",
    "Machine Learning, numpy, sklearn, pandas,, Matplotlib , Seaborn, Kaggle_dataset",
    "Deep Learning, CNN, Flask, Tensorflow , Pillow (PIL), OpenCV, numpy, pandas",
   "Deep Learning, YOLOv8, Flask, TensorFlow , OpenCV, numpy, pandas, Kaggle_dataset",
   "Deep Learning , OpenCV, MediaPipe, Python, NumPy, PyAutoGUI"
  ];

  return (
    <div id="Projects" style={{ backgroundColor: "#ececec" }}>
      <p className="us" id="ppje" >My Projects</p>
<div style={ {display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>{img_proj.map((val, i) => (
        <div key={i} className="p1" id="mlppje" style={{ overflowX: "hidden"}}>
          <div className="p0">
            <img className="p3" src={val} alt={`Project ${i + 1}`} />
            <p className="deep">{title[i]}</p>

            <h5 className="p4">
              Go Check it Out! The Project is 
              <a href={live[i]} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}> Live on</a>
            </h5>

            <h5 className="p4">
              Source Code of Project is 
              <a href={github[i]} target="_blank" rel="noopener noreferrer" style={{ color: "red" }}> Github Link</a>
            </h5>

            <p className="p5">Technologies:</p>
            <p className="p6">{technology[i]}</p>
          </div>
        </div>
      ))}</div>

    </div>
  );
};

export default Mlproject;
