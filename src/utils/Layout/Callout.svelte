<script>
    export let type;
    let emoji = "ℹ️";

    switch (type) {
        case "success":
            emoji = "✅";
            break;
        case "important":
            emoji = "📢";
            break;
        case "oh":
            emoji = "☝️";
            break;
        case "bulb":
            emoji = "💡";
            break;
    }
</script>

<div class="-ml-6 my-5 px-6 py-5 bg-gray-200">
    <p>
        <span class="mr-1">{emoji}</span>
        <slot/>
    </p>
</div>