const PREFIX = "@uwu-ui";

module.exports = {
  stories: [
    "../stories/*.stories.@(tsx|mdx)",
    "../stories/**/*.stories.@(tsx|mdx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register"
  ],
  webpackFinal: async (config) => {
    Object.assign(config.resolve.alias, {
      [`${PREFIX}/components`]: "../src"
    });
    return config;
  },
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  }
};
