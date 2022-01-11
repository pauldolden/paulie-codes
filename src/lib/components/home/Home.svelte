<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';

  let index = 0;
  let buttonText = [
    "Don't click me",
    'Oh come on, please!',
    "Haven't you done enough?",
    'Aw, man.',
    '😞'
  ];

  let bannerText = [
    "I'm a full-stack developer from the UK.",
    "I'm a developer from the UK.",
    "I'm from the UK."
  ];

  const handleClick = () => {
    if (index < buttonText.length - 1) {
      index++;
    }
  };

  let show = false;

  onMount(() => {
    setTimeout(() => {
      show = true;
    }, 400);
  });
</script>

{#if show}
  <section transition:scale class="w-full flex flex-col">
    <h2 class="text-7xl text-white font-extrabold text-center">
      {#if index < 4}
        <span out:fade class="block"
          >Hi, my name is <span class="font-cokobi text-secondary-400 text-8xl tracking-wider"
            >Paul Dolden.</span
          ></span
        >
        {#if index < 3}
          <span out:fade class="block"
            >I'm {#if index < 2} a {/if}
            <span out:fade class="font-cokobi text-secondary-400 text-8xl tracking-wider">
              {#if index === 0}
                <span out:fade> full-stack</span>
              {/if}
              {#if index < 2}
                <span out:fade>developer</span>
              {/if}
            </span>
            from the UK.</span
          >
        {/if}
      {/if}
    </h2>
    {#if index < 4}
      <button
        on:click={handleClick}
        class="bg-secondary-400 text-white font-cokobi text-4xl border-4 p-4 rounded-lg min-w-[200px] self-center mt-10 hover:scale-110 hover:transition-all"
        >{#key index}
          <span in:fade>
            {buttonText[index]}
          </span>
        {/key}
      </button>
    {:else}
      <div in:fade={{ delay: 1000 }} class="text-8xl flex items-center justify-center">😞</div>
    {/if}
  </section>
{/if}
