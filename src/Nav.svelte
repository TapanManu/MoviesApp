<script>
    export let name;
</script>

<div>
	<ul>
		<li><a>Home</a></li>
		<li><a>Movies</a></li>
		<li><a>{name}</a></li>
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