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
                        <p>Java</p>
                        <span>
                            기본적인 자료구조와 알고리즘에 대해 이해하고 있습니다.
                        </span>
                    </div>
                    <div className="box two">
                        <div>02</div>
                        <p>Spring boot</p>
                        <span>spring boot와 jpa를 이용한 웹사이트를 만든 경험이 있습니다.
                        </span>
                    </div>
                    <div className="box three">
                        <div>03</div>
                        <p>Node.js</p>
                        <span>
                            javascript로 CRUD와 Socket를 활용한 개발 경험이 있습니다.
                        </span>
                    </div>
                    <div className="box four">
                        <div>04</div>
                        <p>MySQL</p>
                        <span>
                            mysql로 데이터베이스를 설계한 경험이 있습니다.
                        </span>
                    </div>
                    </div>
                    
       

            
            </div>
            
        </>
    );
}