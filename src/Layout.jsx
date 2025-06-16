import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Outlet} from'react-router-dom'
import Header from './pages/Header'
import Footer from './pages/Footer'

const Layout = ({title}) => {
  return (
    <>
        <Header />
        <h1 className='text-center mt-5 mb-4'>{title}</h1>
        <p className="text-center mb-5 pb-5">jsp + servlet으로 디자인 할 자유 게시판입니다.</p>
        <Container>
            <Row>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>
        <Footer />
    </>
  )
}

export default Layout