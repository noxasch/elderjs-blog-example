<script>
  import Footer from '../../components/Footer.svelte';
  import Navbar from '../../components/Navbar.svelte';
  export let helpers, request, settings;

  const title = 'My Home Page';
  const description = 'This is my homepage';
</script>

<svelte:head>
  <title>{ title }</title>
  <meta name="description" content="{ description }" />
  <link href="{settings.origin}{helpers.permalinks.home({ slug: '/' })}" rel="canonical" />
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
</svelte:head>

<Navbar {helpers} {request} />
<h1>Welcome to My homepage</h1>
<Footer {request} />