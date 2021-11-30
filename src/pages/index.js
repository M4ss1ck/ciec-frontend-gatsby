import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <>
    <Seo title="Página Principal" />
    <article className="container m-auto justify-content-between float">
      <h2 className="h2">
        Bienvenidos al Centro de Investigaciones de Ecosistemas Costeros
      </h2>
      <StaticImage src="../images/location.png" alt="" className="img-inline" />
      <p>
        El Centro de Investigaciones de Ecosistemas Costeros se encuentra
        ubicado en Cayo Coco, en la parte central del Archipiélago
        Sabana-Camagüey, al norte de la provincia de Ciego de Ávila, en el
        centro de Cuba. Este cayo tiene un área aproximada de 370 km2 y
        constituye uno de los núcleos principales para el desarrollo del turismo
        en nuestro país debido a la gran belleza de muchos de sus recursos
        naturales, entre los que sobresalen, sus bosques, manglares, playas y su
        rica biodiversidad.
      </p>
      <p>
        Dado el creciente desarrollo del turismo en el territorio y la necesidad
        de proteger y utilizar de manera sostenible los recursos naturales del
        archipiélago, se funda nuestro centro el 28 de noviembre de 1991 en el
        sitio conocido por Playa Larga, donde actualmente se localiza la mayor
        cantidad de instalaciones turísticas de la zona.{" "}
      </p>
      <p>
        Entre los objetivos principales de este centro, adscrito al Ministerio
        de Ciencia, Tecnología y Medio Ambiente, se destacan la conservación y
        manejo de la biodiversidad de las zonas costeras del territorio
        nacional.
      </p>
      <p>
        Una de las líneas más importantes del trabajo investigativo consiste en
        la caracterización estructural y funcional de los ecosistemas costeros
        mediante el monitoreo constante de los principales indicadores
        ambientales.{" "}
      </p>
    </article>
    <article>
      <h2 className="text-xl dark:text-secundario font-bold mt-6">Noticias</h2>
      <ul className="flex flex-row flex-wrap items-center justify-evenly w-full">
        {data.allStrapiArticle.edges.map(document => (
          <Link
            key={document.node.id}
            to={`/noticias/${document.node.slug}`}
            className="text-gray-600 dark:text-gray-500 hover:text-gray-300 hover:bg-primario dark:hover:bg-gray-800 dark:hover:text-secundario group w-full md:w-1/3 lg:w-1/4 p-2 m-1 border-4 border-white hover:border-primario dark:hover:border-secundario rounded-lg flex flex-col justify-center items-center"
          >
            <li className="group-hover:border-primario rounded-lg flex flex-col justify-center items-center">
              <h2>{document.node.title}</h2>
              <GatsbyImage
                image={
                  document.node.image.localFile.childImageSharp.gatsbyImageData
                }
                className=""
                alt={document.node.title}
              />
              <p>{document.node.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </article>

    <article>
      <h2 className="text-xl dark:text-secundario font-bold mt-6">
        Categorías
      </h2>
      <ul className="flex flex-row flex-wrap items-center justify-evenly w-full">
        {data.allStrapiCategory.edges.map(tag => (
          <Link
            key={tag.node.id}
            to={`/categoria/${tag.node.slug}`}
            className="text-gray-600 dark:text-gray-500 hover:text-gray-300 hover:bg-primario dark:hover:bg-gray-800 dark:hover:text-secundario group w-auto p-2 m-1 border-4 border-white hover:border-primario dark:hover:border-secundario rounded-lg flex flex-col justify-center items-center"
          >
            <li className="group-hover:border-primario rounded-lg flex flex-col justify-center items-center">
              <h2>{tag.node.name}</h2>
            </li>
          </Link>
        ))}
      </ul>
    </article>
  </>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          slug
          description
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 200, height: 125, layout: FIXED)
              }
            }
          }
        }
      }
    }
    allStrapiCategory {
      edges {
        node {
          slug
          id
          name
        }
      }
    }
  }
`
