<script lang="ts">
  import Footer from '$lib/footer/Footer.svelte';
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
  let isDark = false;
</script>

<div class={`${isDark ? 'bg-tertiary-400' : 'bg-primary-400'}`}>
  <Header />
  <div
    class={`h-[90vh] font-rubik flex flex-col ${
      isDark ? 'bg-night bg-tertiary-400' : 'bg-clouds bg-primary-400`'
    } bg-no-repeat`}
  >
    <main class="flex-1 max-h-[80vh] overflow-hidden container mx-auto">
      <slot />
    </main>
    <Footer bind:isDark />
  </div>
</div>
