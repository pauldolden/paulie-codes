<script lang="ts">
  import { goto } from '$app/navigation';

  import { currentNavStore } from '../../../stores';
  export let name: string;
  export let index: number;

  const handleClick = () => {
    currentNavStore.set(index);
    if (name === 'home') {
      goto('/');
    } else {
      goto(name);
    }
  };
</script>

<button
  on:click={handleClick}
  class="bg-secondary-400 text-white font-cokobi text-4xl border-4 p-4 rounded-lg min-w-[200px] hover:scale-110 hover:transition-all"
>
  {name}
</button>
