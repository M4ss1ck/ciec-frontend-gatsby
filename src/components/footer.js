import React from "react"
import { SocialIcon } from "react-social-icons"

import citma from "../images/CITMA.png"

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-l from-primario via-terciario to-primario text-white dark:from-black dark:via-gray-900 dark:to-black">
      <div className="inline-flex flex-col md:flex-row w-full justify-center text-gray-200 dark:text-gray-400">
        <div className="flex-col w-full md:w-1/2">
          <div className="flex flex-col w-full p-4">
            <h4 className="font-bold">Contacto</h4>
            <ul className="lateral">
              <li>
                <span className="font-bold">Dirección:</span> Avenida Los
                Almácigos, Cayo Coco, Morón, Ciego de Ávila
              </li>
              <li>
                <span className="font-bold ">CP:</span> 64900
              </li>
              <li>
                <span className="font-bold ">Tel:</span>{" "}
                <a
                  href="tel:+5333304051"
                  className="text-white font-light hover:font-bold hover:text-primario dark:hover:text-secundario"
                >
                  (33) 304051
                </a>{" "}
                y{" "}
                <a
                  className="text-white font-light hover:font-bold hover:text-primario dark:hover:text-secundario"
                  href="tel:+5333304003"
                >
                  (33) 304003
                </a>
              </li>
              <li>
                <span className="font-bold ">Correos electrónicos:</span>{" "}
                <a
                  href="mailto:ciec@ciec.cu"
                  className="text-white font-light  hover:font-bold hover:text-primario dark:hover:text-secundario"
                >
                  ciec@ciec.cu
                </a>{" "}
                y{" "}
                <a
                  href="mailto:director@ciec.cu"
                  className="text-white font-light hover:font-bold hover:text-primario dark:hover:text-secundario"
                >
                  director@ciec.cu
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-col justify-center w-full md:w-1/5">
          <div className="flex h-full items-center justify-center p-4">
            <img src={citma} alt="logotipo del CITMA" />
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className="w-full flex flex-col h-full items-center justify-center bg-primario dark:bg-black">
        {/* <br /> */}
        <div className="mt-2 py-2">
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
        <small className="w-full mr-auto text-white md:items-center md:text-center px-4">
          &copy; {new Date().getFullYear()} Centro de Investigaciones de
          Ecosistemas Costeros
        </small>
      </div>
    </footer>
  )
}

export default Footer
