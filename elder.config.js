module.exports = {
  origin: '', // TODO: update this.
  lang: 'en',
  srcDir: 'src',
  distDir: 'public',
  rootDir: process.cwd(),
  build: {},
  prefix: '',
  server: {},
  debug: {
    stacks: false,
    hooks: false,
    performance: false,
    build: false,
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncomment this to disabled writing your files on build.
  },
  plugins: {
    '@elderjs/plugin-markdown': {
      routes: ['blog'],
      contents: {
        blog: 'contents/blog',
      },
      useSyntaxHighlighting: {
        theme: 'nord', // available themes: https://github.com/shikijs/shiki/blob/master/packages/themes/README.md#literal-values - try material-theme-darker
        // theme is the only option available - for now.
      },
      slugFormatter: function (relativeFilePath, frontmatter) {
        // custom slug - use blog title as slug
        // default is markdown file name
        let slug = frontmatter.title
          .replace(/[^a-zA-Z ]/g, '')
          .replace(/\s+/g, '-')
          .toLowerCase();
        return slug;
      },
      useElderJsPluginImages: false,
      useTableOfContents: true,
    },
    'elderjs-plugin-blog-excerpt': {
      routes: ['blog'],
      overrideExcerpt: true,
    },
    'elderjs-plugin-blog-pagination': {
      routes: ['blog'], // change to your blog route same as plugin-markdown route
      postPerPage: 5, // change to your preferred post per apge
      indexTemplate: 'BlogIndex', // change to your own Index.svelte template but without `.svelte`
    },
    '@elderjs/plugin-browser-reload': {
      // this reloads your browser when nodemon restarts your server.
      port: 8080,
    },
  },
  shortcodes: { closePattern: '}}', openPattern: '{{' },
};
