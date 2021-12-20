import React from "react"
import Seo from "../components/seo"

const social = () => {
  return (
    <>
      <article className="container m-auto altura">
        <Seo
          pageTitle="Objeto Social"
          title="Objeto Social"
          description="Centro de Investigaciones de Ecosistemas Costeros"
          url="/social"
          imageUrl="../images/todos.jpg"
          type="organization"
        />
        <h1 className="titulo">Objeto Social</h1>
        <p>
          Ejecutar proyectos de investigaciones y ofrecer servicios
          científico-técnicos encaminados a la protección y el manejo sostenible
          de zonas costeras naturales, afectadas por el desarrollo económico,
          turístico y social.
        </p>
      </article>
    </>
  )
}

export default social
