import React, { useState, useEffect } from 'react';
import './TypingText.scss';
const TypingText = () => {
  
  let text = "신입 개발자 최영찬의 포트폴리오입니다.";
  let speed = 155;
  let fontSize = '4em';
  let color='white';
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    let typingText = text ? text : "";//기본값
    let typingSpeed = speed ? speed : 100;//기본값
    const interval = setInterval(() => {
        setText((Text)=>{
          let updated = Text;
          updated = Text + typingText[Count];
          return updated;
        });
        setCount(Count + 1); 
    }, typingSpeed);
    Count === typingText.length && clearInterval(interval);
    return () => clearInterval(interval);
})
  return (
    <p className='main-title'  >{ Text }<span className='blink'>|</span></p>
  )
};

export default TypingText;