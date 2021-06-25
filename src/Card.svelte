<script>
    export let moviename;
    export let rating;
    export let image;
</script>

<div>
	<img src = {image} alt={moviename}>
    <div class="sub">
        <h3>{moviename}</h3>
        <p>Rating:{rating}/10</p>
    </div>
</div>

<style>
    div{
        background : rgb(248, 246, 246);
        margin:10px 20px 10px 20px;
        display:inline-block;
        border-radius:10px;
        
    }
    .sub{
        padding-left:5px;
        display:block;
        
    }
    
    img{
        height:300px;
        width:250px;
        border-radius: 10px;
    }
</style>