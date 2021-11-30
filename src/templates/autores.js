import React from "react"
import { Link, graphql } from "gatsby"

const WriterTemplate = ({ data }) => (
  <>
    <h1>{data.strapiWriter.name}</h1>
    <ul className="flex flex-row flex-wrap items-center justify-evenly w-full">
      {data.strapiWriter.articles.map(article => (
        <li
          key={article.id}
          className="text-gray-600 dark:text-gray-500 hover:text-gray-300 hover:bg-primario dark:hover:bg-gray-800 dark:hover:text-secundario group w-full md:w-1/3 lg:w-1/4 p-2 m-1 border-4 border-white hover:border-primario dark:hover:border-secundario rounded-lg flex flex-col justify-center items-center"
        >
          <h2>
            <Link to={`/noticias/${article.slug}`}>{article.title}</Link>
          </h2>
          <p>{article.description}</p>
        </li>
      ))}
    </ul>
  </>
)

export default WriterTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiWriter(id: { eq: $id }) {
      id
      name
      articles {
        id
        title
        description
        slug
      }
    }
  }
`
