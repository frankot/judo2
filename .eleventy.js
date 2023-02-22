module.exports = function (eleventyConfig) {
  // Return your Object options:
  // eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy('./tailwind.config.js')
  eleventyConfig.addPassthroughCopy('./src/images/')
  eleventyConfig.addPassthroughCopy('./src/fonts')
  eleventyConfig.setServerOptions({
    port: 9000,
  });
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
};