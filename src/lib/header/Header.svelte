<script lang="ts">
  import { currentNavStore } from '../../stores';

  import { fly } from 'svelte/transition';
  currentNavStore;

  const social = [
    { name: 'twitter', iconPath: '/svg/twitter.svg' },
    { name: 'linkedin', iconPath: '/svg/linkedin.svg' },
    { name: 'github', iconPath: '/svg/github.svg' }
  ];
</script>

<header class="h-[10vh] flex font-rubik text-white">
  <div class="container mx-auto flex items-center justify-between">
    <h1 in:fly={{ x: -200 }} class="font-cokobi text-6xl cursor-pointer">
      paulie<span class="text-secondary-400">.</span>codes
    </h1>

    <nav class="flex gap-6">
      {#each social as socialItem, i}
        <button>
          <img src={socialItem.iconPath} alt={socialItem.name} class="text-white cursor-pointer" />
        </button>
      {/each}
    </nav>
  </div>
</header>
