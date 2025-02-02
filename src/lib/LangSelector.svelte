<script lang="ts">
  import { locale } from "svelte-i18n";
</script>

<div>
  <button
    class={["cursor-pointer", $locale === "en-US" && "font-bold"]}
    onclick={() => locale.set("en-US")}>En</button
  >
  /
  <button
    class={["cursor-pointer", $locale === "zh-CN" && "font-bold"]}
    onclick={() => locale.set("zh-CN")}>中</button
  >
</div>
