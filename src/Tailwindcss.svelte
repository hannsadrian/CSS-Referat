<style global>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@400;700&display=swap');
@import url('https://rsms.me/inter/inter.css');

main { font-family: 'Inter',  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }
@supports (font-variation-settings: normal) {
  main { font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }
}

::selection {
  background: #1444ff; /* WebKit/Blink Browsers */
  color: white;
}
::-moz-selection {
  background: #1444ff; /* Gecko Browsers */
  color: white;
}

.bg-hover-blue:hover {
  background-color: #1444ff;
}

.text-blue {
  color: #1444ff;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

.font-dosis {
  font-family: "Dosis", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}


</style>
