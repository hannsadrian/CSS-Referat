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
    import Selectors from "./views/stories/Selectors.svelte";
    import Combinators from "./views/stories/Combinators.svelte";
    import Pseudoclasses from "./views/stories/Pseudoclasses.svelte";
    import MediaQueries from "./views/stories/MediaQueries.svelte";
    import Frameworks from "./views/stories/Frameworks.svelte";

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
        <PageAnimator path="story/selectors"><Selectors/></PageAnimator>
        <PageAnimator path="story/combinators"><Combinators/></PageAnimator>
        <PageAnimator path="story/pseudoclasses"><Pseudoclasses/></PageAnimator>
        <PageAnimator path="story/mediaqueries"><MediaQueries/></PageAnimator>
        <PageAnimator path="story/frameworks"><Frameworks/></PageAnimator>

        <PageAnimator>
            <Error code="404" message="The page you are looking for is not here"/>
        </PageAnimator>
    </Router>
</main>
