import React from 'react'


const Certificates = () => {
    const pdfFiles = [
      "./1.pdf", "./2.pdf", "./3.pdf", "./4.pdf", "./5.pdf", "./6.pdf", "./7.pdf", "./9.pdf", "./8.pdf", "./10.pdf",
    ];
      return (
        <div id="Certificates">
          <p className="us" id="certn">My Certificates</p>
          <br />
    
          <div className="pdf_1" id="pdsc" style={{ overflow: "hidden", overflowX: "hidden" }}>
            {pdfFiles.map((item, i) => (
              <iframe key={i} src={item} width="450px" height="400px" style={{ position: "relative", margin: "10px" }}></iframe>
            ))}
          </div>
    
          <br /><br />
        </div>
      );
    };
    
    export default Certificates;