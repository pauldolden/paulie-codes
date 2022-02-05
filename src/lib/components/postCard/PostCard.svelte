<script lang="ts">
  import type { Frontmatter } from 'src/types/Frontmatter';

  export let frontMatter: Frontmatter;
</script>

<div class="bg-white shadow-lg relative max-h-full">
  <div class="h-4 w-20 bg-primary-400 absolute -rotate-45 top-2 -left-6" />
  <div class="h-4 w-20 bg-primary-400 absolute rotate-45 top-2 -right-6" />
  <div class="h-4 w-20 bg-primary-400 absolute -rotate-45 bottom-2 -right-6" />
  <div class="h-4 w-20 bg-primary-400 absolute rotate-45 bottom-2 -left-6" />
  <div class="p-10 grid grid-cols-2 grid-rows-2 h-full">
    <div class="col-start-1 col-span-2">
      <h2 class="font-cokobi text-4xl">{frontMatter?.title}</h2>
    </div>
    <div class="row-start-2 col-start-2 ">
      <div class="bg-white p-2 shadow-xl skew-y-1 flex flex-col items-center back">
        <img src={frontMatter?.imagePath} alt="tonks" class="back" />
        <p class="font-cokobi text-2xl">{frontMatter?.imageTitle}</p>
      </div>
    </div>
  </div>
</div>

<style>
  .back {
    backface-visibility: hidden;
  }
</style>
