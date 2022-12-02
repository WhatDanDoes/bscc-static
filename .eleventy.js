const blogTools = require('eleventy-plugin-blog-tools');

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/favicons');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/resources');

  eleventyConfig.addPlugin(blogTools);

  // Put sections in correct order
  eleventyConfig.addCollection('orderedSections', function (collection) {
    return collection.getFilteredByTag('sections').sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
      passthroughFileCopy: true,
    },
  };
};
