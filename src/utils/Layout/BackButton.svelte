<script>
    import {Link} from "svelte-routing";
</script>

<Link to="/">
    <button class="-ml-3 mb-2 px-4 py-2 rounded shadow transition-bg duration-200 font-medium text-sm text-gray-100 focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 shadow-none">
        <div class="flex">
            <ion-icon class="-ml-1 mr-1 my-auto text-gray-900 dark:text-gray-400"
                      name="chevron-back-outline"></ion-icon>
            Zurück
        </div>
    </button>
</Link>