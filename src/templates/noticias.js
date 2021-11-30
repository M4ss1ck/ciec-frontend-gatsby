import React from "react";
import { Link, graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const ArticleTemplate = ({ data }) => (
  <>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      <Link to={`/autores/Writer_${data.strapiArticle.author.id}`}>
        {data.strapiArticle.author.name}
      </Link>
    </p>

    <img
      src={getSrc(data.strapiArticle.image.localFile)}
      alt={data.strapiArticle.title}
      style={{ width: "100%" }}
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
);

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      author {
        id
        name
      }
    }
  }
`;
