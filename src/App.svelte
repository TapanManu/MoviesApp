<script>
	import Nav from './Nav.svelte';
	import Container from './Container.svelte';
	export let name;
</script>

<Nav name={name}/>


<h2>Movies</h2>
<Container name={name}/>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}


	h2 {
		color:black;
		margin-left: 50px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>