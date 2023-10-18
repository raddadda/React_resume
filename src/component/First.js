import React,{useState,useEffect} from "react";
import './First.scss';
import p1 from '../img/project1.png';
import p2 from '../img/project2.png';
import p3 from '../img/project3.png';
const First = ()=>{
    const [content,setContent]= useState();
    const [mount, setMount] = useState(true);
    const [mount2, setMount2] = useState(false);
    const [mount3, setMount3] = useState(false);
    const [effect, setEffect] = useState('mount1');
    const [effect2, setEffect2] = useState('mount2');
    const [click, setClick] = useState('white');
    const [click2, setClick2] = useState('white');
    const [click3, setClick3] = useState('white');
    const [scrollPosition2, setScrollPosition2] = useState(0);
    
    // const updateScroll2 = () => {
    //     // if(scrollPosition2==901){
    //     //     console.log(123123);
    //     // }
    //     console.log(scrollPosition2);
    //     setScrollPosition2(window.scrollY||document.documentElement.scrollTop)
    //   }
    // useEffect(() => {

    //     window.addEventListener("scroll", updateScroll2);
    // }, []);
    // const [projectInfo,setProjectInfo] = useState(`${info1}`);
    
    // const onClickBtn = () => {
        
    //     if(mount){
    //         setEffect('unmount');
    //         setTimeout(()=>{     
    //             setMount(v=> !v);    
    //         }, 400) 
    //     }else{

    //         setEffect('mount1');
    //         setMount(v=> !v);
    //     }
    // };

 
    const handleClickButton = () => {
        
        if(mount){
            

            // setTimeout(()=>{     
            //     setMount(v=> !v);
     
            // }) 
        }else{
            setContent(p1);
            setEffect('mount1');
            setEffect2('mount2');
            setMount(v=> !v);
            setMount2(false);
            setMount3(false);
            setClick('gray');
            setClick2('');
            setClick3('');
        }
    }
    const handleClickButton2 = () => {
        
        if(mount2){
            // setEffect('unmount');

            // setTimeout(()=>{     
            //     setMount2(v=> !v);
     
            // }) 
        }else{
            setContent(p2);
            setEffect('mount1');
            setEffect2('mount2');
            setMount(false);
            setMount2(v=> !v);
            setMount3(false);
            setClick('');
            setClick2('gray');
            setClick3('');
        }
    }

    const handleClickButton3 = () => {
      
        if(mount3){
            // setEffect('unmount');
            // setTimeout(()=>{     
            //     setMount3(v=> !v);
            // }) 
        }else{
            setContent(p3);
            setEffect('mount1');
            setEffect2('mount2');
            setMount(false);
            setMount2(false);
            setMount3(v=> !v);
            setClick('');
            setClick2('');
            setClick3('gray');
        }
    }





    return(
        <>
            {/* <div className="container">
                <div className="container-wrap">
                    <div className="project-button">
                    
                </div> */}



                    {mount ? 
                        // <div className={`box-wrap ${effect}`}>
                            <div className={`one-img`}>
                                <img className={`${effect}`} src={content}/>
                                {/* <img className={'unmount'} src={content}/> */}
                             </div>
                        // </div>

                        :

                        <></>
                    }
                                        {mount2 ? 
                        // <div className={`box-wrap ${effect}`}>
                            <div className={`one-img`}>
                                <img className={`${effect}`} src={content}/>
                                
                             </div>
                        // </div>

                        :

                        <></>
                    }
                                        {mount3 ? 
                        // <div className={`box-wrap ${effect}`}>
                            <div className={`one-img`}>
                                <img className={`${effect}`} src={content}/>
                             </div>
                        // </div>

                        :

                        <></>
                    }

            {mount ? 

            
            <div className={`one-info ${effect2}`}>
            <div>01</div>
            <p>Shopping</p>
            <div className="one-text">
                아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨
                아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨
                아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨
                
            </div>
            <div className="more"> 
                <button>
                    <div className="more-1">MoreView</div>
                </button>
            </div>         

                           
            </div>
          
            :<></>
            }
                        {mount2 ? 
            <div className={`one-info ${effect2}`}>
            <div>02</div>
            <p>Front Web</p>
            <div className="one-text">
                아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨
                아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨
                아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨
                
            </div>
            <div className="more"> 
                <button>
                    <div className="more-1">MoreView</div>
                </button>
            </div>         

                           
            </div>
          
            :<></>
            }
                        {mount3 ? 
            <div className={`one-info ${effect2}`}>
            <div>03</div>
            <p>Chatta</p>
            <div className="one-text">
                아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨
                아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨
                아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨아무글씨
                
            </div>
            <div className="more"> 
                <button>
                    <div className="more-1">MoreView</div>
                </button>
            </div>         

                           
            </div>
          
            :<></>
            }
                                <div className="btn-box">
                        <button className={`btn`} style={{backgroundColor:`${click}`}} onClick={handleClickButton}></button>
                        <button className={`btn`} style={{backgroundColor:`${click2}`}}  onClick={handleClickButton2}></button>
                        <button className={`btn`} style={{backgroundColor:`${click3}`}} onClick={handleClickButton3}></button>
                    </div>
        </>
    )
}

export default First;