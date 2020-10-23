module.exports = {
  siteMetadata: {
    title: `Broadgroup`,
    description: `The amazing new Broadgroup website`,
    author: `Team TBC`,
  },
  plugins: [
    {
    resolve: "gatsby-source-apiserver",
    options: {
      // Type prefix of entities from server
      typePrefix: "internal__",

      // The url, this should be the endpoint you are attempting to pull data from
      url: `https://uat-api.euromoneydigital.com/data-service/queries/telecoms-articles/search`,

      method: "post",

      headers: {
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qVTBNa1F6UkRZMFJrRTVPRVl5TjBNek9EWTBOVGRCUkVVd1FUVTJOVEpHTnpRd1FrRTNRZyJ9.eyJodHRwczovL2NsYWltcy5lbWlpLmNvbS9kaXZpc2lvbiI6IkNlbnRyYWwgVGVjaG5vbG9neSIsImh0dHBzOi8vY2xhaW1zLmVtaWkuY29tL2RhdGEtc2VydmljZS90ZW5hbnRzIjpbImJyb2FkZ3JvdXAiXSwiaXNzIjoiaHR0cHM6Ly9lbS1icm9hZGdyb3VwLXVhdC5ldS5hdXRoMC5jb20vIiwic3ViIjoidWZvMGVtNkpsZlBmTXdSd1hTQzJuVFdBV2xiTjdGUXRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vdWF0LWFwaS5ldXJvbW9uZXlkaWdpdGFsLmNvbS9kYXRhLXNlcnZpY2UvIiwiaWF0IjoxNjAzNDQ3NDU1LCJleHAiOjE2MDM1MzM4NTUsImF6cCI6InVmbzBlbTZKbGZQZk13UndYU0MyblRXQVdsYk43RlF0Iiwic2NvcGUiOiJzZWFyY2g6ZG9jdW1lbnRzIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOlsic2VhcmNoOmRvY3VtZW50cyJdfQ.e33hElxwsi7hvMwXCeYBPRDkuxibyaH3-7Jjt2F4wISNhK9rU9rPVefd9rJO8OVWKdyWCtu8HI1jVhwu3RpIsEWra-Lj44SXQuRFKPwWRPMhVv0ar-ew1MUdoyAsEY_YflGmT2Y0xbBcr89Ea78_IiHvdvnDQxjM085P46RBOkhEw5Xus0PLWdEKcOqrX7_yPl3Ou4sL3rxYXz3RXp4QuiFt6dFt5kYh9DrX8rUZT__M9w50bvCej3Wji8b353KxcI7o2sTbZydimsHvKvzla49HxsCw5efgPvobILvw3pLeru5FSHP4NJfWaun2jZbS_gSOdtQD6xImAeRjrvWi5A",

        "Content-Type": "application/json"
      },

      // Request body
      data: {
    "top": 5,
    "query": {
        "filters": {
            "ContentTypeFilter": {
                "field": "content_type",
                "value": "Opinion"
            }
        }
    },
    "orderBy": {
        "dates": "desc"
    },
    "fields": [
        "title",
        "summary",
        "coverImage"
    ]
},

      // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
      // using this name. i.e. posts.json
      name: `posts`,

      // Nested level of entities in response object, example: `data.posts`
      entityLevel: `data.posts`,

      // Define schemaType to normalize blank values
      // example:
      // const postType = {
      //   id: 1,
      //   name: 'String',
      //   published: true,
      //   object: {a: 1, b: '2', c: false},
      //   array: [{a: 1, b: '2', c: false}]
      // }
      schemaType: postType,

      // Request parameters
      // Only available from version 2.1.0
      params: {
        per_page: 1
      },

      // Simple authentication, optional
      auth: {
        username: "myusername",
        password: "supersecretpassword1234"
      },
      // enable disk caching
      allowCache: false,
      // if allowCache is true, then the cache will be purged after the
      // specified amount of time
      maxCacheDurationSeconds: 60 * 60 * 24,

      // Advanced authentication for Auth0
      // Only available from version 2.1.0
     

      // Optional payload key name if your api returns your payload in a different key
      // Default will use the full response from the http request of the url
      payloadKey: `body`,

      // Optionally save the JSON data to a file locally
      // Default is false
      localSave: false,

      //  Required folder path where the data should be saved if using localSave option
      //  This folder must already exist
      path: `${__dirname}/src/data/auth/`,

      // Optionally include some output when building
      // Default is false
      verboseOutput: true, // For debugging purposes

      // Optionally skip creating nodes in graphQL.  Use this if you only want
      // The data to be saved locally
      // Default is false
      skipCreateNode: false, // skip import to graphQL, only use if localSave is all you want

      // Optionally re-source data when it changes and
      // `gatsby develop` is running.
      // Requires `ENABLE_GATSBY_REFRESH_ENDPOINT=true`.
      // See https://www.gatsbyjs.org/docs/environment-variables/#reserved-environment-variables
      // Default is false
      enableDevRefresh: true,

      // Optionally override key used to re-source data
      // when `gatsby develop` is running.
      // Requires `enableDevRefresh: true`.
      // See setting directly above this one.
      // See also https://github.com/gatsbyjs/gatsby/issues/14653
      // Default is `id`
      refreshId: `id`,

      // Pass an array containing any number of the entity configuration properties (except verbose, auth0Config),
      // any not specified are defaulted to the general properties that are specified
      // Only available from version 2.1.0
      
    }
  },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
