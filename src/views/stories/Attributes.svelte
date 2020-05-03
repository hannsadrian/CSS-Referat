<script>
    import Container from "../../utils/Layout/Container.svelte";
    import Title from "../../utils/Layout/Title.svelte";
    import CodeContainer from "../../utils/Layout/CodeContainer.svelte";
    import Annotation from "../../utils/Layout/Annotation.svelte";
    import Subtitle from "../../utils/Layout/Subtitle.svelte";
    import Hyperlink from "../../utils/Layout/Hyperlink.svelte";
</script>

<Container>
    <Title>🏜 CSS Attribute</Title>
    <p>Attribute werden dazu verwendet bestimmte Design Paramter eines Elements zu verändern. Wie man Attribute anwendet ist im <Hyperlink to="/story/selectors">Selektoren</Hyperlink> Teil zu finden.</p>

    <Subtitle>Margin ｰ <span class="m-4">Außenabstand</span></Subtitle>
    <CodeContainer format="css">margin: 2px; /* Variationen: marginｰleft, marginｰtop, marginｰright, marginｰbottom */
    </CodeContainer>
    <Annotation>Margin wird dazu verwendet den Außenabstand zu anderen Elementen zu definieren. Dieser Bereich ist von
        der Hintergrundfarbe des Elements nicht betroffen.
    </Annotation>

    <Subtitle>Border ｰ <span class="border border-gray-500">Umrandung</span></Subtitle>
    <CodeContainer format="css">border: 1px solid;</CodeContainer>
    <Annotation>
        Border definiert, wie ein Element umrahmt ist. Dabei wird zuerst die Rahmendicke in Pixeln und anschließend das
        Erscheinungsbild angegeben.<br/>
        Neben solid können auch dotted, dashed oder double als Erscheinungsbild gewählt werden.
    </Annotation>

    <Subtitle>Box Shadow ｰ Schatten</Subtitle>
    <CodeContainer shadow={true} format="css">boxｰshadow: 5px 5px 10px;</CodeContainer>
    <Annotation>
        Mit dem Attribut <code>boxｰshadow</code> ist es möglich, einen Schatten anzuzeigen. Dabei gibt es drei
        Parameter:
        Durch den ersten Parameter wird in Pixeln angegeben, wie weit der Schatten nach rechts verschoben ist,<br/>
        der zweite legt in Pixeln fest, wie weit der Schatten nach unten bzw. oben versetzt wird und
        mit dem dritten Parameter wird der Schatten unscharf.
    </Annotation>

    <Subtitle>Background ｰ <span class="bg-green-300">Hintergrund</span></Subtitle>
    <CodeContainer format="css">background: green;</CodeContainer>
    <Annotation>Das Background Attribut bestimmt in diesem Fall die Hintergrundfarbe, es ist aber auch möglich ein
        Bild oder einen Farbverlauf als Hintergrund zu verwenden.
    </Annotation>

    <Subtitle>
        Color ｰ <span class="text-red-600">F</span><span class="text-indigo-600">a</span><span
            class="text-teal-600">r</span><span class="text-yellow-500">b</span><span class="text-orange-600">e</span>
    </Subtitle>
    <CodeContainer format="css">color: red;</CodeContainer>
    <Annotation>Color macht es möglich die Textfarbe von Überschriften, Paragraphen, Tabellen und Listen zu ändern.</Annotation>

    <Subtitle>Font Family ｰ <span class="font-serif">Schriftart</span></Subtitle>
    <CodeContainer>fontｰfamily: Times;</CodeContainer>
    <Annotation>Durch das <code>fontｰfamily</code> Attribut wird es möglich die Schriftart von Überschriften, Paragraphen, Tabellen und Listen zu ändern.</Annotation>

    <Subtitle>Font Size - <span class="text-2xl">Schriftgröße</span></Subtitle>
    <CodeContainer>font-size: 30px;</CodeContainer>
    <Annotation>Das Ändern der Schriftgröße von Überschriften, Paragraphen, Tabellen und Listen ist mit dem Attribut <code>font-size</code> möglich.</Annotation>

    <Subtitle>Font Weight - <span class="font-thin">Schriftgewicht</span></Subtitle>
    <CodeContainer>font-weight: lighter;</CodeContainer>
    <Annotation>
        Um das Schriftgewicht zu bestimmen ist es entweder möglich Begriffe wie <code>normal, bold, bolder, lighter</code> oder Nummern von 100-900 zu verwenden.<br/>
        Verwendet man Nummern ist 100 die dünnste und 900 die dickste Schrift, es funktionieren nur hunderter Stellen (..., 400, 500, 600, ...).
    </Annotation>

</Container>