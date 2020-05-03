<script>
  import { navigate } from "svelte-routing";

  const download = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000)
  }
</script>

<main class="w-full min-h-screen h-full flex justify-center items-center select-none">
  <a href="/CSS Referat.odp" download on:click={download} class="mx-4 cursor-pointer">
    <img
      class="h-16 mx-auto mb-2"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa2%2FLibreOffice_Impress_icon_3.3.1_48_px.svg%2F853px-LibreOffice_Impress_icon_3.3.1_48_px.svg.png&f=1&nofb=1"
    />
    <p class="font-semibold">CSS Referat.odp</p>
  </a>
  <a href="/CSS Referat.pdf" download on:click={download} class="mx-4 cursor-pointer">
    <img
      class="h-16 mx-auto mb-2"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FPDF_file_icon.svg%2F1200px-PDF_file_icon.svg.png&f=1&nofb=1"
    />
    <p class="font-semibold">CSS Referat.pdf</p>
  </a>
</main>
