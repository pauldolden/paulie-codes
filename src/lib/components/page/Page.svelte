<script lang="ts">
  import PostCard from '../postCard/PostCard.svelte';
  export let side: 'left' | 'right';
</script>

<div class={`h-full w-full flex flex-col bg-secondary-400`}>
  <div
    class="h-full w-full flex flex-col bg-white border-r"
    style={side === 'left' ? 'border-top-right-radius: 15%' : 'border-top-left-radius: 15%'}
  >
    <div
      class="bg-white h-full flex-1 px-16 py-10"
      style={side === 'left' ? 'border-top-right-radius: 15%' : 'border-top-left-radius: 15%'}
    >
      <PostCard />
    </div>
    <div
      class="bg-silver-100 h-14 border-secondary-400"
      style={side === 'left'
        ? 'border-top-right-radius: 9999px; border-left: 3.5rem;'
        : 'border-top-left-radius: 9999px; border-right: 3.5rem;'}
    />
  </div>
</div>
