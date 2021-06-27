<script>
    import routes from '../routes.js';
    export let id;
    $: blog = routes.find(p => p.id == id);
    
    
</script>

<div class="movie-desc">
    <h1>{blog}</h1>
</div>