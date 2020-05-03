<script>
    import {Link} from "svelte-routing";

    export let to;
</script>

<Link {to}><span class="hover:underline cursor-pointer text-blue hover:text-blue-700"><slot/></span></Link>
