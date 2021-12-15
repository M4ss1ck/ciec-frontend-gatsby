import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"
//import banner from "../images/Banner.jpg"
import BaseTerrestre from "../images/Banner/BaseTerrestre.png"
import ReadingProgress from "./readingProgress"
import Subir from "./subir"

const enlaces = [
  {
    name: "Institución",
    menu: [
      { link: "/mision-y-vision", name: "Misión y visión" },
      { link: "/social", name: "Objeto Social" },
      { link: "/historia", name: "Historia del CIEC" },
      { link: "/estructura", name: "Estructura e Integrantes" },
    ],
  },
  {
    name: "Investigación",
    menu: [
      { link: "/grupos", name: "Grupos de Investigación" },
      { link: "/consultoria-ambiental", name: "Consultoría Ambiental" },
      { link: "/proyectos", name: "Proyectos" },
    ],
  },
  {
    name: "De Interés",
    menu: [
      { link: "/galeria", name: "Galería" },
      { link: "/contacto", name: "Sobre Nosotros" },
    ],
  },
]

const Layout = ({ children }) => {
  const target = React.createRef()
  return (
    <>
      <header
        id="header"
        className="flex flex-col items-center w-full p-0 m-0 bg-gradient-to-r from-primario via-terciario to-primario dark:from-black dark:via-gray-900 dark:to-black"
      >
        <img
          src={BaseTerrestre}
          className="object-fill"
          height={1088}
          width={10629}
          alt="Banner"
        />
      </header>

      <Header enlaces={enlaces} />
      <ReadingProgress target={target} />
      <main
        lang="es"
        className="container m-auto py-2 justify-content-between bg-gradient-to-r from-primario via-terciario to-primario dark:from-black dark:via-gray-800 dark:to-black text-gray-700 dark:bg-gray-900 dark:text-gray-400 text-center min-h-screen md:min-h-min"
        ref={target}
      >
        {children}
      </main>
      <Subir />
      <Footer />
    </>
  )
}

export default Layout
