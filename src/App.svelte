<script lang="ts">
  import { Icon } from "svelte-awesome";
  import spinner from "svelte-awesome/icons/spinner";
  import arrowLeft from "svelte-awesome/icons/arrowLeft";
  import { _, isLoading } from "svelte-i18n";
  import WebsiteNav from "./lib/WebsiteNav.svelte";
  import DarkSwitch from "./lib/DarkSwitch.svelte";
  import LangSelector from "./lib/LangSelector.svelte";
  import avatarImage from "./assets/avatar.jpeg";
  import "./app.css";

  import "./locale";
</script>

<header class="flex p-8 flex justify-between space-x-6">
  {#if window.location.pathname !== "/"}
    <button
      class="cursor-pointer"
      onclick={() => {
        window.location.href = "/";
      }}
    >
      <Icon data={arrowLeft} />
    </button>
  {:else}
    <span></span>
  {/if}
  <div class="flex justify-center items-center space-x-6">
    <DarkSwitch />
    <LangSelector />
  </div>
</header>

<main class="flex flex-auto flex-col justify-center items-center">
  {#if $isLoading}
    <Icon data={spinner} scale={2} pulse />
  {:else if window.location.pathname !== "/"}
    <h1 class="text-3xl font-bold">{$_("lost")}</h1>
  {:else}
    <img
      class="avatar w-30 rounded-full m-5 border-3 border-gray-400"
      src={avatarImage}
      alt="Avatar"
    />

    <h1 class="text-3xl font-bold">{$_("primary_name")}</h1>
    <h3 class="text-xl font-bold my-2 text-slate-700/70 dark:text-white/70">
      {$_("secondary_name")}
    </h3>
    <p class="my-2 text-slate-700 dark:text-white">{$_("description")}</p>

    <WebsiteNav />
  {/if}
</main>

<footer class="py-4 text-[0.7rem]/[1.5] space-y-1">
  <p class="text-gray-300 mb-2">♥ Built with Love</p>
  <p class="text-gray-500">
    <a href="https://beian.miit.gov.cn" target="_blank">津ICP备16007205号-1</a>
  </p>
  <p class="text-gray-500">
    <a
      href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12010302001093"
      target="_blank">津公网安备 12010302001093号</a
    >
  </p>
</footer>

<style>
  @reference "tailwindcss/theme";

  :global(html) {
    background-color: theme(--color-gray-100);
  }
  .avatar {
    will-change: filter;
    transition: filter 300ms;
  }
  .avatar:hover {
    filter: drop-shadow(0 0 2em #2c3e50);
  }
</style>
