const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: [
    sveltePreprocess({
      scss: {},
      postcss: {
        plugins: [require('autoprefixer')],
      },
    }),
  ],
};
