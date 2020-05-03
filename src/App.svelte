<script>
    import Tailwindcss from "./Tailwindcss.svelte";
    import {Router, Link, navigate} from "svelte-routing";
    import PageAnimator from "./utils/PageAnimator.svelte";

    import Home from "./views/Home.svelte";
    import Error from "./views/Error.svelte";
    import Download from "./views/Download.svelte";
    import History from "./views/stories/History.svelte";
    import Embed from "./views/stories/Embed.svelte";
    import Attributes from "./views/stories/Attributes.svelte";

    export let url = "";
</script>

<main class="bg-gray-100 min-h-screen h-full">
    <Tailwindcss/>
    <Router {url}>
        <PageAnimator path="/"><Home/></PageAnimator>
        <PageAnimator path="download"><Download/></PageAnimator>

        <PageAnimator path="story/history"><History/></PageAnimator>
        <PageAnimator path="story/embed"><Embed/></PageAnimator>
        <PageAnimator path="story/attributes"><Attributes/></PageAnimator>

        <PageAnimator>
            <Error code="404" message="The page you are looking for is not here"/>
        </PageAnimator>
    </Router>
</main>
