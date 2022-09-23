<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';

	let loader: any;
	let time = 0;
	let timer = 25;

	function addOne() {
		time += 1;
		changeTimer(timer);
	}
	function changeTimer(timer: number) {
		let timeout = setTimeout(addOne, timer);
		if (time === 100) {
			clearTimeout(timeout);
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

<!-- Preloader -->
<div class="relative flex justify-center w-full h-full">
	<div
		class="loader z-10 bg-black w-screen h-screen relative left-0 top-0 flex items-center justify-center"
		bind:this={loader}
	>
		<p class="text-[#9BA809] text-6xl text-center absolute">{time}%</p>
	</div>
	<!-- Preloader -->

	<div class="lg:mx-5 content absolute">
		<Navbar />
		<slot />
		<Footer />
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap');

	.loader {
		animation-name: load;
		animation-duration: 1s;
		animation-delay: 3s;
		animation-timing-function: ease-in-out;
		animation-fill-mode: forwards;
	}
	
	p {
		font-family: 'DM Sans', sans-serif;
	}

	@keyframes load {
		from {
			transform: translateY(0%);
		}
		to {
			transform: translateY(-100%);
		}
	}
</style>
