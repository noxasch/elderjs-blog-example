module.exports = {
  template: 'Blog.svelte',
  all: () => [],
  permalink: ({ request }) => {
    const route = 'blog';
    console.log(request);
    // if the requst contains `blog` which is the route name
    // it means the slug looks like this `blog`
    if (request.slug.includes(route)) {
      return `${request.slug}`;
    }
    // the markdown
    // it means the slug looks like this `my-post-title`
    // default it will look like this `http://my-blog.com/my-post-title`
    // we want the output to look like this `http://my-blog.com/blog/my-post-title`
    return `${route}/${request.slug}/`;
  },
  data: {},
};
