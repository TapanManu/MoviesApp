<script>
	let page = null;
  	let params = {};
	let user = true;
	import router from "page";
  	import routes from "./routes";
	import Nav from './Nav.svelte';
	routes.forEach(route => {
    router(
      route.path,
      (ctx, next) => {
        params = { ...ctx.params };
        next();
      },
      () => {
          router.redirect("/");
          page = route.component;
      }
    );
  });
	router.start();
	export let name;
</script>

<Nav name = {name}/>
<main>
	<svelte:component this={page} {params} />
</main>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>