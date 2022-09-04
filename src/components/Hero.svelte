<script lang="ts">
	import { onMount } from 'svelte';

	// the library for the circular text
	import CircleType from 'circletype';

	// due to SSR we first need to let our component mount before being able to access the DOM and window object provided by javascript
	onMount(() => {
		// initializing the circle text by getting its Id from the DOM
		const circleType = new CircleType(document.getElementById('circleText'));
	});
</script>

<div
	class=" mt-10 mb-8 px-3 py-2 max-w-[1224px] flex flex-col items-center justify-center lg:gap-24 gap-10 container mx-auto "
>
	<!-- The image and circular text container -->

	<div class="relative hero-image-container">
		<!-- Circular Text -->

		<p class="text-[#adb643] absolute top-[-3em] circle-text md:scale-[1]" id="circleText">
			ent & Properties R
		</p>

		<!-- Circular Text -->

		<!-- Image -->

		<img
			src="/assets/Hero.png"
			alt="A minimalist living space with a white backdrop and a single two sitter sofa with couple of wooden tables"
			class="h-[400px] object-cover md:h-[600px] "
		/>

		<!-- Image -->
	</div>

	<!-- The image and circular text container -->

	<!-- Text Content and Form -->

	<div class="flex flex-col hero gap-6">
		<h1 class="text-4xl text-white hero-header text-center hero-main-txt font-bold">
			Get on the Uruggo train!!
		</h1>

		<div class="text-white hero-content flex flex-col max-w-[700px] gap-6 lg:gap-4">
			<p class="text-lg text-center">
				Getting an apartment can be backbreaking! Uruggo makes it easy for house seekers to get
				their desired apartments. <br />
				We are building an all in one property and rent solution. Would you like to know when we launch?
				Kindly drop your email below.
			</p>

			<!-- Form to get waiting users email -->

			<form
				class="rounded-3xl h-[50px] flex border w-full hero-form items-center justify-center gap-4"
				action=""
			>
				<input
					type="text"
					name="email-input"
					aria-label="email input"
					class="bg-[transparent] w-[70%] h-full p-2 outline-none border-[#DCDCDC]"
					placeholder="Enter your email"
				/>
				<button
					aria-label="submit button"
					class="text-black w-28 h-full submit-btn bg-[#adb643] py-2 px-4">Submit</button
				>
			</form>
			<!-- Form to get waiting users email -->
		</div>
	</div>
	<!-- Text Content and Form-->
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
		scale: 0.8;
	}

	@media screen and (min-width: 1024px) {
		.container {
			display: flex;
			flex-direction: row-reverse;
			margin-top: 3em;
			padding: 0;
		}
		.hero-header {
			margin-top: 1em;
		}
		.hero-main-txt {
			font-size: 64px;
			font-weight: 700;
			font-family: 'Caudex', serif;
			text-align: start;
		}


		.hero-image-container > p {
			font-size: 24px;
			scale: 0.9;
		}

		.hero {
			gap: 4em;
			margin-top: 0em;
		}
		.hero-content {
			justify-content: start;
			align-items: start;
			gap: 2em;
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
