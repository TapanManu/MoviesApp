<script>
    import { onMount } from "svelte";
    let movielist = [];
    onMount(async () => {
        const response = await fetch("../movies.json");
        movielist = await response.json();
    });
    //load from any movie API (better) approach
    console.log("hello");
</script>

<div class="movie-desc">
    <h1>Hello </h1>
</div>