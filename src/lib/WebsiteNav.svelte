<script lang="ts">
  import Icon from "svelte-awesome";
  import github from "svelte-awesome/icons/github";
  import weibo from "svelte-awesome/icons/weibo";
  import { faZhihu } from "@fortawesome/free-brands-svg-icons/faZhihu";
  import archive from "svelte-awesome/icons/archive";
  import type { IconType } from "svelte-awesome/components/Icon.svelte";

  const itemList: {
    icon: IconType;
    href: string;
  }[] = [
    {
      icon: github,
      href: "https://github.com/noahziheng",
    },
    {
      icon: {
        juejin: {
          width: 36,
          height: 28,
          paths: [
            {
              d: "M21.29,2.58,18,0,14.59,2.7l-.17.14L18,5.71l3.61-2.87Zm12.42,10L18,25,2.32,12.61,0,14.47l18,14.2L36,14.46Zm-15.7,1L9.46,6.87,7.15,8.73,18,17.29,28.88,8.72,26.56,6.86Z",
            },
          ],
        },
      },
      href: "https://juejin.im/user/583bdbf1a22b9d006c1514f8",
    },
    {
      icon: weibo,
      href: "https://weibo.com/noah1719",
    },
    {
      icon: faZhihu,
      href: "https://www.zhihu.com/people/noah-gao/activities",
    },
  ].concat(
    window.location.host !== "noahgao.net"
      ? [
          {
            icon: archive,
            href: "/blog",
          },
        ]
      : []
  );
</script>

<div class="m-4 text-slate-700/70 dark:text-gray-500 flex justify-center items-center">
  {#each itemList as item}
    <a
      class="flex justify-center items-center"
      target="_blank"
      href={item.href}
    >
      <Icon class="w-8 m-2" scale={2} data={item.icon} />
    </a>
  {/each}
</div>

<style></style>
