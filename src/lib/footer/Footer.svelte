<script lang="ts">
  import Character from '$lib/character/Character.svelte';
  import NavItem from '$lib/navItem/NavItem.svelte';

  // Props
  export let isDark: boolean;

  export const navigation = [{ name: 'about' }, { name: 'work' }, { name: 'blog' }, { name: 'cv' }];

  let numberOfLinks = navigation.length;
</script>

<footer class="py-4">
  <div class="container mx-auto flex items-end justify-between">
    <div class="flex flex-col relative">
      <Character bind:numberOfLinks />
      <nav class="flex gap-4">
        {#each navigation as navItem, i}
          <NavItem name={navItem.name} index={i} />
        {/each}
      </nav>
    </div>
    <div
      class="bg-secondary-400 text-white p-3 border-4 rounded-full cursor-pointer select-none"
      on:click={() => (isDark = !isDark)}
    >
      {#if isDark}
        <img src="/svg/sun.svg" alt="sun" />
      {:else}
        <img src="/svg/moon.svg" alt="moon" />
      {/if}
    </div>
  </div>
</footer>
