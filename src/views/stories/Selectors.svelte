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

    <hr class="mt-4 mb-3 border"/>

    <Subtitle>Klassen Selektoren</Subtitle>
    <DualCodeContainer html={"<p class=\"text\">Klassen Selektoren</p>"} css={".text { color: blue; }"} />
    <Annotation>Klassen Selektoren werden auf Elemente mit dem Attribut class angewendet. Es ist möglich mehrere Klassen auf ein Element anzuwenden.</Annotation>

    <Subtitle>ID Selektoren</Subtitle>
    <DualCodeContainer html={"<p id=\"text\">ID Selektoren</p>"} css={"#text { color: blue; }"} />
    <Annotation>ID Selektoren werden auf Elemente mit dem Attribut id angewendet. Ein Element kann nur eine ID haben.</Annotation>

    <Subtitle>Attribut Selektoren</Subtitle>
    <DualCodeContainer html={"<p text>Attribut Selektoren</p>"} css={"[text] { color: blue; }"} />
    <Annotation>Attribut Selektoren werden auf Elemente mit dem entsprechend Attribut angewendet. Ein Element kann mehrere Attribute haben.</Annotation>

    <Subtitle>Element Selektoren</Subtitle>
    <DualCodeContainer html={"<p>Element Selektoren</p>"} css={"p { color: blue; }"} />
    <Annotation>Element Selektoren werden immer direkt automatisch auf Elemente mit dem Tag, den sie definieren, angewendet.</Annotation>
</Container>
