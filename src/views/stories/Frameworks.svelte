<script>
    import Container from "../../utils/Layout/Container.svelte";
    import Title from "../../utils/Layout/Title.svelte";
    import Content from "../../utils/Layout/Content.svelte";
    import List from "../../utils/Layout/List.svelte";
    import Callout from "../../utils/Layout/Callout.svelte";
    import Code from "../../utils/Layout/Code.svelte";
</script>

<Container>
    <Title>🎞 Frameworks</Title>
    <Content>
        <List>
            <li>Frameworks bergen <b>viele Elemente</b> wie Buttons, Überschriften oder Navigationsleisten</li>
            <li>Man benutzt <b>vorgefertigte Designs</b></li>
            <li>Meist wird ein Verweis im <Code>{"<head>"}</Code> Element eingefügt</li>
            <li>Es gibt eine große Vielfalt an Frameworks:</li>
            <ul>
                <li>-> <a href="https://getbootstrap.com">Bootstrap</a></li>
                <li>-> <a href="https://bulma.io">Bulma</a></li>
                <li>-> <a href="https://get.foundation">Foundation</a></li>
                <li>-> <a href="https://getuikit.com">UIkit</a></li>
                <li>-> <a href="https://tailwindcss.com">TailwindCSS</a></li>
            </ul>
        </List>
        <Callout type="info">
            Frameworks unterscheiden sich im Design und in der Benutzung, es kommt auf die persönliche Präfernez an.
        </Callout>
    </Content>
</Container>