<script lang="ts">
  import { onMount } from 'svelte';
  export let boxW: number;
  export let boxH;
  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;
  let isClicked = false;
  let canvasY, canvasX;
  let canvasBounds;

  onMount(() => {
    setTimeout(() => {
      context = canvas.getContext('2d');
      canvas.width = boxW - 32;
      canvas.height = boxH - 32;
      context.fillStyle = 'transparent';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.lineWidth = 7;
      context.lineCap = 'round';
    }, 500);
  });

  const handleMouseDown = (e: MouseEvent) => {
    if (canvas && context) {
      isClicked = true;
      canvasBounds = canvas.getBoundingClientRect();
      context.beginPath();
      canvasX = e.clientX - canvasBounds.left;
      canvasY = e.clientY - canvasBounds.top + 32;
      context.moveTo(canvasX, canvasY);
    }
  };
  const handleMouseUp = (e: MouseEvent) => {
    isClicked = false;
    context.closePath();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isClicked !== false) {
      canvasX = e.clientX - canvasBounds.left;
      canvasY = e.clientY - canvasBounds.top + 32;
      context.lineTo(canvasX, canvasY);
      context.strokeStyle = '#FF5151';
      context.stroke();
    }
  };
</script>

<canvas
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseUp}
  class="canvas absolute inset-0"
  bind:this={canvas}
/>

<style>
  .canvas {
    user-select: none;
    cursor: url('/images/marker.png'), default;
    z-index: 1000;
  }
</style>
