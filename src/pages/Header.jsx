import React from 'react'
import { Navbar, Container, Nav, NavDropdown, NavbarCollapse} from 'react-bootstrap'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const handleSelect = (e) => alert(`선택 : ${e}`);
  return (
    <Navbar expand="lg" className='bgcolor'>
        <Container>
            <Navbar.Brand href='#' className='me-5'>React.Bootstrap Design</Navbar.Brand>
            <Navbar.Toggle aria-controls='sample-navbar'><GiHamburgerMenu /></Navbar.Toggle>
            <NavbarCollapse id="sample-navbar">
                <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
                    <Nav.Item className='mx-4'>
                        <Nav.Link eventKey="1" href="#">
                            NavLink 1 content
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mx-4'>
                        <Nav.Link eventKey="2" href="#">
                            NavLink 2 content
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mx-4'>
                        <Nav.Link eventKey="3" href="#">
                            NavLink 3 content
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mx-4'>    
                        <Nav.Link eventKey="4" href="#">
                            NavLink 4 content
                        </Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Dropdown" id="nav-dropdown">
                        <NavDropdown.Item eventKey="5.1">리엑트</NavDropdown.Item>
                        <NavDropdown.Item eventKey="5.2">자바스크립트</NavDropdown.Item>
                        <NavDropdown.Item eventKey="5.3">자바</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="5.4">리엑트와 자바</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </NavbarCollapse>
        </Container>
    </Navbar>
    
  )
}
export default Header
