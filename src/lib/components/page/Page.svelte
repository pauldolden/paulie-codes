<script lang="ts">
  import type { Frontmatter } from 'src/types/Frontmatter';

  import PageSide from '../pageSide/PageSide.svelte';
  export let side: 'left' | 'right';
  export let front: Frontmatter;
  export let back: Frontmatter;
  let turn = side === 'left';

  let borderRadiusTop =
    (side === 'left' && turn) || (side === 'right' && turn)
      ? 'border-top-right-radius: 5%'
      : 'border-top-left-radius: 5%';

  const handleTurnPage = () => {
    turn = !turn;
  };
</script>

<div
  class:turn
  class="relative page flex flex-col transition duration-500 transform origin-left bg-white perspective border-r"
  style={`${
    side === 'right' ? 'transform-origin: left;' : 'transform-origin: right;'
  } ${borderRadiusTop}`}
  on:click={handleTurnPage}
>
  <div class="front absolute inset-0 flex flex-col">
    <PageSide face="front" data={front} {side} />
  </div>
  <div class="back absolute inset-0 flex flex-col">
    <PageSide face="back" data={back} {side} />
  </div>
</div>

<style>
  .perspective {
    -webkit-perspective: 1800px;
    perspective: 1800px;
  }
  .page {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }

  .page.turn {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    z-index: 100;
  }

  .front,
  .back {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .back {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }
</style>
