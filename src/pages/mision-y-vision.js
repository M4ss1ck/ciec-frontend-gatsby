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
        <h1>Misión:</h1>
        <h4>
          Gestionar conocimientos científicos en el manejo y conservación de
          ecosistemas costeros para un desarrollo sostenible.
        </h4>
        <h1>Visión</h1>
        <h4>
          Ser el centro de referencia regional en la gestión del conocimiento
          científico para el manejo y conservación de los ecosistemas costeros.
        </h4>
      </article>
    </>
  )
}

export default MisionVision
