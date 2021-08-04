<script>
  import Footer from '../../components/Footer.svelte';
  import Navbar from '../../components/Navbar.svelte';
  import BlogIndex from './BlogIndex.svelte';
  import BlogPost from './BlogPost.svelte';

  export let data, helpers, request, settings; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;
  console.log('BLOG',data);
  console.log('BLOG',helpers);
  console.log('BLOG',request);
  console.log('BLOG',settings);
  let component = BlogPost;
  if (request.template === 'BlogIndex') {
    component = BlogIndex;
  } 
</script>

<svelte:head>
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
</svelte:head>

<Navbar {helpers} {request} />
<svelte:component this={component} {data} {request} {helpers} {settings} />
<Footer {request} />