import React from "react"
import { Tab } from "@headlessui/react"
import Seo from "../components/seo"

const proyectos = () => {
  return (
    <>
      <article className="container m-auto prose lg:prose-2xl dark:prose-dark">
        <Seo title="Proyectos" />
        <h1 className="titulo">Proyectos Culminados:</h1>
        <Tab.Group>
          <Tab.List>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-secundario text-white px-4 py-2 -mb-px font-semibold rounded-t-lg border-b-4 border-b-secundario"
                  : "bg-black text-gray-700 px-4 py-2 -mb-px font-semibold rounded-t"
              }
            >
              2017
            </Tab>
            <Tab
              disabled
              className="text-gray-400 px-4 py-2 -mb-px font-semibold rounded-t-lg border-b-4 border-b-secundario"
            >
              2018
            </Tab>
            <Tab
              disabled
              className=" text-gray-400 px-4 py-2 -mb-px font-semibold rounded-t-lg border-b-4 border-b-secundario"
            >
              2019
            </Tab>
            <Tab
              disabled
              className="text-gray-400 px-4 py-2 -mb-px font-semibold rounded-t-lg border-b-4 border-b-secundario"
            >
              2020
            </Tab>
            <Tab
              disabled
              className="text-gray-400 px-4 py-2 -mb-px font-semibold rounded-t-lg border-b-4 border-b-secundario"
            >
              2021
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <ul className="lista-verde text-left py-4">
                <li>
                  Lagunas costeras del Archipiélago Sabana- Camagüey, Cuba.
                  Estado actual. Perspectivas ante el cambio climático.
                </li>
                <li>
                  Diversidad biológica y conectividad ente el archipiélago
                  Jardines de la Reina y Golfo de Ana María, Cuba.
                </li>
                <li>
                  Investigaciones arqueológicas en el noroeste de la provincia
                  Ciego de Ávila complementadas con el estudio-geográfico del
                  Área de Concentración Arqueológica “Los Buchillones” y su
                  entorno.
                </li>
                <li>
                  Conservación y manejo sostenible de los recursos
                  marino-costeros en áreas protegidas del nororiente de Cuba.
                </li>
                <li>
                  Paleotempestología en Cuba: variabilidad espacio-temporal de
                  la actividad de huracanes usando proxy data.
                </li>
              </ul>
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        {/* <h1>Proyectos en ejecución:</h1> */}
      </article>
    </>
  )
}

export default proyectos
