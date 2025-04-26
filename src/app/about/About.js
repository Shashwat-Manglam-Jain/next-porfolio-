import React from "react";

const About = () => {
  const openCv = () => {
    window.open("1.pdf", "_blank");
  };

  return (
    <div id="AboutMe" className="about">
      <h2 className="us" id="aaab">
        About Me
      </h2>
      <div className="divide" style={{ position: "relative", bottom: "70px" }}>
        <img
          src="anuj.png"
          alt="Shashwat Manglam Jain"
          className="photo"
          id="photo"
        />
        <div className="mj">
        <p className="us_1" id="abouttxt" style={{ overflowX: "hidden" }}>
        <br />    
  🚀 **Passionate Data Scientist | AI Innovator | ML Researcher**  

  I am a **Data Scientist** driven by curiosity and innovation. My expertise spans **Machine Learning, Artificial Intelligence, and Data Analytics**, with a deep focus on **Neural Networks, NLP, LLMs, and Generative AI**.  
  <br /> <br />
  💡 I thrive on turning **complex data into meaningful insights**, developing **AI-powered applications**, and building **intelligent systems** that solve real-world challenges. Whether it's **training deep learning models**, **creating smart chatbots**, or **analyzing vast datasets**, I am always pushing the boundaries of what's possible.  
  <br /> <br />
  📈 **A lifelong learner**, I stay ahead of the curve by exploring the latest advancements in **AI, Machine Learning, and Big Data**, constantly refining my skills to drive innovation.  
</p>


          <div id="rbtn" className="btncls">
            <a href="https://wa.link/wkvpig" target="_blank">
              <button className="btn">Contact Me</button>
            </a>
            <button className="btn" onClick={openCv}>
              Resume :)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
