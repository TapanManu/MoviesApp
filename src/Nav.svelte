<script>
    export let name;
</script>

<div>
	<ul>
		<li>Home</li>
		<li>Movies</li>
		<li>{name}</li>
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

</style>