import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const detail = () => {
  return (
    <>
    <Container>
        <Row className="d-all">
            <div>
                <div className="d-title">제목입니다.</div>
            </div>
            <Col md={6} className="d-flex">
                <div className="d-name">등록자명</div>
                <div>김**</div>
            </Col>
            <Col md={6} className="d-flex">
                <div className="d-date">등록일</div>
                <div>2025-04-02</div>
                </Col>
            <Col md={12} className="d-flex">
                <div className="d-count">조회수</div>
                <div>2</div>
            </Col>
            <Col md={12}>   
                <div className="content">
                    안녕하세요.
                    반갑습니다.
                </div>
            </Col>  
        </Row>
        <Row>
            <Col className="btn-box">
            <button className="edit-btn">수정</button>
            <button className="delete-btn">삭제</button>
            <button className="list-btn">목록</button>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default detail