import React from "react";
import { Link, graphql } from "gatsby";

const WriterTemplate = ({ data }) => (
  <>
    <h1>{data.strapiWriter.name}</h1>
    <ul>
      {data.strapiWriter.articles.map((article) => (
        <li key={article.id}>
          <h2>
            <Link to={`/noticias/${article.slug}`}>{article.title}</Link>
          </h2>
          <p>{article.description}</p>
        </li>
      ))}
    </ul>
  </>
);

export default WriterTemplate;

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
`;
