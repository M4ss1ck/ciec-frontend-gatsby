import React from "react"

import { Tab } from "@headlessui/react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const estructura = () => {
  return (
    <>
      <article className="container m-auto w-full text-center prose dark:prose-dark mx-auto">
        <Seo title="Estructura" />
        <h2 className="titulo">
          Centro de Investigación de Ecosistemas Costeros
        </h2>
        <Tab.Group>
          <Tab.List>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-secundario text-white px-4 py-2 -mb-px font-semibold rounded-t"
                  : "bg-white text-secundario px-4 py-2 -mb-px font-semibold rounded-t"
              }
            >
              Estructura
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-secundario text-white px-4 py-2 -mb-px font-semibold rounded-t"
                  : "bg-white text-secundario px-4 py-2 -mb-px font-semibold rounded-t"
              }
            >
              Organigrama
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="flex flex-row justify-items-start">
              <div className="columns-1 md:columns-2 py-4">
                <h1 className="titulo">Ecología</h1>
                <ul>
                  <li>Leslie Hernández Fernández</li>
                  <li>Raúl Gómez Fernández</li>
                  <li>Mabel López Rojas</li>
                  <li>Evelyn Marichal Arbona</li>
                  <li>Antonio García Quintas</li>
                  <li>Yunier Olivera Espinosa</li>
                  <li>Marianela Torres Cruz</li>
                  <li>Roy Phillips Pérez</li>
                  <li>Ihovanys López Gutierrez</li>
                  <li>Claudia Bustamante López</li>
                  <li>Leila M. Leon Fraga</li>
                </ul>
                <h1 className="titulo">Geocomponentes</h1>
                <ul>
                  <li>Tamara Figueredo Martín</li>
                  <li>Leander Brizuela Pardo</li>
                  <li>Yens M. Ferrero Rosales</li>
                  <li>Reisbel Báez Castañeda</li>
                </ul>
                <h1 className="titulo">Análisis Físico Químico</h1>
                <ul>
                  <li>Evelio A. Alemán Martín</li>
                  <li>Aleynis M. Barredo Year</li>
                </ul>
                <h1 className="titulo">Dinámica</h1>
                <ul>
                  <li>Adán Zúñiga Ríos</li>
                  <li>Yandy Rodríguez Cueto</li>
                  <li>Adrian Fasta Serrano</li>
                  <li>Santiago Valdivia Mayoral</li>
                  <li>Maria Elena Nuñez Sánchez</li>
                  <li>Aldo Díaz Nodarse</li>
                </ul>
                <h1 className="titulo">Hidrometeorología</h1>
                <ul>
                  <li>Felipe Matos Pupo</li>
                  <li>Luis M. Castellanos Suárez</li>
                  <li>Angel Sánchez Fernández</li>
                  <li>Lídice Vázquez Carvajal</li>
                  <li>Abelardo Sánchez Herández</li>
                  <li>Mayleidis Reiné Guerra</li>
                  <li>Daynier Escalante Pérez</li>
                </ul>
                <h1 className="titulo">
                  Grupo de Gestión y Monitoreo de la Costa Sur de Cuba
                </h1>
                <ul>
                  <li>Carlos L. Falcón Cabrera</li>
                  <li>Emilio J. Fernández de la Vega</li>
                  <li>Yuniel Pupo Pérez</li>
                </ul>
                <h1 className="titulo">
                  Área de Investigación "Los Buchillones"
                </h1>
                <ul>
                  <li>Yanelis Buchillón López</li>
                  <li>Ihosvany Martínez Tamayo</li>
                  <li>Lázaro G. Calvos Iglesia</li>
                  <li>Indira Mayea Buchillón</li>
                  <li>Addys Molinet Camak</li>
                  <li>Dayma Y. Morell Puñales</li>
                  <li>Dayessi Rojas Escobar</li>
                  <li>Ana Iris Lugones Martín</li>
                </ul>

                <h1 className="titulo">Dirección</h1>
                <ul>
                  <li>Fabian Pina Amargos</li>
                  <li>Roberto González de Zayas</li>
                </ul>
                <h1 className="titulo">Apoyo Dirección</h1>
                <ul>
                  <li>Dilliam de la C. López Hernández</li>
                  <li>Heberto Morales Delgado</li>
                </ul>
                <h1 className="titulo">Servicios Científico-Técnicos</h1>
                <ul>
                  <li>Yordano Barreda Pino</li>
                  <li>Omar J. Fernández Pérez</li>
                  <li>Gilberto Darias Hernandez</li>
                </ul>
                <h1 className="titulo">Economía</h1>
                <ul>
                  <li>Angel M. Phillips Pena</li>
                  <li>Yiselis Palmero Alemán</li>
                  <li>Jorge Combet González</li>
                </ul>
                <h1 className="titulo">Recursos Humanos</h1>
                <ul>
                  <li>Arminda Villar Borroto</li>
                  <li>Eliany Gonzalez Prado</li>
                </ul>
                <h1 className="titulo">Servicios Generales</h1>
                <ul>
                  <li>Eliana Gutierrez Torres</li>
                  <li>Vivian Dimas Montalvo</li>
                  <li>Antonia Luis Mestres</li>
                  <li>Wiliam Sierra Reyes</li>
                  <li>Yamir Díaz Castellón</li>
                  <li>Dannys Requeira Rodríguez</li>
                  <li>Mariano Quesada García</li>
                  <li>Ana Maria Mosa Moreno</li>
                  <li>Mileydis Arcia Crespo</li>
                  <li>Victor Manuel Portales Dimas</li>
                </ul>
                <h1 className="titulo">Seguridad y Protección</h1>
                <ul>
                  <li>Arturo Sanchez Cuba</li>
                  <li>Juan C. Rodríguez Díaz</li>
                  <li>Octavio Rivera Gutierrez</li>
                  <li>Alberto González Díaz</li>
                  <li>Duniel Clavelo Quintana</li>
                  <li>Oscar Luis Escobar Cancio</li>
                  <li>Luis Mario Silva Burgos</li>
                  <li>Noriel Rodriguez Buchillon</li>
                </ul>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <article>
                <figure className="flex items-center justify-center">
                  <StaticImage
                    src="../images/organigrama.png"
                    alt="Organigrama del Centro"
                    className="alignleft"
                  />
                </figure>
              </article>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </article>
    </>
  )
}

export default estructura
