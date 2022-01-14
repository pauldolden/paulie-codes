<script lang="ts" context="module">
  const posts = import.meta.glob('./*.md');

  console.log(posts);

  let body = [];

  for (const path in posts) {
    body.push(posts[path]().then(({ metadata }) => metadata));
  }

  export const load = async () => {
    const posts = await Promise.all(body);
    return {
      props: {
        posts
      }
    };
  };
</script>

<script lang="ts">
  import Page from '$lib/components/page/Page.svelte';
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';

  let show = false;

  onMount(() => {
    setTimeout(() => {
      show = true;
    }, 400);
  });

  export let posts;
</script>

{#if show}
  <section transition:scale class="w-[80%] mx-auto h-full max-h-[600px] flex flex-col items-center">
    <div class="bg-secondary-500 rounded-lg pb-4 w-full h-full">
      <div
        class="h-full w-full bg-secondary-400 rounded-lg flex flex-col items-center justify-end px-4"
      >
        <div class="h-full w-full grid grid-cols-2 grid-rows-1 m-3">
          <Page side="left" />
          <Page side="right" />
        </div>
        <div class="h-4 w-14 bg-secondary-500 rounded-t-md" />
      </div>
    </div>
    <div class="h-6 w-20 bg-secondary-500 rounded-md" />
  </section>
{/if}
