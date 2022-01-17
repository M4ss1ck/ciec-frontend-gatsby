import React from "react"
//import { Link, useStaticQuery, graphql } from "gatsby"
import { SocialIcon } from "react-social-icons"
import { StaticImage } from "gatsby-plugin-image"

// import citma from "../images/CITMA.png"
// import ciec from "../images/logo_CIEC_footer.png"
// import ama from "../images/AMA.png"

const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query FooterQuery {
  //     allStrapiCategory {
  //       edges {
  //         node {
  //           slug
  //           id
  //           name
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <footer className="w-full bg-gradient-to-l from-primario via-terciario to-primario text-white dark:from-black dark:via-gray-900 dark:to-black">
      {/* <div className="bg-primario dark:bg-black">
        <ul className="flex flex-row flex-wrap items-center justify-evenly w-full">          
          {data.allStrapiCategory.edges.map(tag => (
            <Link
              key={tag.node.id}
              to={`/categoria/${tag.node.slug}`}
              className="text-gray-600 dark:text-gray-500 hover:text-gray-300 hover:bg-primario dark:hover:bg-gray-800 dark:hover:text-secundario group w-auto p-2 m-1 border-4 border-transparent hover:border-primario dark:hover:border-secundario rounded-lg flex flex-col justify-center items-center"
            >
              <li className="group-hover:border-white rounded-lg flex flex-col justify-center items-center">
                <h2>{tag.node.name}</h2>
              </li>
            </Link>
          ))}
        </ul>
      </div>  */}
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
        <div className="flex flex-row flex-nowrap justify-evenly items-center p-2 w-full md:w-1/5">
          <StaticImage
            src="../images/logo_CIEC_footer.png"
            alt="logotipo del CIEC"
            width={45}
            height={45}
            className="object-center"
          />{" "}
          <StaticImage
            src="../images/AMA.png"
            alt="logotipo de la AMA"
            width={45}
            height={45}
            className="object-center"
          />{" "}
          <StaticImage
            src="../images/CITMA.png"
            alt="logotipo del CITMA"
            width={45}
            height={45}
            className="object-center"
          />
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
