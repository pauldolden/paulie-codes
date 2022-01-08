<script lang="ts">
  import About from '$lib/about/About.svelte';
  import Blog from '$lib/blog/Blog.svelte';
  import Cv from '$lib/cv/CV.svelte';
  import Work from '$lib/work/Work.svelte';

  import { fade } from 'svelte/transition';
  import { currentNavStore } from '../stores';
  let current;

  export const navigation = [
    { name: 'about', component: About },
    { name: 'work', component: Work },
    { name: 'blog', component: Blog },
    { name: 'cv', component: Cv }
  ];

  currentNavStore.subscribe((value) => {
    current = value;
  });
</script>

{#each navigation as item, index}
  {#if current === index}
    <svelte:component this={item.component} />
  {/if}
{/each}
