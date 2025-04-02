import React from 'react'
import { Container, Row, Col, Button, Form, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap'

const Register = () => {
  return (
    <Container className='mb-5'>
      <Form>
        <fieldset>
          <Form.Group className="mb-3">
            <Row>
            <Col md={3}><Form.Label htmlFor="disabledTextInput">아이디</Form.Label></Col>
            <Col md={9}><Form.Control type="text" id="userid" placeholder="아이디" aria-describedby="basic-addon1" /></Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3">
            <Row>
            <Col md={3}><Form.Label htmlFor="disabledTextInput">비밀번호</Form.Label></Col>
            <Col md={9}><Form.Control type="password" id="userpass" placeholder="비밀번호" aria-describedby="basic-addon1" /></Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3">
            <Row>
            <Col md={3}><Form.Label htmlFor="disabledTextInput">비밀번호 확인</Form.Label></Col>
            <Col md={9}><Form.Control type="password" id="reuserpass" placeholder="비밀번호 확인" aria-describedby="basic-addon1" /></Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3">
            <Row>
            <Col md={3}><Form.Label htmlFor="disabledTextInput">이름</Form.Label></Col>
            <Col md={9}><Form.Control type="text" id="username" placeholder="이름" aria-describedby="basic-addon1" /></Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3">
            <Row>
            <Col md={3}><Form.Label htmlFor="disabledTextInput">이메일</Form.Label></Col>
            <Col md={9}>
              <InputGroup className="mb-3">
              <Form.Control
                type="text"
                id="useremail"
                placeholder="이메일"
                aria-label="email"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text id="basic-addon1">
                <DropdownButton variant="outline-secondary" title="@example.com" id="input-group-dropdown-1">
                  <Dropdown.Item href="#">@naver.com</Dropdown.Item>
                  <Dropdown.Item href="#">@Daum.net</Dropdown.Item>
                  <Dropdown.Item href="#">@gmail.com</Dropdown.Item>
                </DropdownButton>
              </InputGroup.Text>
              </InputGroup>
            </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3">
            <Row>
            <Col md={3}><Form.Label htmlFor="disabledTextInput">전화번호</Form.Label></Col>
            <Col md={9}><Form.Control type="text" id="usertel" placeholder="전화번호" aria-describedby="basic-addon1" /></Col>
            </Row>
          </Form.Group>
          <div className="text-center pt-4 pb-3">
            <Button type='reset' variant="secondary" className='ml-1 mr-1'>취소</Button>
            <Button type="submit" className='ml-1 mr-1'>전송</Button>
          </div>
          
        </fieldset>
      </Form>
    </Container>
  )
}

export default Register