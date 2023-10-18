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
                
                <div className='line-2'></div>
            </div>
            <div className='aboutme'>
                <br/>
                <div>타이틀</div>
                <br/>
                {/* 저는 ------------------------- 입니다.<br/>
                앞으로 --------------------되겠습니다.<br/>
                아무튼 짧은 소개글 입니다. */}
            </div>

            </div>
            
        </>
    );
}