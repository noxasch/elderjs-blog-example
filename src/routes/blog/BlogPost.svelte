<script>
  export let data, request, helpers, settings; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;
  const date = new Date(frontmatter.date);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  let formattedDate = date.toLocaleDateString("en-US", options);
</script>

<svelte:head>
  <title>{frontmatter.title}</title>
  <meta name="description" content={frontmatter.excerpt} />
  <link href="{settings.origin}{request.permalink}" rel="canonical" />
</svelte:head>

<div class="content">
  <div class="title">
    <h1>{frontmatter.title}</h1>
    <div class="post__meta">
      {formattedDate}
    </div>
  </div>

  {#if html}
    {@html html}
  {:else}
    <h1>Oops!! Markdown not found!</h1>
  {/if}
</div>

