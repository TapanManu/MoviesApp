<script>
	import Nav from './Nav.svelte';
	import Card from './Card.svelte';
	
    const movielist = [{
        moviename:'Interstellar',
        rating:'9.2',
        image:'images/interstellar.jpeg'
    },{
		moviename:'The Dark Knight',
        rating:'9.0',
        image:'images/Dark_Knight.jpg'
	},{
		moviename:'Spiderman: Far from Home',
        rating:'7.5',
        image:'images/spiderman.jpeg'
	}];
	export let name;
</script>

<Nav name={name}/>


<h2>Movies</h2>
<div class = "movie">
	{#each movielist as {moviename,rating,image},i}
		<Card {...movielist[i]}/>
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