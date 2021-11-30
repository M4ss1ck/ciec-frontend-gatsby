/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getArticles = makeRequest(
    graphql,
    `
    {
      allStrapiArticle {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/noticias/${node.slug}`,
        component: path.resolve(`src/templates/noticias.js`),
        context: {
          id: node.id,
        },
      })
    })
  })

  const getAuthors = makeRequest(
    graphql,
    `
    {
      allStrapiWriter {
        edges {
          node {
            id
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each user.
    result.data.allStrapiWriter.edges.forEach(({ node }) => {
      createPage({
        path: `/autores/${node.id}`,
        component: path.resolve(`src/templates/autores.js`),
        context: {
          id: node.id,
        },
      })
    })
  })

  const getCategories = makeRequest(
    graphql,
    `
    {
      allStrapiCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each user.
    result.data.allStrapiCategory.edges.forEach(({ node }) => {
      createPage({
        path: `/categoria/${node.slug}`,
        component: path.resolve(`src/templates/categorias.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  })

  // Query for articles nodes to use in creating pages.
  return Promise.all([getArticles, getAuthors, getCategories])
}
