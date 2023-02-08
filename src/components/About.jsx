import mercia from '../assets/Avatar.jpg'

function About() {
    return (
     <div id="about">
  <h2>About</h2>
  <div className="about-container"> 
    <div className="bio"> 
  <h3>Who am I?</h3>
  <p>I am a Women Techsters Fellow, I come from a non-technical 
    background and transitioned into technology in August 2022</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate, sunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quibusdam id consequatur magnam voluptas non necessitatibus dicta repellat dolorem iste.</p>
  </div>   
  <div className="profile-image">
    <img src={mercia} alt="" />
  </div>
  </div>
     </div>
    )
  }
  
  export default About
