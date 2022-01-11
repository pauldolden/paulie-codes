<script lang="ts">
  import dayjs from 'dayjs';
  import Footer from '$lib/components/footer/Footer.svelte';
  import Header from '$lib/components/header/Header.svelte';
  let mainH;
  import '../app.css';
  let hour = dayjs().hour();
  $: isDark = hour < 8 || hour > 17;
</script>

<div class={`${isDark ? 'bg-tertiary-400' : 'bg-primary-400'}`}>
  <Header />
  <div
    class={`h-[90vh] font-rubik flex flex-col ${
      isDark ? 'bg-night bg-tertiary-400' : 'bg-clouds bg-primary-400`'
    } bg-no-repeat`}
  >
    <main
      class="flex-1 overflow-clip container mx-auto flex items-center"
      bind:clientHeight={mainH}
    >
      <slot {mainH} />
    </main>
    <Footer bind:isDark />
  </div>
</div>
