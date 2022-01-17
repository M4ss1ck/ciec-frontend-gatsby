import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const contacto = () => {
  return (
    <>
      <article className="container m-auto prose lg:prose-2xl dark:prose-dark mx-auto">
        <Seo title="Sobre Nosotros" />
        <h1 className="titulo">
          Centro de Investigación de Ecosistemas Costeros
        </h1>

        <StaticImage
          src="../images/todos.jpg"
          alt="Trabajadores del CIEC"
          className="object-fill py-4"
        />

        <p className="p-2 font-medium text-lg">
          El Centro de Investigaciones de Ecosistemas Costeros (CIEC) de Cayo
          Coco se adscribe a la Agencia de Medio Ambiente (AMA), perteneciente
          al Ministerio de Ciencia, Tecnología y Medio Ambiente (CITMA).
        </p>
      </article>
    </>
  )
}

export default contacto
