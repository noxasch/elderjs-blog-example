<script>
  export let helpers, request;
  const pages = [
    {
      label: 'home',
      permalink : helpers.permalinks.home({ slug: '/' }),
      slug: '/'
    },
    {
      label: 'blog',
      permalink :  helpers.permalinks.blog({ slug: 'blog' }),
      slug: 'blog'
    },
  ];
</script>

<nav>
  <ul class="nav__menu">
    {#each pages as page }
      <li class="nav__item {page.slug === request.slug ? 'active' : ''}">
        <a class="nav__link" href="{page.permalink}">{page.label}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  
</style>