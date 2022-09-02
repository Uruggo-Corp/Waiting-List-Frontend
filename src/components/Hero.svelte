<script lang="ts">
	import {onMount} from 'svelte';

	// the library for the circular text
	import CircleType from 'circletype';

	// due to SSR we first need to let our component mount before being able to access the DOM and window object provided by javascript
	onMount(() => {
		// initializing the circle text by getting its Id from the DOM
		const circleType = new CircleType(document.getElementById('circleText'));
	
	});
</script>

<div
	class=" mt-10 mb-8 px-3 py-2 max-w-[1224px] flex flex-col items-center justify-center lg:gap-24 gap-16 container mx-auto ">

	<!-- The main text container -->

	<div class="text-white hero-header">
		<h1 class="text-3xl hero-main-txt font-bold">Get on the Uruggo train!!</h1>
	</div>

	<!-- The main text container -->

	<!-- The image and circular text container -->

	<div class="relative hero-image-container">

		<!-- Circular Text -->

		<p 
		 class="text-[#adb643] absolute top-[-3.5em] circle-text md:scale-[1]" id="circleText">
			ent & Properties R
		</p>

		<!-- Circular Text -->

		<!-- Image -->

		<img 
		 src="/assets/Hero-image.png" 
		 alt="A minimalist living space with a white backdrop and a single two sitter sofa with couple of wooden tables" 
		 class="h-[400px] object-cover md:h-[600px] " 
		/>

		<!-- Image -->

		<!-- The line behind the image -->

		<div
			class="h-[380px]  w-[250px] border-[3.8px] border-[#9BA809] absolute top-10 left-10 md:h-[600px] md:w-[380px] md:top-8 md:left-14 z-[-4]"
		/>
		<!-- The line behind the image -->

	</div>

	<!-- The image and circular text container -->


	<!-- Text Content and Form -->
	<div
		class="text-white hero-content mt-4 flex flex-col justify-center items-center max-w-[700px] gap-6 lg:gap-4">
		<p class="text-lg text-center">
			Getting an apartment can be backbreaking! Uruggo makes it easy for house seekers to get their
			desired apartments. <br />
			We are building an all in one property and rent solution. Would you like to know when we launch?
			Kindly drop your email below.
		</p>

		<!-- Form to get waiting users email -->

		<form class="flex w-full hero-form flex-col items-center justify-center gap-4" action="">
			<input
				type="text"
				name="email-input"
				aria-label="email input"
				class="bg-[transparent] w-[70%] rounded-3xl p-2 outline-none border-[#DCDCDC] border-[1px]"
				placeholder="Enter your email"
			/>
			<button aria-label="submit button" class="text-black w-28 submit-btn bg-[#adb643] py-2 px-4"
				>Submit</button
			>
		</form>
		<!-- Form to get waiting users email -->

	</div>

	<!-- Text Content and Form-->

	<!-- Footer -->

	<div
		class="text-[#6e6e58] font-bold text-base flex flex-wrap gap-5 items-center justify-center lg:gap-9 md:text-2xl md:justify-start md:mx-0 mx-4"
	>
		<p>Get a flatmate</p>
		<p>Get an apartment</p>
		<p>Shortlets</p>
		<p>Properties</p>
	</div>

	<!-- Footer -->
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Caudex:wght@400;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap');

	/* Setting defaults for tags */
	h1,
	p {
		font-family: 'Caudex', serif;
	}
	button {
		font-family: 'DM Sans', sans-serif;
	}

	.submit-btn {
		border-radius: 0px 50px 50px 50px;
	}
	.circle-text {
		animation: rotate 6s linear infinite;
		font-size: 16px;
		scale: .8;
	}

	@media screen and (min-width: 1024px) {
		.container {
			display: grid;
			grid-template-areas:
				'h m'
				'c m';
			margin-top: 3em;
			padding: 0;
		}
		.hero-header {
			grid-area: h;
			margin-top: 9em;
		}
		.hero-main-txt {
			font-size: 64px;
			font-weight: 700;
			font-family: 'Caudex', serif;
		}

		.hero-image-container {
			grid-area: m;
		}
		.hero-image-container > div {
			width: 380px;
			height: 610px;
			left: 3.5em;
			top: 1.5em;
		}
		.hero-image-container > p {
			font-size: 24px;
			scale: 0.9;
		}

		.hero-content {
			grid-area: c;
			justify-content: start;
			align-items: start;
			gap: 2em;
			margin-top: -7em;
		}
		.hero-content > p {
			line-height: 40px;
			text-align: left;
			font-size: 22px;
		}

		form {
			border: 1px solid white;
			width: 100%;
			flex-direction: row;
			justify-content: space-between;
			border-radius: 50px;
			height: 100px;
		}
		form > button {
			height: 100px;
			width: 170px;
			font-size: 24px;
		}
		form > input {
			height: 100px;
			border: none;
			width: 70%;
			font-size: 20px;
			padding: 1em;
		}
	}

	/* animation for the circle text */

	@keyframes rotate {
		from {
			transform: rotate(0deg);
			-moz-transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
</style>
