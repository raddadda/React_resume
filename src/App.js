import Menu1 from '../src/img/menu1.png';
import Main from './component/Main';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import React, {useRef,useState,useEffect} from 'react'
import './App.scss';
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobile,setMobile] = useState(false);
  
  const updateScroll = () => {
    setScrollPosition(window.scrollY||document.documentElement.scrollTop)
  }
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  
  const goToMain = useRef(null);
  const goToAbout = useRef(null);
  const goToSkills = useRef(null);
  const goToProject = useRef(null);
  const goToContact = useRef(null);
  const goToMainButton = () =>{goToMain.current?.scrollIntoView({behavior:'smooth'});}
  const goToAboutButton = () =>{goToAbout.current?.scrollIntoView({behavior:'smooth'});}
  const goToSkillsButton = () =>{goToSkills.current?.scrollIntoView({behavior:'smooth'});}
  const goToProjectButton = () =>{goToProject.current?.scrollIntoView({behavior:'smooth'});}
  const goToContactButton = () =>{goToContact.current?.scrollIntoView({behavior:'smooth'});}

  const mobileButton = () => {
    if(mobile){
      setMobile(false);
    }else{
      setMobile(true);
    }
    console.log(mobile);
  }
    

  return (
      <>
      {/* <div className={scrollPosition > 100 ? "circle" : "circle"}>스크롤되면 색이 변합니다!</div> */}
      <div className='wrap'>
      {/* <span className="material-symbols-outlined">menu</span> */}
        <div className='manu' >
          {mobile ?  <div>
            
              <span className={`material-symbols-outlined`} style={scrollPosition>900? {color:'black'} : {color:'white'}} onClick={mobileButton}>menu</span>
              <div className='mobile'>
              <ul>
            <li onClick={goToMainButton}>home</li>
            <li onClick={goToAboutButton}>About me</li>
            <li onClick={goToSkillsButton}>Skills</li>
            <li onClick={goToProjectButton}>Project</li>
            <li onClick={goToContactButton}>Contact</li>
        </ul>
              </div>
            </div>
          :
            
          <div><span className={`material-symbols-outlined`} style={scrollPosition>900? {color:'black'} : {color:'white'}} onClick={mobileButton} >menu</span></div>
          }
         
        </div>
        <header  className={scrollPosition > 800 ? "header2" : "header1"}>
        <ul>
            <li onClick={goToMainButton}>home</li>
            <li onClick={goToAboutButton}>About me</li>
            <li onClick={goToSkillsButton}>Skills</li>
            <li onClick={goToProjectButton}>Project</li>
            <li onClick={goToContactButton}>Contact</li>
        </ul>
        </header>
      {/* <div className="mobile">
        <div className="mobile-btn"><img src={Menu1}/></div>
        <header className={scrollPosition > 900 ? "mobile2" : "mobile1"}>
        
          <ul>
              <li onClick={goToMainButton}>home</li>
              <li onClick={goToAboutButton}>About me</li>
              <li onClick={goToSkillsButton}>Skills</li>
              <li onClick={goToProjectButton}>Project</li>
              <li onClick={goToContactButton}>Contact</li>
          </ul>
        </header>
      </div> */}

       
        <div ref={goToMain}><Main></Main></div>
        <div ref={goToAbout}><About></About></div>
        <div ref={goToSkills}><Skills></Skills></div>
        <div ref={goToProject}><Project></Project></div>
        <div ref={goToContact}><Contact></Contact></div>
         
      </div>
      
      </>
  );
}

export default App;
