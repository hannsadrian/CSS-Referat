<script>
    import BackButton from "./BackButton.svelte";

    export let showBackButton = true;
</script>

<main class="pt-10 h-full pb-20 md:pt-24 mx-20">
    {#if showBackButton}
        <BackButton/>
    {/if}
    <slot/>
</main>