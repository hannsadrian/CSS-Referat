<script>
    import { onMount } from 'svelte';
    export let format = "";
    export let shadow = false;

    onMount(async () => {
        PR.prettyPrint()
    });
</script>

<div class={"rounded border-2 px-4 py-3 border-gray-500 bg-gray-200" + (!!shadow ? " shadow-lg" : "")}>
    <pre style="border-width: 0 !important;" class={"prettyprint" + (format !== "" ? " lang-"+format : "")}>
        <slot/>
    </pre>
</div>