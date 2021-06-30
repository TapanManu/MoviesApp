<script>
	import Card from './Card.svelte';
	import { onMount } from "svelte"
	
	let liked = false;

    let movielist = [];
    onMount(async () => {
        const response = await fetch("movies.json");
        movielist = await response.json();
    });

	function handleChange(){
		liked = !liked;
    }
   
	
</script>

<h2>Gallery</h2>
<div class = "movie">
	{#each movielist as {moviename,rating,image},i}
	<div class="row">
		<a href="/movies/{movielist[i].id}"><Card {...movielist[i]}/></a>
        <button on:click={handleChange}>
            {#if liked === false}
                <i class="fa fa-thumbs-down" aria-hidden="true"></i>
            {:else}
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
            {/if}
		</button>
	</div>
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

	.row{
		display:block;
		margin-left:20px;
		
	}

	button{
		background: rgb(255,255,255);
		border-radius:50px;
		box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border: 1px solid rgb(226, 218, 218);
	}


	h2 {
		color:black;
		margin-left: 50px;
	}

	.movie{
        background : rgb(235, 235, 243);
        margin-left:20px;
        margin-right:20px;
		border: 1px solid rgb(226, 218, 218);
		border-radius:10px;
		display:flex;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>