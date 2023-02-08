import nft from '../assets/nft.jpg'
import piggybank from'../assets/piggybank.jpg'

function Projects() {
    return (
     <div id="projects">
        <h2>Projects</h2>
        <p>These are all my projects, please click</p>
        <div className="box-container">
           <div className="box"> 
<img src={nft} alt="" /> 
<a href="https://github.com/Mercia222/NFT-CREATION.git">Github Link</a>
           </div>

           <div className="box"> 
<img src={nft} alt="" /> 
<a href="https://github.com/Mercia222/ERC20-MINIPROJECT.git">Github Link</a>
           </div>
         <div className='box'>
   <img src={piggybank} alt="" />
<a href="https://github.com/Mercia222/PIGGYBANK-SMART-CONTRACT.git">Github Link</a>
        </div>
   
      </div>
     </div>
    )
  }
  
  export default Projects