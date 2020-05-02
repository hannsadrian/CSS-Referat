<script>
    import Container from "../../utils/Layout/Container.svelte";
    import Title from "../../utils/Layout/Title.svelte";
    import CodeContainer from "../../utils/Layout/CodeContainer.svelte";
    import Subtitle from "../../utils/Layout/Subtitle.svelte";
    import Annotation from "../../utils/Layout/Annotation.svelte";
    import { onMount } from 'svelte';

    onMount(async () => {
        PR.prettyPrint()
    });
</script>

<Container>
    <Title>🦐 Einbinden in HTML</Title>
    <p>Es gibt drei verschiedene Möglichkeiten, CSS einzubinden:</p>

    <Subtitle>1. Einbinden einer externen CSS Datei</Subtitle>
    <CodeContainer>
        {"<html>\n"+
        "  <head>\n"+
        "    <title>Einbinden von CSS in HTML</title>\n"+
        "    <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\n"+
        "  </head>\n"+
        "  <body>\n"+
        "    <h1>Beispiel</h1>\n"+
        "  </body>\n"+
        "</html>"}
    </CodeContainer>
    <Annotation>Damit diese HTML Datei funktioniert, muss die Datei <code>style.css</code> im selben Verzeichnis vorhanden sein.</Annotation>

    <Subtitle>2. CSS im <code>{"<head>"}</code> einbetten</Subtitle>
    <CodeContainer>
        {"<html>\n"+
        "  <head>\n"+
        "    <title>Einbinden von CSS in HTML</title>\n"+
        "    \<style\>\n"+
        "      body {\n"+
        "        background-color: lightblue;\n"+
        "      }\n"+
        "\n"+
        "      h1 {\n"+
        "        color: navy;\n"+
        "        margin-left: 20px;\n"+
        "      }\n"+
        "    </style>\n"+
        "  </head>\n"+
        "  <body>\n"+
        "    <h1>Beispiel</h1>\n"+
        "  </body>\n"+
        "</html>"}
    </CodeContainer>
    <Annotation>Hier werden die CSS Klassen direkt im HTML Dokument geschrieben. Mit dieser Methode kann man CSS Klassen jedoch nicht in anderen HTML Dokumenten verwenden.</Annotation>

    <Subtitle>3. CSS im Element einbetten</Subtitle>
    <CodeContainer>
        {"<html>\n"+
        "  <head>\n"+
        "    <title>Einbinden von CSS in HTML</title>\n"+
        "  </head>\n"+
        "  <body style=\"background-color: lightblue;\">\n"+
        "    <h1 style=\"color: navy; margin-left: 20px;\">Beispiel</h1>\n"+
        "  </body>\n"+
        "</html>"}
    </CodeContainer>
    <Annotation>Diese Herangehensweise gleicht der 2., bloß werden die Attribute anstatt in Klassen direkt im Element deklariert.</Annotation>
</Container>