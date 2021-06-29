<script>
   /* export let moviename;
    export let rating;
    export let image;*/
    export let params;
    import { onMount } from "svelte";
    let movielist = [];
    onMount(async () => {
        const response = await fetch("../movies.json");
        movielist = await response.json();
    });
    //JSON.stringify(movielist[params.id-1])
</script>

<div class="movie-desc">
    <!-- let it be like this for dummy data , but not recommended for real world datas-->
    {#each movielist as {id,moviename,rating,image,director,desc},i}
        {#if i === params.id-1}
            <img src="../{image}" alt="{moviename}"/>
            <div class="desc">
                <h1>{moviename}</h1>
                <p>Director: {director}</p>
                <div class="stars">
                    {#each Array(10) as _,i}
                        {#if i+1 <= rating}
                            <span class="fa fa-star checked"></span>
                        {:else}
                            <span class="fa fa-star"></span>
                        {/if}
                    {/each}
                </div>
                <br/>
                <p>{desc}</p>
            </div>
        {/if}
    {/each}
</div>


<style>
    div{
        display:flex;
        background-color: rgb(246, 248, 248);
        border-radius:10px;
    }
    img{
        width:300px;
        border-radius:10px;
    }
    .checked {
        color: orange;
    }

    .desc{
        display:block;
        margin-left:30px;
        text-align:left;
        width:400px;
    }
</style>