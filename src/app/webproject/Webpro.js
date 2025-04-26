import React from 'react'

const Webpro = () => {
    const img_proj = [
        "https://res.cloudinary.com/domiypko6/image/upload/v1734712768/Portfolio/mernProject/jlgxvrkwkfrqa0yqdqes.jpg",
      
        "https://res.cloudinary.com/domiypko6/image/upload/v1734714847/Portfolio/mernProject/d00zsjgsesqssmlvfprd.jpg",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734711499/Portfolio/mernProject/imnufl5tcprovtksce9h.jpg",
      
        "https://res.cloudinary.com/domiypko6/image/upload/v1734712456/Portfolio/mernProject/tugymbthokpbylrxr27k.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734712057/Portfolio/mernProject/phpswiwpt4a40qeekycq.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734712545/Portfolio/mernProject/o325oswb63efv2qqtqzs.webp",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734712711/Portfolio/mernProject/fxiihwpwfpzzks3rcmrl.jpg",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734712137/Portfolio/mernProject/tnhygvveh1qhqy2ngv8t.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734714781/Portfolio/mernProject/iacssb8uq7dc0i9bh8xi.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734714726/Portfolio/mernProject/svjmobl7pjzrc1dfzbmv.png",
        "https://res.cloudinary.com/domiypko6/image/upload/v1734712381/Portfolio/mernProject/ecokkqdtkekpr7w8dtks.jpg",
      ];
      
      const title = [
        "Spotify app clone ",
      
        "Youtube Clone",
        "Shopping Website",
      
        "Todo List",
        "Calculator",
        "Parallax Website",
        "Webecommerce Website",
        "Chess Website",
        "Whac-a-Mole Game",
        "Meme generator",
        "Bussiness Website",
      ];
      
      const live = [
        "https://spotify-clone-shashwat-manglam-jain.netlify.app/",
      
        "https://youtube-clone-shashwat.netlify.app/",
        "https://newsagarcomputer.vercel.app/",
      
        "https://todolist-reactjs-shashwat.netlify.app/",
        "https://simple-calculator-shashwat.netlify.app/",
        "https://shashwat-manglam-jain.github.io/parallax-website-1/",
        "https://webecomerse-website.netlify.app/",
        "https://chess-shashwat.netlify.app/",
        "https://whac-amole.netlify.app/",
        "https://shashwat-manglam-jain.github.io/Memes-generator/",
        "https://ecomerse-react-website-shashwat.netlify.app/",
      ];
      const github= [
        "https://github.com/Shashwat-Manglam-Jain/spotify-clone-full-stack",
      
        "https://github.com/Shashwat-Manglam-Jain/Youtube-Clone",
        "https://github.com/Shashwat-Manglam-Jain/nextmyapp",
      
        "https://github.com/Shashwat-Manglam-Jain/Todo-List",
        "https://github.com/Shashwat-Manglam-Jain/Calculator",
        "https://github.com/Shashwat-Manglam-Jain/parallax-website-1",
        "https://github.com/Shashwat-Manglam-Jain/Webcomerse",
        "https://github.com/Shashwat-Manglam-Jain/chess",
        "https://github.com/Shashwat-Manglam-Jain/whac-a-mole",
        "https://github.com/Shashwat-Manglam-Jain/Memes-generator",
        "https://github.com/Shashwat-Manglam-Jain/Ecomerse-React",
      ];
      const technology = [
        "Javascript , Spotify api , React js , Spotify Backend , Queue data structure",
      
        "Javascript , React js , Rapid api, Node js , Context api",
        "Javascript , Next js , Firebase , CURD , Payment- Stripe",
      
        "Javascript , React js , Localstorage , Frontend",
        "Javascript , React js , Localstorage , Frontend",
        "Javascript , React js , Redux-cli , Context api , Tailwind , Node js , Google map api",
        "Javascript , HTML , CSS , Frontend",
        "Javascript , HTML , CSS , Frontend",
        "Javascript , HTML , CSS , Frontend",
        "Javascript , HTML , CSS , Frontend",
        "Javascript , React js , Google map api , Frontend",
      ];
      
  return (
  

    <div id="Projects" style={{backgroundColor:" #ececec"}}>
      <p className="us" id="weap" >Web Projects</p>
      <div className="web" id="alwep" style={{ display:" flex",
  flexWrap:" wrap",
  top:" 0px",
  justifyContent:" center",
  borderRadius: "20px",
  overflowX: "hidden"}}>

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

export default Webpro