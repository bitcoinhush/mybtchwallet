import React from 'react'
import {Container, Row, Col} from 'reactstrap';

var footer = {
  backgroundColor: '#f5f5f5'
}

var longP = {
  wordWrap: 'break-word'
}

export default class ZFooter extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
        <footer id="contact">
		<div className="footer-bottom">
        <Container>
        <Row>
          <Col md="12">
            <a href="#" data-toggle="modal" data-target="#faqopen" className="btn-white-line">FAQ</a>
            <a href="#" data-toggle="modal" data-target="#guideopen" className="btn-white-line">Guide</a>
            <p className="copyright m-3">MAKE SURE YOU ARE ON <b>xxxxxx.ORG AND BOOKMARK IT</b></p>
            <p className="copyright">Keys are validated client-side and do not leave your browser or network. You are responsible for keeping your own keys safe!<br/>
            SAVE YOUR PRIVATE KEY BEFORE SENDING OR RECEIVING, LEAVING THE PAGE WILL ERASE EVERYTHING.</p>
          </Col>
        </Row>
        </Container>
        </div>
        </footer>
    )
  }
}
