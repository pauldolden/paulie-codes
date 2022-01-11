<script lang="ts">
  import { currentNavStore } from '../../../stores';
  export let name: string;
  export let index: number;
</script>

<button
  on:click={() => currentNavStore.set(index)}
  class="bg-secondary-400 text-white font-cokobi text-4xl border-4 p-4 rounded-lg min-w-[200px] hover:scale-110 hover:transition-all"
>
  {name}
</button>
