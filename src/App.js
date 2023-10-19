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

  const mobileButton = (event) => {
    event.currentTarget.classList.toggle('active-1');
    if(mobile){
      setMobile(false);
    }else{
      setMobile(true);
    }
    console.log(mobile);
  }


  return (
      <>
        <div className='wrap' style={{transition: '0.5s'}}>
        <div className='page-ani'></div>

      {/* <span className="material-symbols-outlined">menu</span> */}
        <div className='manu' >
        <a className="menu-trigger"  onClick={mobileButton}>
  <span style={scrollPosition>1200? {backgroundColor:'black',transition: '0.5s'} : {backgroundColor:'white',transition: '0.5s'}}></span>
  <span style={scrollPosition>1200? {backgroundColor:'black',transition: '0.5s'} : {backgroundColor:'white',transition: '0.5s'}}></span>
  <span style={scrollPosition>1200? {backgroundColor:'black',transition: '0.5s'} : {backgroundColor:'white',transition: '0.5s'}}></span>
</a>
          {mobile ?  <div>

              {/* <span className={`material-symbols-outlined`} style={scrollPosition>900? {color:'black',transition: '0.5s'} : {color:'white',transition: '0.5s'}} onClick={mobileButton}>menu</span> */}
              <div className='mobile' >
              <ul>
            <li onClick={goToMainButton}>Home</li>
            <li onClick={goToAboutButton}>About me</li>
            <li onClick={goToSkillsButton}>Skills</li>
            <li onClick={goToProjectButton}>Project</li>
            <li onClick={goToContactButton}>Contact</li>
            </ul>
              </div>
            </div>
          :
            <></>
          // <div> <span className={`material-symbols-outlined`} style={scrollPosition>900? {color:'black',transition: '0.5s'} : {color:'white',transition: '0.5s'}} onClick={mobileButton} >menu</span></div>
          }
         
        </div>
        {/* <header  className={scrollPosition > 500 ? "header2" : "header1"}> */}
        <header  className="header2">
        <ul>
            <li onClick={goToMainButton}>Home<div className='header-line1'><span></span><span></span></div></li>
            <li onClick={goToAboutButton}>About me<div className='header-line2'><span></span><span></span></div></li>
            <li onClick={goToSkillsButton}>Skills<div className='header-line3'><span></span><span></span></div></li>
            <li onClick={goToProjectButton}>Project<div className='header-line4'><span></span><span></span></div></li>
            <li onClick={goToContactButton}>Contact<div className='header-line5'><span></span><span></span></div></li>
        </ul>
       
        </header>
        {/* <ul cla>
            <li ><div className='header-line1'><span></span></div></li>
            <li ><div className='header-line2'><span></span></div></li>
            <li ><div className='header-line3'><span></span></div></li>
            <li ><div className='header-line4'><span></span></div></li>
            <li ><div className='header-line5'><span></span></div></li>
        </ul> */}
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

       
        <div ref={goToMain}  ><Main></Main></div>
        <div ref={goToAbout} ><About></About></div>
        <div ref={goToSkills} className={scrollPosition<700? `focus-off` : 'focus-on' }><Skills></Skills></div>
        <div ref={goToProject} ><Project props={scrollPosition}></Project></div>
        <div ref={goToContact} ><Contact></Contact></div>
         
      </div>
      
      </>
  );
}

export default App;
