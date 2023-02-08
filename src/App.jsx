import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import LinkedinLogo from './assets/linkedin.svg'
import TwitterLogo from './assets/twitter.svg'
import GithubLogo from './assets/github.svg'
import './App.css'


function App() {
  return (
   <div className='App'>
<header>
  <h4>Mercia</h4>
  <div className='myLinks'>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <a href="#projects">Projects</a>
  </div>
</header>
<main>
<Home /> 
<About />
<Projects />
<Contact />
</main>
<footer> 
<div className='social'>
  <a href="https://www.linkedin.com/in/mercia-ravelontsoa/" target="_blank">
  
    <img src={LinkedinLogo} alt="" />
    </a>

    <a href="https://twitter.com/rvlnts" target="_blank">
    <img src={TwitterLogo} alt="" />
    </a>

    <a href="https://github.com/Mercia222" target="_blank">
      
    <img src={GithubLogo} alt="" />
    </a>
</div>
<p>&copy; Mercia Ravelontsoa </p>
</footer>
   </div>
  )
}

export default App
