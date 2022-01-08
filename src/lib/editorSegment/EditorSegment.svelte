<script lang="ts">
  import type { Project as ProjectInterface } from 'src/types/Project';
  import { generateNumbers } from '../../utils/helpers';
  import Project from '$lib/project/Project.svelte';
  export let data: ProjectInterface[];
  export let active: number;
  let numbers = generateNumbers();
  let togglePreview = false;
</script>

<section>
  {#if !togglePreview}
    <div>
      <div class="flex text-editor-textIcons text-sm bg-editor-tabBar gap-2">
        {#each data as project, i}
          <div
            class={`p-2 font-bold border-t-2 select-none cursor-pointer flex gap-2 ${
              active === i
                ? 'text-editor-active border-editor-active bg-editor-tab'
                : 'border-transparent'
            }`}
          >
            <img src={project.iconPath} alt="project icon" class="w-5" />
            <button on:click={() => (active = i)}>
              {project.name}
            </button>
          </div>
        {/each}
      </div>
      <div class="bg-editor-tabBarAlt px-2 py-1 text-xs text-gray-300 drop-shadow-md">
        <p>src > lib > work > {data[active].name}</p>
      </div>
    </div>
    <div class="flex">
      <div
        class="px-5 text-sm text-editor-textIcons flex flex-col border-r-editor-textIcons border-r overflow-hidden max-h-full"
      >
        {#each numbers as number}
          <p>{number}</p>
        {/each}
      </div>
      <div class="flex-1 py-1 px-2">
        <Project project={data[active]} />
      </div>
    </div>
  {:else}
    <div />
  {/if}
</section>
