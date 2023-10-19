import React,{useState,useEffect} from "react";
import './First.scss';
import p1 from '../img/project1.png';
import p2 from '../img/project2.png';
import p3 from '../img/project3.png';
const First = (props)=>{
    const [content,setContent]= useState(p1);
    const [mount, setMount] = useState(true);
    const [mount2, setMount2] = useState(false);
    const [mount3, setMount3] = useState(false);
    const [effect, setEffect] = useState('mount1');
    const [effect2, setEffect2] = useState('mount2');
    const [click, setClick] = useState('gray');
    const [click2, setClick2] = useState('');
    const [click3, setClick3] = useState('');
    const [scrollPosition2, setScrollPosition2] = useState(0);
    
   //console.log(props);
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
    // useEffect(() => {    
    //     const timer = setInterval(() => {
    //       window.addEventListener("scroll", handleScroll);
    //     }, 100);
    //     return () => {
    //       clearInterval(timer);
    //       window.removeEventListener("scroll", handleScroll);
    //     };
    //   }, []);
    // useEffect(()=>{
    //     if(props >=2800){
    //         console.log(11);
    //     }
    //     // window.addEventListener('scroll',onScroll);
    //     // return () =>{
    //     //   window.removeEventListener('scroll',onScroll);
    //     // }
    //   },[]);
    const handleClickButton = () => {
        
        if(mount){
            

            // setTimeout(()=>{     
            //     setMount(v=> !v);
     
            // }) 
        }else{
            setContent(p1);
            setEffect('mount1');
            setEffect2('mount2');
            setMount(true);
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
            setMount2(true);
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
            setMount3(true);
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
            <div className="one-number">01</div>
            <p>Shopping</p>
            <div className="one-text">
            <b>2022</b>년에 제작한 <b>Springboot</b>기반 쇼핑몰 웹사이트 입니다. <br/>
                웹사이트 전체를 만들었으며 <b>Spring security</b>로 회원가입기능과
                <b>jpa</b>를 이용해 <b>CRUD</b>를 구현했습니다. <br/>
                데이터베이스는 <b>mariaDB</b>를 사용했습니다.
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
            <div className="one-number">02</div>
            <p>Front Web</p>
            <div className="one-text">
                <b>2023</b>년에 제작한 프론트 웹사이트입니다.<br/>
                <b>메인화면</b>과 <b>애니메이션</b>을 담당했습니다.<br/>
                기본적인 <b>css</b>,<b>jquery</b>를 활용하여 그리드와 스크롤이벤트를 구현했습니다.
            </div>
            <div className="more"> 
                <button>
                    <div className="more-1"><a href="https://precious-sawine-3a90c9.netlify.app/">MoreView</a></div>
                </button>
            </div>         

                           
            </div>
          
            :<></>
            }
                        {mount3 ? 
            <div className={`one-info ${effect2}`}>
            <div className="one-number">03</div>
            <p>Chatta</p>
            <div className="one-text">
            <b>2023</b>년에 제작한 <b>Socket</b>을 이용한 채팅웹사이트 입니다.<br/>
                게시판의 <b>CRUD</b>와 <b>api</b>설계를 담당했습니다.<br/>
                <b>커서기반 페이지네이션</b>으로 효율적인 게시판조회를 구현했습니다.
                데이터베이스는 <b>mysql</b>을 사용했습니다.
            </div>
            <div className="more"> 
                <button>
                    <div className="more-1"><a href="http://15.164.68.202/">MoreView</a></div>
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