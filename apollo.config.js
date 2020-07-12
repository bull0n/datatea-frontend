module.exports = {
  client: {
    service: {
      name: 'my-app',
      url: 'http://localhost:8000/teas',
    },
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
      'src/**/*.ts',
    ],
  },
}