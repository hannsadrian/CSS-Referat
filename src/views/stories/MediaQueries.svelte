<script>
    import Container from "../../utils/Layout/Container.svelte";
    import Title from "../../utils/Layout/Title.svelte";
    import Subtitle from "../../utils/Layout/Subtitle.svelte";
    import CodeContainer from "../../utils/Layout/CodeContainer.svelte";
    import Annotation from "../../utils/Layout/Annotation.svelte";
</script>

<Container>
    <Title>🔍 Media Queries</Title>
    <p>Mit Media Queries ist es möglich Websiten an verschiedene Geräte anzupassen, in dem Bildschirmbreite, etc. vom Gerät abgefragt werden.</p>

    <Subtitle>Bildschirmgröße</Subtitle>
    <CodeContainer>
        {"@media screen and (max-width: 500px) {\n"+
        "  .text {\n"+
        "    color: red;\n"+
        "  }\n"+
        "}\n"+
        "\n"+
        ".text {\n"+
        "  color: blue;\n"+
        "}"}
    </CodeContainer>
    <Annotation>Durch diese Media Query bekommen Elemente mit der Klasse <code>text</code>, auf Geräten deren Bildschirm nicht breiter als 500px ist (Handys), rote Schriftfarbe.</Annotation>
</Container>