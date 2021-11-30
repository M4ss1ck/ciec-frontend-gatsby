import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

const ArticleTemplate = ({ data }) => (
  <>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      <Link to={`/autores/Writer_${data.strapiArticle.author.id}`}>
        {data.strapiArticle.author.name}
      </Link>
    </p>

    <GatsbyImage
      image={data.strapiArticle.image.localFile.childImageSharp.gatsbyImageData}
      alt={data.strapiArticle.title}
      className="w-2/3 rounded-lg"
    />

    <div>
      <hr />
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={data.strapiArticle.content}
      />
      <hr />
    </div>
  </>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      author {
        id
        name
      }
    }
  }
`
