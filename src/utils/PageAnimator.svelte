<script>
    import {fade} from "svelte/transition";
    import {Route} from "svelte-routing";
    export let path = undefined;
</script>


<Route {path}>
    <div class="absolute w-full" transition:fade="{{ duration: 100 }}">
        <slot/>
    </div>
</Route>
