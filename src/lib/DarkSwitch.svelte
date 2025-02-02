<script lang="ts">
  import Icon from "svelte-awesome";
  import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
  import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";

  let isDark = $state(
    localStorage.currentTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const toggleDark = (force?: boolean) => {
    document.documentElement.classList.toggle("dark", force);
    isDark = force || !isDark;
  };
  (() => {
    toggleDark(isDark);
  })();
</script>

<button
  class="flex justify-center items-center cursor-pointer"
  onclick={() => toggleDark()}
>
  {#if isDark}
    <Icon data={faMoon} />
  {:else}
    <Icon data={faSun} />
  {/if}
</button>
