import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const MisionVision = () => {
  return (
    <>
      <article className="container m-auto altura">
        <Seo title="Misión y Visión" />
        <StaticImage
          src="../images/todos.jpg"
          alt="Trabajadores del CIEC"
          className="w-100"
        />
        <h1 className="titulo">Misión:</h1>
        <p>
          Gestionar conocimientos científicos en el manejo y conservación de
          ecosistemas costeros para un desarrollo sostenible.
        </p>
        <h1 className="titulo">Visión</h1>
        <p>
          Ser el centro de referencia regional en la gestión del conocimiento
          científico para el manejo y conservación de los ecosistemas costeros.
        </p>
      </article>
    </>
  )
}

export default MisionVision
