<script>
    import CodeContainer from "./CodeContainer.svelte";

    export let html;
    export let css;
    export let cssFirst = false;
</script>

<div class="flex">
    {#if cssFirst}
        <div class="w-1/2 pr-2">
            <CodeContainer format="css">{css}</CodeContainer>
        </div>
    {/if}
    <div class="w-1/2">
        <CodeContainer format="html">{html}</CodeContainer>
    </div>
    {#if !cssFirst}
        <div class="w-1/2 pl-2">
            <CodeContainer format="css">{css}</CodeContainer>
        </div>
    {/if}
</div>