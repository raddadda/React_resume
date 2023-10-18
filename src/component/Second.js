// import React,{useState} from "react";
// import './Second.scss';
// import p1 from '../img/project1.png';
// import p2 from '../img/mainImg3.jpg';
// import p3 from '../img/mainImg.jpg';
// const Second = ()=>{
//     const [content,setContent]= useState();
//     const [mount, setMount] = useState(true);
//     const [mount2, setMount2] = useState(false);
//     const [mount3, setMount3] = useState(false);
//     const [effect, setEffect] = useState('mount1');


 
//     const handleClickButton = () => {
        
//         if(mount){
            

//             // setTimeout(()=>{     
//             //     setMount(v=> !v);
     
//             // }) 
//         }else{
//             setContent(p1);
//             setEffect('mount1');
//             setMount(v=> !v);
//             setMount2(false);
//             setMount3(false);

//         }
//     }
//     const handleClickButton2 = () => {
        
//         if(mount2){
//             // setEffect('unmount');

//             // setTimeout(()=>{     
//             //     setMount2(v=> !v);
     
//             // }) 
//         }else{
//             setContent(p2);
//             setEffect('mount1');
//             setMount(false);
//             setMount2(v=> !v);
//             setMount3(false);
//         }
//     }

//     const handleClickButton3 = () => {
      
//         if(mount3){
//             // setEffect('unmount');
//             // setTimeout(()=>{     
//             //     setMount3(v=> !v);
//             // }) 
//         }else{
//             setContent(p3);
//             setEffect('mount1');
//             setMount(false);
//             setMount2(false);
//             setMount3(v=> !v);
//         }
//     }



//     return(
//         <>

            

//         </>
//     )
// }

// export default Second;