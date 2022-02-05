<script lang="ts">
  import type { Frontmatter } from 'src/types/Frontmatter';

  import PostCard from '../postCard/PostCard.svelte';
  export let side: 'left' | 'right';
  export let face: 'front' | 'back';
  export let data: Frontmatter;

  let borderRadiusTop =
    (side === 'left' && face === 'front') || (side === 'right' && face === 'back')
      ? 'border-top-right-radius: 5%'
      : 'border-top-left-radius: 5%';

  let borderRadiusBottom =
    (side === 'left' && face === 'front') || (side === 'right' && face === 'back')
      ? 'border-top-right-radius: 9999px; border-left: 3.5rem;'
      : 'border-top-left-radius: 9999px; border-right: 3.5rem;';
</script>

<div
  class="bg-silver-50 px-16 pt-10 flex flex-col flex-1 border-right perspective"
  style={borderRadiusTop}
>
  <PostCard frontMatter={data} />
</div>
<div
  class="bg-silver-100 h-6 border-secondary-400 absolute z-10 bottom-0 left-0 right-0"
  style={borderRadiusBottom}
/>

<style>
  .perspective {
    -webkit-perspective: 1800px;
    perspective: 1800px;
  }
</style>
