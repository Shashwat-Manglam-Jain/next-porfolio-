import React from 'react'

const Blockpro = () => {
    const img_proj = [
        "https://res.cloudinary.com/domiypko6/image/upload/v1734711587/Portfolio/mernProject/lvqlejexbrnka5unu7nk.webp",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734711909/Portfolio/mernProject/gaqzfhottqul2v2l9oak.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734711968/Portfolio/mernProject/va0k0ijkmsiuqs9vg55f.webp"
      ];
    
      const title = [
        "Blockchain Decenterlised Banking Money Request System",
        "Decentralized Drive: The Future of Secure Image Storage",
        "Decentralized Portfolio"
      ];
    
      const live = [
        "https://dcenterlisedbankingapp.netlify.app/",
        "https://decenterlised-image-drive.netlify.app/",
        "https://decenterlisedportfolio.netlify.app/"
      ];
    
      const github = [
        "https://github.com/Shashwat-Manglam-Jain/DcenterlisedBanking",
        "https://github.com/Shashwat-Manglam-Jain/Decenterlise-Image-Drive",
        "https://github.com/Shashwat-Manglam-Jain/Decenterlied-Portfolio-website"
      ];
    
      const technology = [
        "Smart Contracts , Hardhat ,Ethers.js, MetaMask ",
        "Smart Contracts , IPFS ,Hardhat ,Ethers.js, MetaMask ",
        "Smart Contracts , Web3.js,  MetaMask "
      ];
    
  return (
    <div id="Projects" style={{backgroundColor:" #ececec"}}>
    <p className="us" id="vblkc">Blockchain Projects</p>
    <div className="block"style={{ display:" flex",
  flexWrap:" wrap",
  top:" 0px",
  justifyContent:" center",
  borderRadius: "20px",
  overflowX: "hidden"}}  id="vbldi">
   
    {img_proj.map((val, i) => (
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
  )
}

export default Blockpro