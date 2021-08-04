<script>
  export let data, request, helpers, settings; // data is mainly being populated from the @elderjs/plugin-markdown
  let blogPost = data.markdown.blog.slice(request.postStart, request.postEnd);
  const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
</script>

<svelte:head>
  <title>My Site - {request.page}</title>
  <meta name="description" content="Page {request.page} of {request.postEnd}" />
  <link href="{settings.origin}{helpers.permalinks.blog(request)}" rel="canonical" />
</svelte:head>

<div class="content">
  <h1>My Blog</h1>
  <ul>
    {#each blogPost as blog}
      <li class="list__item">
        <a  href="{helpers.permalinks.blog({ slug: blog.slug })}">
          <h4 class="item__title title">{blog.frontmatter.title}</h4>
        </a>
        <span class="item__date">{ new Date(blog.frontmatter.date).toLocaleDateString("en-US", dateOptions) }</span>
      </li>
    {/each}
  </ul>
  <div class="pagination">
    {#if request.hasPrevious }
      <a href="{helpers.permalinks.blog(request.previousPage)}" class="prev">&lsaquo;</a>
    {/if}
    Page {request.page} / {request.lastPage}
    {#if request.hasNext}
      <a href="{helpers.permalinks.blog(request.nextPage)}" class="next">&rsaquo;</a>
    {/if}
  </div>
</div>
