import React,{useState,useEffect} from "react";
import './First.scss';
import p1 from '../img/project1.png';
import p2 from '../img/project2.png';
import p3 from '../img/project3.png';
import p4 from '../img/project4.png';
const First = (props)=>{
    const [content,setContent]= useState(p1);
    const [mount, setMount] = useState(true);
    const [mount2, setMount2] = useState(false);
    const [mount3, setMount3] = useState(false);

    const [effect, setEffect] = useState('mount1');
    const [effect2, setEffect2] = useState('mount2');
    const [effect3, setEffect3] = useState('mount3');

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
            setEffect3('mount3');
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
            setEffect3('mount3');
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
            setEffect3('mount3');
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
            <p>알바온</p>
            <p>(근태관리 웹 서비스)</p>
            <div className="one-text">
            2023.11~2023.12 (백엔드3,프론트2 팀 프로젝트) <div></div>
            <hr></hr>
            <b> <span>소개 : 소규모 자영업장에서 아르바이트 직원을 관리하기 위한 HR 시스템</span><br></br><br></br>
            • 근태,급여정산,일정관리 기능을 API로 구현<div></div>
            • SpringSecurity + JWT 로그인 구현<div></div>
            • 사업자와 직원의 권한에 따른 기능 세분화<div></div>
            • 캘린더를 이용한 일정 생성,조회,수정,삭제<div></div>
            • 출퇴근기록을 통한 한달 급여 조회(주휴수당 포함)</b>
           
            
            </div>
            <div className="more"> 
                <button>
                    <div className="more-1"><a href="http://portfolioalbaon.notion.site">MoreView</a></div>
                </button>
            </div>         

                           
            </div>
          
            :<></>
            }
                        {mount2 ? 
            <div className={`one-info ${effect2}`}>
            <div className="one-number">02</div>
            <p>Chatta</p>
            <p>(실시간 채팅 웹 서비스)</p>
            <div className="one-text">
            2023.08~2023.09 (총 4명 팀 프로젝트) <div></div>
            <hr></hr>
            <b><span>소개 : 웹 소켓을 이용하여 개발한 실시간 채팅 웹 서비스</span><br></br><br></br>
            • 유저가 채팅 채널을 생성하고 다른사람들과 실시간으로 채팅하는 서비스입니다.<div></div>
            • 게시판의 생성,조회,수정,삭제 기능<div></div>
            • 커서페이징 무한스크롤 조회기능<div></div></b>
            </div>
            <div className="more"> 
                <button>
                    <div className="more-1"><a href="https://github.com/raddadda/chatta">MoreView</a></div>
                </button>
            </div>         

                           
            </div>
          
            :<></>
            }
                        {mount3 ? 
            <div className={`one-info ${effect2}`}>
            <div className="one-number">03</div>
            <p>M.M.M</p>
            <p>(운동인을 위한 종합 웹 사이트)</p>
            <div className="one-text">
            2023.07~2023.08 (총 4명 팀 프로젝트) <div></div>
            <hr></hr>
            <b><span>소개 : 다양한 운동 정보와 캘린더 기능을 제공하는 웹 페이지입니다.</span><br></br><br></br>
            • 프론트엔드를 처음 입문하며 css를 다뤄본 프로젝트입니다.<div></div>
            • 캘린더를 이용한 투두리스트 기능<div></div>
            • 반응형 웹으로 제작<div></div></b>
            </div>
            <div className="more"> 
                <button>
                    <div className="more-1"><a href="https://precious-sawine-3a90c9.netlify.app/">MoreView</a></div>
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