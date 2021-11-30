import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const CategoryTemplate = ({ data }) => (
  <>
    <h1 className="uppercase text-xl dark:text-secundario font-bold mt-6">
      {data.strapiCategory.name}
    </h1>
    <ul className="flex flex-row flex-wrap items-center justify-evenly w-full">
      {data.strapiCategory.articles.map(article => (
        <Link
          to={`/noticias/${article.slug}`}
          key={article.slug}
          className="text-gray-600 dark:text-gray-500 hover:text-gray-300 hover:bg-primario dark:hover:bg-gray-800 dark:hover:text-secundario group w-full md:w-1/3 lg:w-1/4 p-2 m-1 border-4 border-white hover:border-primario dark:hover:border-secundario rounded-lg flex flex-col justify-center items-center"
        >
          <li>
            <h2>{article.title}</h2>
            <GatsbyImage
              image={article.image.localFile.childImageSharp.gatsbyImageData}
              alt={article.title}
            />
            <p>{article.description}</p>
          </li>
        </Link>
      ))}
    </ul>
  </>
)

export default CategoryTemplate

export const query = graphql`
  query CategoryTemplate($slug: String!) {
    strapiCategory(slug: { eq: $slug }) {
      id
      name
      slug
      articles {
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
        author
        description
      }
    }
  }
`
