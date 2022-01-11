<script lang="ts">
  import Canvas from '$lib/components/canvas/Canvas.svelte';
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  let show = false;
  let boxH;
  let boxW;

  onMount(() => {
    setTimeout(() => {
      show = true;
    }, 400);
  });
</script>

{#if show}
  <section transition:scale class="w-full h-full max-h-[800px] bg-silver-500 p-4">
    <div
      class="h-full w-full relative bg-silver-400 p-4 flex"
      bind:clientHeight={boxH}
      bind:clientWidth={boxW}
    >
      <div class="relative bg-white w-full h-full flex flex-1 p-4">
        <div class="w-full grid grid-cols-3 bg-map cover bg-no-repeat">
          <div class="w-full grid justify-end grid-cols-2 grid-rows-2 gap-1">
            <div class="col-start-1 row-start-2 ">
              <div
                class="bg-white shadow-xl pb-3 w-[100%] my-2 font-cokobi text-md flex flex-col items-center skew-y-1"
              >
                <div class="bg-red-600 w-3 h-3 rounded-full my-2" />
                <h3 class="underline">Enjoys</h3>
                <div>
                  <ul class="list-disc list-inside">
                    <li>Hanging out with his wife, kid and mob boss dog.</li>
                    <li>Watching football and cricket.</li>
                    <li>Playing video games</li>
                    <li>Shark movies</li>
                    <li>Building fun stuff with code</li>
                    <li>Pretending to be a fugitive</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-start-2">
              <div
                class="bg-white shadow-xl w-[100%] my-2 font-cokobi pb-3 flex flex-col items-center -skew-y-1 relative z-10"
              >
                <div class="bg-red-600 w-3 h-3 rounded-full my-2" />
                <h3 class="underline">Bio</h3>
                <div>
                  <ul class="list-disc list-inside">
                    <li>Name: Paul Dolden</li>
                    <li>DOB: 11/01/1989.</li>
                    <li>From: Essex, UK.</li>
                    <li>Job: React Native Developer.</li>
                    <li>Company: 2Dmedia Ltd.</li>
                    <li>
                      Additional Info: Curious and keen to learn. Loves what he does, doesn't take
                      himself too seriously.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div class="bg-white p-2 shadow-xl skew-y-1 flex flex-col items-center">
                <div class="bg-red-600 w-3 h-3 rounded-full mb-2" />
                <img src="/images/tonks.png" alt="tonks" />
                <p class="font-cokobi text-2xl">Tonks (Kingpin?)</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex relative">
              <p class="text-6xl mb-4 font-cokobi text-center text-secondary-400 flex-1">
                About this guy.
              </p>
              <img
                src="/svg/arrow.svg"
                alt="Paul Dolden"
                class="absolute h-[100px] right-0 z-100"
              />
            </div>
            <div class="flex flex-col items-center justify-center col-start-2">
              <div class="bg-white p-2 shadow-xl flex flex-col items-center skew-y-1 relative">
                <div class="bg-red-600 w-3 h-3 rounded-full mb-2" />
                <img src="/images/PD.png" alt="Paul Dolden" class="h-[300px]" />
                <h2 class="font-cokobi text-3xl mb-2">Paul Dolden</h2>
              </div>
            </div>
          </div>
          <div class="w-full grid justify-end grid-cols-2 grid-rows-2 gap-x-2">
            <div
              class="bg-white p-2 shadow-xl flex flex-col items-center skew-y-1 mt-4 col-span-2 row-start-1 absolute max-w-full"
            >
              <div class="bg-red-600 w-3 h-3 rounded-full mb-2" />
              <img src="/images/train.jpg" alt="train" />
              <p class="font-cokobi text-2xl">Paul likes trains?</p>
            </div>
            <div class="col-start-1 row-start-1">
              <div
                class="bg-white shadow-xl w-[100%] my-2 text-md font-cokobi flex flex-col items-center pb-3 relative z-10 skew-y-1"
              >
                <div class="bg-red-600 w-3 h-3 rounded-full my-2" />
                <h3 class="underline">Skills</h3>
                <div class="self-start">
                  <ul class="list-disc list-inside">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React/React Native</li>
                    <li>Redux</li>
                    <li>NextJS</li>
                    <li>Gatsby</li>
                    <li>Svelte</li>
                    <li>SvelteKit</li>
                    <li>NodeJS</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-start-1 row-start-2">
              <div
                class="bg-white shadow-xl w-[100%] my-2 text-md font-cokobi flex flex-col items-center pb-3 skew-y-1 relative z-20"
              >
                <div class="bg-red-600 w-3 h-3 rounded-full my-2" />
                <h3 class="underline">Interests</h3>
                <div class="self-start pb-2">
                  <ul class="list-disc list-inside">
                    <li>Slightly obsessive developer, who is passionate about the web.</li>
                    <li>Enjoys shiny new things</li>
                    <li>Tries to design things, but invariably fails.</li>
                    <li>Enjoys writing all sorts of code, but is front-end focused.</li>
                    <li>Always trying to be a better developer and/or human.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-start-2 row-start-1">
              <div
                class="bg-white shadow-xl w-[100%] my-2 text-md font-cokobi flex flex-col items-center pb-3 skew-y-1 relative z-5"
              >
                <div class="bg-red-600 w-3 h-3 rounded-full my-2" />
                <h3 class="underline">Skills (cont'd)</h3>
                <div class="self-start pb-2">
                  <ul class="list-disc list-inside">
                    <li>TailwindCSS</li>
                    <li>Sass/Scss</li>
                    <li>Figma</li>
                    <li>Contentful</li>
                    <li>Prismic</li>
                    <li>Netlify</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-start-2 row-start-2">
              <div class="bg-white p-2 shadow-xl skew-y-1 flex flex-col items-center">
                <div class="bg-red-600 w-3 h-3 rounded-full mb-2" />
                <img src="/images/acaba.jpg" alt="tonks" class="w-full" />
                <p class="font-cokobi text-2xl">?? (Accomplice?)</p>
              </div>
            </div>
          </div>
        </div>
        <Canvas {boxH} {boxW} />
      </div>
    </div>
  </section>
{/if}

<style>
  li {
    padding-left: 5px;
  }
</style>
