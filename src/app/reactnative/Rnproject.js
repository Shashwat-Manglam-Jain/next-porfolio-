import React from "react";

const Rnproject = () => {
  const btnclk = () => {
    window.open(
      "https://github.com/Shashwat-Manglam-Jain/Netflix-Clone-Reactnative",
      "_blank"
    );
  };

  const btn1clk = () => {
    window.open(
      "https://github.com/Shashwat-Manglam-Jain/ecomerse-reactnative-app",
      "_blank"
    );
  };

  return (
    <div id="Projects" style={{ backgroundColor: "#ececec" }}>
      <p className="us" id="rnii">
        React Native Projects
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
          borderRadius: "20px",
        }}
      >
        {/* Netflix Clone Project */}
        <div className="vde1" id="rnvnet" style={{ overflowX: "hidden" }}>
          <video
            src="https://res.cloudinary.com/domiypko6/video/upload/v1734729394/Portfolio/klrav1lci4sfb9chfxcw.mp4"
            width="375"
            height="667"
            loop
            autoPlay
            muted
            id="vdo1"
            onClick={btnclk}
            style={{ cursor: "pointer", borderRadius: "10px" }}
          ></video>

          <div className="vdo11" >
            <p className="pst">NETFLIX CLONE</p>
            <p className="des" >
              With a sleek interface and seamless integration with the TMDB movie API, this app offers essential
              features like login, signup, adding to your list, liking favorites, and powerful search functionality.
              Built with a reliable Node.js backend and MongoDB database, Netflix Clone ensures secure and efficient
              user management for the best streaming experience.
            </p>
            <a
              href="https://github.com/Shashwat-Manglam-Jain/Netflix-Clone-Reactnative"
              target="_blank"
              rel="noopener noreferrer"
              className="ghi"
              style={{ fontWeight: "500" }}
            >
              Project Link
            </a>
          </div>
        </div>

        {/* Shopping App Project */}
        <div className="vde1" id="sgornn" style={{ overflowX: "hidden" }}>
          <video
            src="https://res.cloudinary.com/domiypko6/video/upload/v1734717721/Portfolio/opvjkhytzz6ieu91s0uk.mp4"
            width="375"
            height="667"
            loop
            autoPlay
            muted
            id="vdo1"
            onClick={btn1clk}
            style={{ cursor: "pointer", borderRadius: "10px" }}
          ></video>

          <div className="vdo11" >
            <p className="pst" >Shopping App</p>
            <p className="des" >
              ShopEase offers seamless shopping with secure login and sign-up, address management, online payments,
              and post management for sellers. This app ensures a smooth and intuitive shopping experience for both
              buyers and sellers. For the backend, we use Node.js, which handles all backend operations. The database
              is MongoDB, and Razorpay is integrated for online payments.
            </p>
            <a
              href="https://github.com/Shashwat-Manglam-Jain/ecomerse-reactnative-app"
              target="_blank"
              rel="noopener noreferrer"
              className="ghi"
              style={{ fontWeight: "500"}}
            >
              Project Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rnproject;
