<script lang="ts">
  import { currentNavStore } from '../../stores';
  export let name: string;
  export let index: number;
  let isHovered: boolean;
</script>

<button
  on:click={() => currentNavStore.set(index)}
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
  class="bg-secondary-400 text-white font-cokobi text-4xl border-4 p-4 rounded-lg min-w-[200px]"
>
  {name}
</button>
