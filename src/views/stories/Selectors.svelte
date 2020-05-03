<script>
    import Container from "../../utils/Layout/Container.svelte";
    import Title from "../../utils/Layout/Title.svelte";
    import Subtitle from "../../utils/Layout/Subtitle.svelte";
    import CodeContainer from "../../utils/Layout/CodeContainer.svelte";
    import Hyperlink from "../../utils/Layout/Hyperlink.svelte";
    import Annotation from "../../utils/Layout/Annotation.svelte";
    import DualCodeContainer from "../../utils/Layout/DualCodeContainer.svelte";
</script>

<Container>
    <Title>🧩 Selektoren</Title>

    <p>
        Um zu verstehen was Selektoren sind, ist es wichtig zu wissen wo sie eingesetzt werden.
        Wie man Klassen an bestimmten Positionen wirksam macht ist im <Hyperlink to="/story/combinators">Kombinatoren</Hyperlink> Teil zu finden.<br/>
        <Hyperlink to="/story/pseudoclasses">Pseudoklassen</Hyperlink> werden hingegen verwendet, um Klassen nur unter bestimmten Bedingungen anzuwenden.
    </p>

    <Subtitle>Aufbau einer CSS Klasse</Subtitle>
    <CodeContainer>
        {".text { /* .text ist der Selektor */\n"+
        "  color: \"red\";         /* <--       */\n"+
        "  font-weight: \"bold\";  /* Attribute */\n"+
        "  font-size: \"23px\";    /* <--       */\n"+
        "}"}
    </CodeContainer>
    <Annotation>Auf dieser Unterseite geht es um Selektoren wie <code>.text</code> und wie man sie Verwenden kann</Annotation>

