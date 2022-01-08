<script lang="ts">
  import type { Breakpoint } from 'src/types/Breakpoint';
  import { currentNavStore } from '../../stores';
  import { onMount } from 'svelte';
  import { generateBreakpoints } from '../../utils/helpers/generateBreakpoints';

  export let numberOfLinks;
  let posX = 20;
  let speed = 10;
  let character;
  let direction = 'face-ahead';
  let motion = '';
  let conW: number;
  let charW: number;
  let breakpoints: Breakpoint[];
  let current: number;
  let showBubble = true;

  currentNavStore.subscribe((value) => {
    current = value;
  });

  onMount(() => {
    breakpoints = generateBreakpoints(numberOfLinks, conW - charW);
  });

  const handleKeydown = (event) => {
    let offset = character.offsetLeft;
    breakpoints.forEach((bp, index) => {
      if (offset > bp.min && offset < bp.max) {
        if (index !== current) {
          currentNavStore.set(index);
        }
      }
    });

    if (event.key === 'a' || event.key === 'ArrowLeft') {
      if (showBubble) {
        showBubble = false;
      }
      motion = 'move-character';
      if (posX - speed < 0) {
        posX = 0;
      } else {
        posX -= speed;
      }
      direction = '';
    }
    if (event.key === 'd' || event.key === 'ArrowRight') {
      if (showBubble) {
        showBubble = false;
      }
      motion = 'move-character';
      direction = 'face-right';
      if (posX + speed + charW > conW) {
        posX = conW - charW;
      } else {
        posX += speed;
      }
    }
  };

  const handleKeyup = (event) => {
    motion = '';
    direction = 'face-ahead';
  };
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />

<div class="w-full h-[120px] relative" bind:clientWidth={conW}>
  {#if showBubble}
    <div
      class="bg-bubble bg-no-repeat w-[140px] h-[140px] p-[12px] font-cokobi text-sm absolute left-[40px] top-[-90px] flex"
    >
      Move me with 'A' and 'D'... Or click the buttons. I'm not the boss of you.
    </div>
  {/if}
  <div
    class="container absolute bottom-0"
    style={`left: ${posX}px`}
    bind:clientWidth={charW}
    bind:this={character}
  >
    <img
      src={'/images/character.png'}
      alt="character"
      class={`max-w-none character ${motion} ${direction}`}
    />
  </div>
</div>

<style>
  :root {
    --width: 45px;
    --height: 45px;
    --pixel-size: 3;
  }

  .container {
    width: calc(var(--width) * var(--pixel-size));
    height: calc(var(--height) * var(--pixel-size));
    overflow: hidden;
  }

  .character {
    image-rendering: pixelated;
    width: calc(450px * var(--pixel-size));
    position: relative;
  }

  .move-character {
    animation: moveSpriteSheet 1s steps(9) infinite;
  }

  @keyframes moveSpriteSheet {
    from {
      transform: translate3d(0px, 0, 0);
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }

  .face-ahead {
    top: calc(-50px * var(--pixel-size));
  }
  .face-right {
    top: calc(-100px * var(--pixel-size));
  }
</style>
