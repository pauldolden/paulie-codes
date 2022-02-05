import { writable } from 'svelte/store';
export const currentNavStore = writable(0);
export const prevNavStore = writable('home');
// Blog
export const blogPageStore = writable(0);
