const path = require("path");

module.exports = {
  alias: {
    hooks: path.resolve(__dirname, "./app/javascript/src/hooks"),
    utils: path.resolve(__dirname, "./app/javascript/src/utils"),
    components: path.resolve(__dirname, "./app/javascript/src/components"),
    common: path.resolve(__dirname, "./app/javascript/src/common"),
    anticons: "@ant-design/icons",
  },
};
