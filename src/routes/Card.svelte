<script>
    export let moviename;
    export let rating;
    export let image;
</script>

<div class="card">
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
        box-shadow: 1px solid #faeded;
        
    }
    .card{
        box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        cursor:pointer;
    }
    .sub{
        padding-left:5px;
        display:block;
        
    }
    
    img{
        height:300px;
        width:250px;
        border-radius: 10px;
        padding: 5px 5px 5px 5px ;
    }
</style>