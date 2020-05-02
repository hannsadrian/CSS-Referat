<script>
  import {Link} from "svelte-routing";
  import Container from "../utils/Layout/Container.svelte";

  const entries = [
    {
      name: "🕰 Geschichte",
      link: "/history",
      description: 'Ursprünglich sollte HTML ausschließlich für den Inhalt genutzt werden.<br/>Befehle wie <span class="font-mono">&#60;b&#62;</span> oder <span class="font-mono">&#60;i&#62;</span> waren nie geplant.'
    },
    {
      name: "🦐 Einbinden in HTML",
      link: "/embed",
      description: 'Damit CSS Attribute, Klassen und Media Queries angewendet werden,<br/>muss das CSS Stylesheet eingebunden werden.'
    },
    {
      name: "🏜 CSS Attribute",
      link: "/attributes",
      description: 'Für die Manipulation von bestimmt Werten des Aussehens<br/>verwendet man bestimmte CSS Attribute.'
    },
    {
      name: "🧩 Selektoren",
      link: "/selectors",
      description: 'Es gibt verschiedene Möglichkeiten CSS Klassen anzuwenden.<br/>Dazu verändert man die Beschriftung der Klasse mit bestimmten Symbolen.'
    },
    {
      name: "🍻 Kombinatoren",
      link: "/combinators",
      description: 'Durch Kombinatoren ist es möglich, Selektoren miteinander zu kombinieren.<br/>Dadurch werden Attribute nur unter bestimmten Umständen angewendet.'
    },
    {
      name: "🍟 Pseudoklassen",
      link: "/pseudoclasses",
      description: 'Pseudoklassen sind wie Kombinatoren dazu da,<br/>Attribute nur unter bestimmten Bedingungen anzuwenden.'
    },
    {
      name: "🔍 Media Queries",
      link: "/mediaqueries",
      description: 'Mit Media Queries ist es möglich Geräte-Vorraussetzungen abzufragen,<br/>dadurch können Inhalte auf Handys anders dargestellt werden.'
    },
    {
      name: "🎞 Frameworks",
      link: "/frameworks",
      description: 'Frameworks erleichtern die Arbeit mit CSS,<br/>sie enthalten vordefiniertes Aussehen für bestimmte Elemente'
    },
  ]
</script>

<Container showBackButton={false}>
  <h1 class="-ml-3 mb-4 text-5xl font-bold flex"><img class="h-16 my-auto" alt="" src="/logo.svg" /><span class="font-dosis my-auto pt-1">CSS</span></h1>
  <p class="font-semibold text-sm text-gray-600">HANNS ADRIAN BÖHME</p>
  <p>
    Praktischer Teil zum zugehörigen <Link to="download"><span class="hover:underline cursor-pointer text-blue hover:text-blue-700">Referat</span></Link><br/>
    über <b>C</b>ascading <b>S</b>tyle <b>S</b>heets.
  </p>
  <hr class="mt-4 mb-3 border"/>
  <div class="xl:flex xl:flex-wrap">
  {#each entries as entry}
    <div class="xl:w-1/2">
      <Link to={"/story"+entry.link}>
        <div class="m-2 w-auto p-4 cursor-pointer group bg-white bg-hover-blue hover:text-white rounded border border-gray-400 transition duration-200 shadow hover:shadow-none">
          <h1 class="text-xl -mt-1 font-bold">{entry.name}</h1>
          <p class="transition duration-200 text-gray-700 group-hover:text-white text-sm">
            {@html entry.description}
          </p>
        </div>
      </Link>
    </div>
    {/each}
  </div>
</Container>
