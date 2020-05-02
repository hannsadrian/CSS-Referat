<script>
    import Container from "../../utils/Layout/Container.svelte";
    import Title from "../../utils/Layout/Title.svelte";
    import Content from "../../utils/Layout/Content.svelte";
    import Code from "../../utils/Layout/Code.svelte";
    import List from "../../utils/Layout/List.svelte";
    import Callout from "../../utils/Layout/Callout.svelte";
</script>

<Container>
    <Title>🕰 Geschichte</Title>
    <Content>
        <List>
            <li>HTML sollte <b>nur für Inhalt</b> genutzt werden</li>
            <li><Code>font</Code>, <Code>i</Code> und <Code>b</Code> Befehle waren <b>eigentlich nie geplant</b></li>
            <li>Nach Einführung dieser Befehle wurde es <b>kompliziert große Websiten einheitlich zu verändern</b></li>
            <ul>
                <li>-> Alle <b>Farbwerte</b> & <b>Formatierungen</b> mussten <b>überall angepasst</b> werden</li>
            </ul>
        </List>
        <Callout type="success">
            Um dieses Problem zu lösen wurde <b>CSS entwickelt</b>
        </Callout>
        <List>
            <li>
                <b>Håkon Wium Lie</b> veröffentlichte am <b>10. Oktober 1994</b>
                seinen ersten Vorschlag für „<b>Cascading Style Sheets</b>“
            </li>
            <li>Es gab <b>weitere Ansätze</b> mit dem <b>gleichen Ziel</b></li>
            <li>
                z.B. wollten Entwickler des Browsers <b>Argo</b> zu dieser Zeit ihre <b>eigene Stylesheet-Sprache</b>
                implementieren
            </li>
            <ul>
                <li>→ Sie entschlossen sich <b>CSS gemeinsam mit Håkon Wium Lie zu entwickeln</b></li>
            </ul>
            <li><b>CSS</b> entschied sich jedoch <b>als erstes Regeln Dateiübergreifend anzuwenden</b></li>
        </List>
        <Callout type="important">
            Im Dezember 1996 wurde die CSS Level 1 Recommendation publiziert
        </Callout>
    </Content>
</Container>