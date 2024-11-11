import React,{useState} from "react";
import './First.scss';
import p1 from '../img/project1.png';
import p2 from '../img/project2.png';
import p3 from '../img/project3.png';
import ProjectDetails from './ProjectDetails'; 
const First = (props)=>{

    const images = [p1, p2, p3]; // 이미지 배열
    const [index, setIndex] = useState(0); // 현재 이미지 인덱스

    // 다음 이미지로 이동하는 함수
    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // 이전 이미지로 이동하는 함수
    const handlePrevious = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


    



    return(
        <>
        <div className="first-container">
        <div className="btn-box">
                <button className="btn-prev" onClick={handlePrevious}><span className="material-symbols-outlined">
arrow_circle_left
</span></button>
                <button className="btn-next" onClick={handleNext}><span className="material-symbols-outlined">
arrow_circle_right
</span></button>
            </div>
        <div className={`one-img ${index % 2 === 0 ? "mount1" : "unmount"}`}>
            <img src={images[index]} alt={`slide-${index + 1}`} />



        </div>

        <div className="one-info">
                <div className="one-number">{`0${index + 1}`}</div>
                <p className="one-title">{index === 0 ? "알바온" : index === 1 ? "Chatta" : "M.M.M"}</p>
                <p>{index === 0 ? "(근태관리 웹 서비스)" : index === 1 ? "(실시간 채팅 웹 서비스)" : "(운동인을 위한 종합 웹 사이트)"}</p>
                <ProjectDetails index={index} />
                <div className="stack">
        {index === 0 ? (
            <>
                <span className="badge" style={{ backgroundColor: "#6db33f", color: "#fff" }}>SpringBoot</span>
                <span className="badge" style={{ backgroundColor: "#f89820", color: "#fff" }}>Java</span>
                <span className="badge" style={{ backgroundColor: "#6db33f", color: "#fff" }}>Spring Data JPA</span>
                <span className="badge" style={{ backgroundColor: "#181717", color: "#fff" }}>Git</span>
                <span className="badge" style={{ backgroundColor: "#00758f", color: "#fff" }}>MySQL</span>
                <span className="badge" style={{ backgroundColor: "#85ea2d", color: "#4a4a4a" }}>Swagger</span>
                <span className="badge" style={{ backgroundColor: "#232f3e", color: "#ff9900" }}>AWS</span>
            </>
        ) : index === 1 ? (
            <>
                <span className="badge" style={{ backgroundColor: "#f0db4f", color: "#323330" }}>JavaScript</span>
                <span className="badge" style={{ backgroundColor: "#339933", color: "#fff" }}>Node.js</span>
                <span className="badge" style={{ backgroundColor: "#4479a1", color: "#fff" }}>MySQL</span>
                <span className="badge" style={{ backgroundColor: "#0769ad", color: "#fff" }}>jQuery</span>
                <span className="badge" style={{ backgroundColor: "#303030", color: "#fff" }}>Express</span>
                <span className="badge" style={{ backgroundColor: "#181717", color: "#fff" }}>GitHub</span>
                <span className="badge" style={{ backgroundColor: "#4a90e2", color: "#fff" }}>WebSocket</span>
            </>
        ) : (
            // 다른 index일 때 기본 배지 표시
            <span className="badge" style={{ backgroundColor: "#ccc", color: "#333" }}>CSS</span>
        )}
    </div>
    <hr/>
    <div className="more">
    {/* index가 0과 2일 때만 '자세히보기' 버튼 렌더링 */}
    {(index === 0 || index === 2) && (
        <button onClick={() => {
            if (index === 0) {
                window.open('http://portfolioalbaon.notion.site', '_blank'); // p1에 해당하는 링크
            } else if (index === 2) {
                window.open('https://precious-sawine-3a90c9.netlify.app/', '_blank'); // p3에 해당하는 링크
            }
        }}>
            <div>자세히 보기</div>
        </button>
    )}

    {/* index가 0과 1일 때만 'Github 바로가기' 버튼 렌더링 */}
    {(index === 0 || index === 1) && (
        <button onClick={() => {
            if (index === 0) {
                window.open('https://github.com/raddadda/Albabackend', '_blank'); // p1에 해당하는 링크
            } else if (index === 1) {
                window.open('https://github.com/raddadda/chatta', '_blank'); // p2에 해당하는 링크
            }
        }}>
            <div>Github 바로가기</div>
        </button>
    )}
</div>


        </div>
        </div>

                    
        </>
    )
}

export default First;