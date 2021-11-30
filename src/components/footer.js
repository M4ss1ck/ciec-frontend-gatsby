import React from "react"
import { SocialIcon } from "react-social-icons"

import citma from "../images/CITMA.png"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => {
  return (
    <footer className="wrapper container m-auto footer-bg justify-content-between">
      <Row className="d-flex">
        <Col sm="auto">
          <div className="footer-data">
            <h4>Contacto</h4>
            <ul className="lateral">
              <li>
                Dirección: Avenida Los Almácigos, Cayo Coco, Morón, Ciego de
                Ávila
              </li>
              <li>CP: 64900</li>
              <li>
                Tel:{" "}
                <a href="tel:+5333304051" className="mymail">
                  (33) 304051
                </a>{" "}
                y{" "}
                <a className="mymail" href="tel:+5333304003">
                  (33) 304003
                </a>
              </li>
              <li>
                Correos electrónicos:{" "}
                <a href="mailto:ciec@ciec.cu" className="mymail">
                  ciec@ciec.cu
                </a>{" "}
                y{" "}
                <a href="mailto:director@ciec.cu" className="mymail">
                  director@ciec.cu
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm="auto">
          <div className="footer-logo">
            <img src={citma} alt="logotipo del CITMA" />
          </div>
        </Col>
      </Row>
      <hr />
      <div className="container centrar">
        <small className="w-100 centrar mr-auto">
          &copy; {new Date().getFullYear()} Centro de Investigaciones de
          Ecosistemas Costeros
        </small>
        <br />

        <div className="mt-2">
          <SocialIcon
            url="https://twitter.com/DeCosteros"
            bgColor="white"
            style={{ height: 30, width: 30 }}
          />{" "}
          &nbsp;
          <SocialIcon
            url="https://www.facebook.com/ciec.cayococo.50/"
            bgColor="white"
            style={{ height: 30, width: 30 }}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
