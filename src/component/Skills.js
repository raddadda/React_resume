import './Skills.scss';
export default function Skills(){

    return (
        <> 
            
            <div className='skills_container'>
                <div className="skills-title">
                    <div>Skills</div>
                    
                    </div>

                    <div className='skills-wrap'>
                    <div className="box one">
                        <div>01</div>
                        <p>프로그래밍 언어</p>
                        
                        <span>
                            
                        <img src="https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java Badge" />
                        &nbsp;
                        <img src="https://img.shields.io/badge/Javascript-ECD53F?style=for-the-badge&logo=javascript&logoColor=white" alt="Javascript Badge" />
                        </span>
                    </div>
                    <div className="box two">
                        <div>02</div>
                        <p>프레임워크 및 라이브러리</p>
                        
                        <span>
                        <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring Badge" />
                        &nbsp;
                        <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot Badge" />
                        &nbsp;
                        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Badge" />
                        &nbsp;
                        <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Badge" />
                        </span>
                    </div>
                    <div className="box three">
                        <div>03</div>
                        <p>데이터베이스</p>
                        <span>
                        <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Badge" />
                            
                        </span>
                    </div>
                    <div className="box four">
                        <div>04</div>
                        <p>기타</p>
                        <span>
                            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git Badge" />
                            &nbsp;
                            <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS Badge" />

                        </span>
                    </div>
                    </div>
                    
       

            
            </div>
            
        </>
    );
}