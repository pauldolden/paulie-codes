<script lang="ts">
  import type { Project } from 'src/types/ProjectData';

  export let project: Project;
</script>

<article class="text-white font-medium text-md">
  <span class="text-editor-syntax-blue">{'<article>'}</span>
  <div class="pl-4 flex flex-col gap-3">
    <div>
      <p>
        <span class="text-editor-syntax-blue">{'<h1>'}</span>
        {project.name}
        <span class="text-editor-syntax-blue">{'</h1>'}</span>
      </p>
    </div>
    <div>
      <p>
        <span class="text-editor-syntax-blue">{'<h2>'}</span>
        Description
        <span class="text-editor-syntax-blue">{'</h2>'}</span>
      </p>
      <p>
        <span class="text-editor-syntax-blue">{'<p>'}</span>
        {project.data.desc}
        <span class="text-editor-syntax-blue">{'</p>'}</span>
      </p>
    </div>
    <div>
      <p>
        <span class="text-editor-syntax-blue">{'<h2>'}</span>
        My Role
        <span class="text-editor-syntax-blue">{'</h2>'}</span>
      </p>
      <p>
        <span class="text-editor-syntax-blue">{'<p>'}</span>
        {project.data.desc}
        <span class="text-editor-syntax-blue">{'</p>'}</span>
      </p>
    </div>
  </div>
  <span class="text-editor-syntax-blue">{`</article>`}</span>
</article>
