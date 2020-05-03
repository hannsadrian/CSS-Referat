<script>
    import Container from "../../utils/Layout/Container.svelte";
    import Title from "../../utils/Layout/Title.svelte";
    import Subtitle from "../../utils/Layout/Subtitle.svelte";
    import DualCodeContainer from "../../utils/Layout/DualCodeContainer.svelte";
    import Annotation from "../../utils/Layout/Annotation.svelte";
</script>

<Container>
    <Title>🍟 Pseudoklassen</Title>
    <p>Mit Pseudoklassen ist es möglich Attribute nur unterbestimmeten Umständen zu setzen, bspw. wenn sich die Maus auf dem
        Element befindet.</p>

    <Subtitle>Hover Pseudoklasse</Subtitle>
    <DualCodeContainer cssFirst={true}
                       css={".text {\n"+
                        "    color: red;\n"+
                        "}\n"+
                        "\n"+
                        ".text:hover {\n"+
                        "    color: blue;\n"+
                        "}"}
                       html={"<p class=\"text\">\n"+
                        "    Verändert sich\n"+
                        "</p>\n \n \n \n \n"}
    />
    <Annotation>In diesem Beispiel wird der Text im <code>p</code> Element Blau, wenn sich die Maus auf dem Element befindet.</Annotation>

    <Subtitle>First-Child Pseudoklasse (Erstes-Kind Pseudoklasse)</Subtitle>
    <DualCodeContainer cssFirst={true}
                       css={".text {\n"+
                            "    color: red;\n"+
                            "}\n"+
                            "\n"+
                            ".text:first-child {\n"+
                            "    color: blue;\n"+
                            "}"}
                       html={"<div>\n"+
                            "    <p class=\"text\">Blau</p>\n"+
                            "    <p class=\"text\">Rot</p>\n"+
                            "</div>\n \n \n \n"}
    />
    <Annotation>Ähnlich zu bestimmten Kombinatoren ist es mit der <code>first-child</code> Pseudoklasse möglich, den ersten Nachfahren eines übergeordneten Elements auszuwählen.</Annotation>
</Container>