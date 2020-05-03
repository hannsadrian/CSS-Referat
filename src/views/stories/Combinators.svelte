<script>
    import Container from "../../utils/Layout/Container.svelte";
    import Title from "../../utils/Layout/Title.svelte";
    import Hyperlink from "../../utils/Layout/Hyperlink.svelte";
    import Subtitle from "../../utils/Layout/Subtitle.svelte";
    import DualCodeContainer from "../../utils/Layout/DualCodeContainer.svelte";
    import Annotation from "../../utils/Layout/Annotation.svelte";
</script>

<Container>
    <Title>🍻 Kombinatoren</Title>
    <p>Im Gegensatz zu
        <Hyperlink to="/story/selectors">Selektoren</Hyperlink>
        sind Kombinatoren dazu da, CSS Klassen nur an bestimmten Postionen anzuwenden. Sie funktionieren mit allen Selektoren.
    </p>

    <Subtitle>Descendant Kombinator (Nachfahren Kombinator)</Subtitle>
    <DualCodeContainer
            cssFirst={true}
            css={".block .bild {\n"+
                "    width: 300px;\n"+
                "}\n \n \n \n"}
            html={"<div class=\"block\">\n"+
                  "  <p>Text mit eingebundenem Bild:\n"+
                  "    <img src=\"bild.png\" class=\"bild\">\n"+
                  "  </p>\n"+
                  "  <img src=\"bild.png\" class=\"bild\">\n"+
                  "</div>"}
    />
    <Annotation>Bei diesem Beispiel wird die CSS Klasse auf beide Bilder angewendet, da sie beide irgendwo unter dem <code>div</code> Element mit der Klasse <code>block</code> sind.</Annotation>

    <Subtitle>Child Kombinator (Kind Kombinator)</Subtitle>
    <DualCodeContainer
            cssFirst={true}
            css={".block > .bild {\n"+
                "    width: 300px;\n"+
                "}\n \n \n \n"}
            html={"<div class=\"block\">\n"+
                  "  <p>Text mit eingebundenem Bild:\n"+
                  "    <img src=\"bild.png\" class=\"bild\">\n"+
                  "  </p>\n"+
                  "  <img src=\"bild.png\" class=\"bild\">\n"+
                  "</div>"}
    />
    <Annotation>Mit dem Child Kombinator wird nur die oberste Schicht nach des Parent Elements gewählt. In diesem Fall trifft die CSS Klasse also nur auf das zweite Bild zu.</Annotation>

    <Subtitle>Adjacent Sibling Kombinator (Angrenzender Geschwister Kombinator)</Subtitle>
    <DualCodeContainer
            cssFirst={true}
            css={".block + .bild {\n"+
                "    color: red;\n"+
                "}\n \n \n \n \n"}
            html={"<div class=\"block\">\n"+
                  "  <img src=\"bild.png\" class=\"bild\">\n"+
                  "  <p>Text mit eingebundenem Bild:\n"+
                  "    <img src=\"bild.png\" class=\"bild\">\n"+
                  "  </p>\n"+
                  "  <img src=\"bild.png\" class=\"bild\">\n"+
                  "</div>"}
    />
    <Annotation>Der Adjacent Sibling Kombinator wählt nur direkte Nachfahren des Parent Elemenets. In diesem Fall ist das das erste Bild Element, man beachte den Unterschied zu den vorherigen Beispielen.</Annotation>
</Container>