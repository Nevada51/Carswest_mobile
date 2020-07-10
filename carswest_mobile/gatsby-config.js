'use strict'

module.exports = {
  siteMetadata: {
    title: 'gatsby-starter-typescript-plus',
    description: 'A starter kit for TypeScript-based Gatsby projects with sensible defaults.',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
    author: {
      name: 'Resi Respati',
      url: 'https://twitter.com/resir014',
      email: 'resir014@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    {
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/
				}
			}
    },
    {
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
						{
							family: 'Open Sans',
							fontDisplay: 'swap',
							strategy: 'selfHosted',
							subsets: [ 'latin', 'cyrillic' ]
						},
						{
							family: 'Lato',
							fontDisplay: 'swap',
							strategy: 'selfHosted',
							subsets: [ 'latin', 'cyrillic' ]
						}
					]
				},
				useMinify: true,
				usePreload: true
			}
		},
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
