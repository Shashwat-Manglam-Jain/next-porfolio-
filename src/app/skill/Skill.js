import React from 'react';

const Skill = () => {
    const skills = [
        "Machine Learning",
        "Deep Learning",
       
        "Java",
        
        "Java Android development ",
        "Scikit-learn",
        "Numpy",
        "Pandas",
        
        "Nextjs",
        "MS Excel",
        "Matplotlib",
      
        "Seaborn",
        "MERN Stack",
        "Firebase",
        "React Native",
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "ExpressJS",
        "SQL",
        "NodeJS",
        "MongoDB",
        "Rest API",
        "Data Structures and Algorithms",
      ];
      
      const proficiencyLevels = [
        "86%",
        "88%",
        "85%",
        "88%",
        "86%",
        "81%",
        "83%",
        "88%",
        "84%",
        "87%",
        "89%",
        "82%",
        "86%",
        "86%",
        "82%",
        "81%",
        "80%",
        "85%",
        "86%",
        "81%",
        "88%",
        "83%",
        "88%",
        "87%"
      ];


      const imgsk = [
        "https://res.cloudinary.com/domiypko6/image/upload/v1734712879/Portfolio/mernProject/aonwh0eghav5pgchlobr.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734714020/Portfolio/mernProject/vqojw73wwl4aeogsyfqe.svg",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734714071/Portfolio/mernProject/iss45hifa1riq6uammmi.png",
        "t4.jpeg",
        "t5.png",
        "t6.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734714539/Portfolio/mernProject/tvgexgh9u5ixz4xlefvo.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734714605/Portfolio/mernProject/ftyp7lo421y0dqlegbjc.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734714651/Portfolio/mernProject/qklem1umwnefrtb7eqxs.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734712934/Portfolio/mernProject/gwfjidytmbicnmj1i1hn.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyya9RHo3mreo1_8Ha8ccZtAUUpaCQrN4WxA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOtvwgIgYYam8F__JPzTGYvNnOIvi7bAmv0eefqAf0mhByzVKS_S-Sdmpe28skBpBjFY&usqp=CAU",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734713125/Portfolio/mernProject/xi5734q9gwghzhvszvw1.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QAc8DTxjjdb9xvj-UtW5fchIsYCDOApdlw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6p9Bi5GeQiiYGu7Rmf5EE22fyAEOnyNptJA&s",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734712995/Portfolio/mernProject/l2ucqcgdchltlcp15sof.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3Je-51EfYrNfJ8tkchsG8tQ6PVDHr1oI1A&s",
        "https://www.gstatic.com/devrel-devsite/prod/vc851b65627ca98cc752c9ae13e5f506cd6dbb7ed1bb4c8df6090c5f9130ed83c/firebase/images/touchicon-180.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734713185/Portfolio/mernProject/aj0lbylqqni9dd0ylee6.png",
        "https://images.vexels.com/media/users/3/139556/isolated/preview/1718a076e29822051df8bcf8b5ce1124-android-logo.png",
        "https://static.vecteezy.com/system/resources/previews/021/496/368/non_2x/ios-icon-logo-software-phone-apple-symbol-with-name-black-design-mobile-illustration-free-vector.jpg",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734713236/Portfolio/mernProject/docdcv8bua0wbayvlx0v.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734713287/Portfolio/mernProject/qksxrwuth0gmgsywotvx.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734713335/Portfolio/mernProject/jr4rgbdhkl9ahssdt36i.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734713408/Portfolio/mernProject/mt4bmocbjlzh8w8zvhnb.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734713448/Portfolio/mernProject/d6gt42zt45khgq9kzge1.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTroU91FLk1e5CTmveZCstER9A-qLpJGNtZvA&s",
        "t18.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734713488/Portfolio/mernProject/fops713yfxwoeybyc6ai.png",
      ];

  return (
    <div style={{ paddingTop: '20px' }} id="skp">
      {/* Title */}
      <p className="skill" id="Skills_">My Skills</p>
      <br  />
      <br/>
      <br/>

      {/* Leetcode Section */}
  <div>
  <div className="leet3">
        <div className="leet">
          <img
            src="https://res.cloudinary.com/domiypko6/image/upload/v1734713838/Portfolio/mernProject/xdooufkpfvb0fzmbtzkn.png"
            className="leet4"
            alt="Leetcode Logo"
          />
          <h3 className="leet1">Leetcode</h3>
          <div className="leet2">
            <h3 className="leet1" style={{ color: 'black' }}>Acceptance Rate: 87%</h3>
            <h3 className="leet1">Question Solved: 400+</h3>
          </div>
          <a href="https://leetcode.com/u/shashwatManglam/" target="_blank" rel="noopener noreferrer">
            <h2 className="leet11">(¬‿¬) Leetcode Profile</h2>
          </a>
        </div>
        
      </div>
      <br/>
      <br/>
  </div>
    
    

      {/* Skills Images */}
      <div className="scol" style={{ display: 'flex', flexDirection: 'column' }} id="imglcd">
        <div className="img_skill" id="imskl" style={{
          display: 'flex', flexWrap: 'wrap', gap: '40px',
          alignItems: 'center', justifyContent: 'center', padding: '10px'
        }}>
          {imgsk.map((img, index) => (
            <div key={index} className="img_skill">
              <img src={img} className="imgsk1" alt={`Skill ${index + 1}`} />
            </div>
          ))}
        </div>
      </div> 
      {/* Skills Proficiency */}
      <div className="scol" style={{ display: 'flex', flexDirection: 'column' }}>
        {skills.map((skill, index) => (
          <div key={index} className="sdivide">
            <p className="skl1">{skill}</p>
            <p className="skl2" style={{ top: '0.8rem' }}></p>
            <div className="skl1">{proficiencyLevels[index]}</div>
          </div>
        ))}
      </div>

     
      <br/>
      <br/>
    </div>
  );
}

export default Skill;
