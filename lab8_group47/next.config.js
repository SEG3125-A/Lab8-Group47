
// Configuring automatic redirects
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/welcome',
          permanent: true,
        },
      ]
    },
  }
