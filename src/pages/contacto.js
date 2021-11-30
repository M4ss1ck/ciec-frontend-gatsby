import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const contacto = () => {
  return (
    <>
      <article className="container m-auto altura">
        <Seo title="Sobre Nosotros" />
        <h2 className="h1">Centro de Investigación de Ecosistemas Costeros</h2>

        <StaticImage
          src="../images/todos.jpg"
          alt="Trabajadores del CIEC"
          className="w-100"
        />

        <h4>
          El Centro de Investigaciones de Ecosistemas Costeros (CIEC) de Cayo
          Coco se adscribe a la Agencia de Medio Ambiente (AMA), perteneciente
          al Ministerio de Ciencia, Tecnología y Medio Ambiente (CITMA).
        </h4>
      </article>
    </>
  )
}

export default contacto
