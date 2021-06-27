<script>
    export let name;
</script>

<div>
	<ul>
		<li><a href ="/">Home</a></li>
		<li><a href="/movies">Movies</a></li>
		<li><a href="/about">{name}</a></li>
	</ul>
</div>

<style>
    ul{
		list-style-type:none;
		display:flex;
	}
	li{
		padding:10px;
	}
	a{
		color:purple;
		text-decoration: none;
	}
	a:hover{
		color:blue;
		transition:0.3s;
		cursor:pointer;
	}

</style>