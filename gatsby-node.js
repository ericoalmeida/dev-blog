const { resolve } = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

//To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  //Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    //Use `createFilePath` to turn markdown in our /posts into /pages
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    })

    //Creates new query able field with name of "slug"
    createNodeField({
      node,
      name: 'slug',
      value: `${slug.slice(12)}`,
    })
  }
}

//To create pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // query para buscar todos os posts
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    //Percorre a lista de posts criando uma pagina para cada um deles
    const {
      allMarkdownRemark: { edges },
    } = data

    edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: resolve(__dirname, 'src', 'templates', 'blog-post.js'),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
