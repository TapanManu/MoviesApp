<script>
    export let name;
</script>

<nav>
	<ul>
		<li><a href ="/"><i class="fa fa-home"></i></a></li>
		<li><a href="/about"><i class="fa fa-user"></i>  {name}</a></li>
	</ul>
</nav>

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