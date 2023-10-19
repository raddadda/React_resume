import './About.scss';

import React, {useState,useEffect} from 'react'
export default function About(){
   
    return (
        <>
         <div>
	
    </div>  
            <div className='about_container'>
              
            <div className='aboutme-title'>
                <svg class="stroke-animation" viewBox="0 0 300 300" >
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
                Springboot와 node.js로 웹사이트를 만들고 AWS등을 이용해 배포한 경험이 있습니다.
                <br/>
                대학교 2학년 파이썬 머신러닝 프로젝트를 마무리하고 성취감을 시작으로 데이터를 이용한 프로그래밍에
                 대해 흥미를 가졌고, 함께 고민하며 해결책을 찾는 과정에서 매력을 느껴 개발자가 되기로 결심했습니다.

                
                {/* 저는 ------------------------- 입니다.<br/>
                앞으로 --------------------되겠습니다.<br/>
                아무튼 짧은 소개글 입니다. */}
            </div>

            </div>
            
        </>
    );
}