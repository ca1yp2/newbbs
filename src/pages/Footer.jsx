import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiKakaoTalkFill } from "react-icons/ri";
import footerStyles from '../css/footerStyle'
const Footer = () => {
  const {footer, footerMenu,footerMenuLi,footerMenuA,footerProfile,footerProfileUl,inlineBlock,footerProfileUlLiA} = footerStyles
  return (
    <footer style={footer}>
      <Container>
        <Row className='text-center'>
          <Col xs={12}>
            <div style={footerMenu}>
              <ul style={footerMenuLi}>
                <li style={inlineBlock}>
                  <a href="#" style={footerMenuA}>ABOUT</a>
                </li>
                <li style={inlineBlock}>
                  <a href="#" style={footerMenuA}>SERVICE</a>
                </li>
                <li style={inlineBlock}>
                  <a href="#" style={footerMenuA}>PRODUCT</a>
                </li>
                <li style={inlineBlock}>
                  <a href="#" style={footerMenuA}>WORKS</a>
                </li>
                <li style={inlineBlock}>
                  <a href="#" style={footerMenuA}>CONTACT</a>
                </li>
              </ul>
            </div>
            <div className="text-center py-2">
              <p className='text-white'>&copy; 2025 Hyeon. All Rights Reserved.</p>
            </div>
            <div style={footerProfile}>
              <ul style={footerProfileUl}>
                <li style={inlineBlock}><a href="#" style={footerProfileUlLiA}><FaFacebook /></a></li>
                <li style={inlineBlock}><a href="#" style={footerProfileUlLiA}><RiTwitterXLine /></a></li>
                <li style={inlineBlock}><a href="#" style={footerProfileUlLiA}><RiInstagramFill /></a></li>
                <li style={inlineBlock}><a href="#" style={footerProfileUlLiA}><RiKakaoTalkFill /></a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer