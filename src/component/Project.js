import './Project.scss';
import React, {useEffect, useState} from 'react';
import p1 from '../img/project1.png';
import p2 from '../img/project2.png';
import p3 from '../img/project2.png';
import { set } from 'react-hook-form';
import First from './First';
import Second from './Second';
export default function Project(props){

    // const [scrollHandle, setScrollHandle] = useState(false);
    console.log(props.props);
    // if(props.props >=2800){
    //     //console.log(123);
    //     setScrollHandle(true);
    // }
    return (
        <>
            <div className="project_container">
                <div className="project-title">
                    <div>Project</div>
                </div>
                
                <div className='box'>
                    {/* {props.props >=2000 ?   <First props2={props.props}></First>   :<></>} */}
                    <First props2={props.props}></First>
                </div>
            </div>
        </>
    );
}