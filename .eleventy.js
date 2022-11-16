const blogTools = require('eleventy-plugin-blog-tools');

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/resources');

  eleventyConfig.addPlugin(blogTools);

  return {
    dir: {
      input: 'src',
      output: 'public',
      passthroughFileCopy: true,
    },
  };
};
