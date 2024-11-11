import React, { useState } from 'react';

const ProjectDetails = ({ index }) => {
    const getProjectContent = (index) => {
        switch(index) {
            case 0:
                return (
                    <div className="one-text">
                        2023.11~2023.12 (백엔드3,프론트2 팀 프로젝트) <div></div>
                        <hr></hr>
                        <b> 
                            <span>소개: 소규모 자영업장에서 아르바이트 직원을 관리하기 위한 HR 시스템</span><br></br><br></br>
                            • 근태, 급여정산, 일정관리 기능을 API로 구현<div></div>
                            • SpringSecurity + JWT 로그인 구현<div></div>
                            • 사업자와 직원의 권한에 따른 기능 세분화<div></div>
                            • 캘린더를 이용한 일정 생성, 조회, 수정, 삭제<div></div>
                            • 출퇴근기록을 통한 한달 급여 조회(주휴수당 포함)
                        </b>
                    </div>
                );
            case 1:
                return (
                    <div className="one-text">
                        2023.08~2023.09 (총 4명 팀 프로젝트) <div></div>
                        <hr></hr>
                        <b>
                            <span>소개 : 웹 소켓을 이용하여 개발한 실시간 채팅 웹 서비스</span><br></br><br></br>
                            • 유저가 채팅 채널을 생성하고 다른사람들과 실시간으로 채팅하는 서비스입니다.<div></div>
                            • 게시판의 생성,조회,수정,삭제 기능<div></div>
                            • 커서페이징 무한스크롤 조회기능<div></div>
                        </b>
                    </div>
                );
            case 2:
                return (
                    <div className="one-text">
                        2023.07~2023.08 (총 4명 팀 프로젝트) <div></div>
                        <hr></hr>
                        <b>
                            <span>소개 : 다양한 운동 정보와 캘린더 기능을 제공하는 웹 페이지입니다.</span><br></br><br></br>
                            • 프론트엔드를 처음 입문하며 css를 다뤄본 프로젝트입니다.<div></div>
                            • 캘린더를 이용한 투두리스트 기능<div></div>
                            • 반응형 웹으로 제작<div></div>
                        </b>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="project-content">
            {getProjectContent(index)}
        </div>
    );
};

export default ProjectDetails;
