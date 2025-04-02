import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

const login = () => {
  return (
    <Container className='mb-5'>
        <h1 className='text-center pt-4 pb-5'>로그인</h1>
        <fieldset>
            <Form.Group className="mb-3">
            <Row>
            <Col md={3}></Col>
            <Col md={2}><Form.Label htmlFor="disabledTextInput">아이디</Form.Label></Col>
            <Col md={5}><Form.Control type="text" id="userid" aria-describedby="basic-addon1" /></Col>
            <Col md={2}></Col>
            </Row>
            </Form.Group>
            <Form.Group className="mb-3">
            <Row>
            <Col md={3}></Col>
            <Col md={2}><Form.Label htmlFor="disabledTextInput" className='password'>비밀번호</Form.Label></Col>
            <Col md={5}><Form.Control type="password" id="userpass" aria-describedby="basic-addon1" /></Col>
            <Col md={2}></Col>
            </Row>
            </Form.Group>
            <div className="text-center pt-4 pb-3">
                <Button type="submit" className='ml-1 mr-1'>로그인</Button>
                <div className='mt-2 pt-2 mb-2'>
                    <a href="#">계정이 없으신가요?</a>
                </div>
                <div>
                    <a href="#">비밀번호를 까먹으셨나요?</a>
                </div>
            </div>
        </fieldset>
    </Container>
  )
}

export default login