import './About.scss';

import React from 'react'
export default function About(){
   
    return (
        <>
         <div>
	
    </div>  
            <div className='about_container'>
              
            <div className='aboutme-title'>
                <svg className="stroke-animation" viewBox="0 0 300 300" >
                        <circle cx="150" cy="150" r="100"></circle>
                </svg>
                <div className="aboutme-text">about me</div>
                <div className="aboutme-line">
                <span></span>
                <span></span>
                </div>
                
                <div className='line-2'></div>
            </div>
            <div className='aboutme'>
               
                {/* <div>타이틀</div> */}
                <br/>
                수학과를 전공하고 응용소프트웨어를 복수전공했으며 현재 웹 개발자를 목표하고있습니다.<br/>
                현재 정보처리기사 자격증 취득과정에 있고 개발자로서 공부하고 기록하며 자기계발을 통해 어제보다 나은 차별화된 개발자가 되도록 노력하고 있습니다.

                
                {/* 저는 ------------------------- 입니다.<br/>
                앞으로 --------------------되겠습니다.<br/>
                아무튼 짧은 소개글 입니다. */}
            </div>

            </div>
            
        </>
    );
}