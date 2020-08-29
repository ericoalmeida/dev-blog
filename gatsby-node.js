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
      value: `/${slug.slice(12)}`,
    })
  }
}

//To create pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // query para buscar todos os posts
  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              background
              category
              description
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `).then(({ data }) => {
    //Percorre a lista de posts criando uma pagina para cada um deles
    const {
      allMarkdownRemark: { edges },
    } = data

    const posts = edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: resolve(__dirname, 'src', 'templates', 'blog-post.js'),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    const postsPerPage = 5
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: resolve(__dirname, 'src', 'templates', 'blog-list.js'),

        //O Contexto fica visivel no componente de template para as paginas dos post do blog
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          totalPages: numPages,
          currentPage: index + 1,
        },
      })
    })
  })
}
