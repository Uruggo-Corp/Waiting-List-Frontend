<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';

	let loading: boolean = true;
	let loader: any;
	let time = 0;
	let timer = 600;

	function addOne() {
		time += 1;
		if (time >= 20) {
			timer = timer / 2;
		} else if (time >= 40) {
			timer = timer / 2;
		} else if (time >= 60) {
			timer = timer / 2;
		}
		changeTimer(timer);
	}
	function changeTimer(timer: number) {
		let timeout = setTimeout(addOne, timer);
		if (time === 100) {
			clearTimeout(timeout);
			loading = false;
		}
	}
	onMount(() => {
		addOne();
		if (!loader) {
			loader.style.backgroundColor = 'red';
		}
		console.log(loader);
	});
</script>

{#if loading}
	<div
		class="loader bg-black w-screen h-screen relative left-0 top-0 flex items-center justify-center"
		bind:this={loader}
	>
		<p class="text-[#9BA809] text-6xl text-center absolute">{time}%</p>
		<img src="/assets/Uruggo.svg" class="logo opacity-25" alt="Uruggo's Logo">
	</div>
{:else}
	<div class="lg:mx-5 content">
		<Navbar />
		<slot />
		<Footer />
	</div>
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap');

	.content{
		animation-name: load;
		animation-duration: 1s;
		animation-timing-function: ease-in-out;
		animation-fill-mode: forwards;
	}
	.logo{
		animation-name: sizeImage;
		animation-duration: 2s;
		animation-timing-function: cubic-bezier(.25,.46,.45,.94);
		animation-iteration-count: infinite;
		animation-fill-mode: backwards;
	}
	p{
		font-family: 'DM Sans', sans-serif;
	}


	@keyframes load{
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateX(0%)
		}
	}
	@keyframes sizeImage{
		0%{
			scale: 1;
		}
		50% { 
			scale: 1.5
		}
		100%{
			scale: 1;
		}
	}
</style>
