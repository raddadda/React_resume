import './Main.scss';
import {useEffect,useState} from 'react';
import React, {useRef} from 'react'
export default function Main(){
    const mainTextWord = 'Back-end 최영찬의 포트폴리오'
    const [mainTitle,setMainTitle] = useState('');
    const [count, setCount] = useState(0);
    useEffect(() => {
        const typingInterval = setInterval(() => {
            setMainTitle((prev)=>{
                let result = prev ? prev + mainTextWord[count] : mainTextWord[0];
                setCount(count+1);
                if(count >= mainTextWord.length){
                    setCount(0);
                    setMainTitle('');
                }
                
                return result;
            });
        },300);

        return ()=>{
            clearInterval(typingInterval);
        }
    });


    // const targetRef = useRef(null);

    // const handleScroll = () =>{
    //     if(window.scrollY > 0){
    //         targetRef.current.style.position="fixed";
    //     }
    // }

    // useEffect(()=>{
    //     const timer = setInterval(()=>{
    //         window.addEventListener("scroll",handleScroll);
    //     },100);
    //     return ()=>{
    //         clearInterval(timer);
    //         window.removeEventListener("scroll",handleScroll);
    //     }
    // },[]);

    return (
        <>
        	
       {/* <svg class="stroke-animation" viewBox="0 0 400 400" >
                        <circle cx="150" cy="150" r="100"></circle>
                    </svg> */}
                            {/* <svg id="circle1" viewBox="0 0 700 400" style="background-color: #eee;">
                                <circle cx="35" cy="35" r="35" />
                            </svg> */}

            <div className='main-img'></div>
            <div className='main-container'>
                
                    <div className='main-title'>{mainTitle}<span>|</span></div>


            </div>
        </>
    );
}