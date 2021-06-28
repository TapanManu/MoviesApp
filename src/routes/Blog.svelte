<script>
	import Card from './Card.svelte';
	import { onMount } from "svelte";
	import App from '../App.svelte';

    let movielist = [];
    onMount(async () => {
        const response = await fetch("movies.json");
        movielist = await response.json();
    });
   
	
</script>

<h2>Gallery</h2>
<div class = "movie">
	{#each movielist as {moviename,rating,image},i}
		<a href="/movies/{movielist[i].id}"><Card {...movielist[i]}/></a>
        
	{/each}
</div>


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

	div{
        background : rgb(235, 235, 243);
        margin-left:20px;
        margin-right:20px;
		border: 1px solid rgb(226, 218, 218);
		border-radius:10px;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>