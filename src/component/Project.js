import './Project.scss';
import React, {useEffect, useState} from 'react';
import p1 from '../img/project1.png';
import p2 from '../img/project2.png';
import p3 from '../img/project2.png';
import { set } from 'react-hook-form';
import First from './First';
import Second from './Second';
export default function Project(){



    return (
        <>
            <div className="project_container">
                <div className="project-title">
                    <div>Project</div>
                </div>
                
                <div className='box'>
                    <First></First>  
                </div>
            </div>
        </>
    );
}