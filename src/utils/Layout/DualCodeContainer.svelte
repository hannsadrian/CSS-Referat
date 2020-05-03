<script>
    import CodeContainer from "./CodeContainer.svelte";
    export let html;
    export let css;
</script>

<div class="flex">
    <div class="w-1/2 pr-1">
        <CodeContainer format="html">{html}</CodeContainer>
    </div>
    <div class="w-1/2 pl-1">
        <CodeContainer format="css">{css}</CodeContainer>
    </div>
</div>