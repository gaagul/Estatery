module.exports = {
  important: true,
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./app/javascript/**/*.{js,jsx}",
      "./app/views/**/*.html.erb",
      "./app/views/**/*.slim",
      "./node_modules/@bigbinary/**/*.js",
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
};
