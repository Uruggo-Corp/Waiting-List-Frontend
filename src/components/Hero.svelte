<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';

	// the library for the circular text
	import CircleType from 'circletype';

	let userEmail: string = '';
	let emailAdded: boolean = false;
	let status: number = 0;
	let checkEmptyForm: boolean = false;
	let loading = false;
	let errorMessage: string | null;

	// function to add users to the waitlist
	const submitUseremail = () => {
		let url = 'https://waitlist-api.uruggo.com/wait-list';

		if (userEmail.trim() !== '') {
			errorMessage = null;
			loading = true;
			axios
				.post(url, {
					email: userEmail
				})
				.then((res: any) => {
					userEmail = '';
					emailAdded = true;
					status = res.status;
					console.log(res);

					setTimeout(() => {
						emailAdded = false;
						status = 0;
					}, 4000);
				})
				.catch((err: any) => {
					emailAdded = true;
					status = err.response.status;

					setTimeout(() => {
						emailAdded = false;
						status = 0;
					}, 4000);
				})
				.finally(() => (loading = false));
		} else {
			checkEmptyForm = true;
			emailAdded = true;

			setTimeout(() => {
				emailAdded = false;
				checkEmptyForm = false;
			}, 4000);
		}
	};
	// function to add users to the waitlist

	// due to SSR we first need to let our component mount before being able to access the DOM and window object provided by javascript
	onMount(() => {
		// initializing the circle text by getting its Id from the DOM
		const circleType = new CircleType(document.getElementById('circleText'));
	});
</script>

<!-- Pop up modal for the form -->
<div class="flex item-center mt-[-3.5em] justify-center fixed w-screen z-10    	lg:mb-5">
	{#if emailAdded}
		<div
			class="opacity-0 invisible animate-fade flex flex-col justify-between gap-4 sm:gap-8 font-bold sm:w-[400px] sm:mt-[1em] text-center translate-y-[-30px]  z-10 bg-black  py-2 px-4 text-[#aeb08e] lg:text-xl lg:w-[400px] shadow-lg"
		>
			{#if status === 200 || status === 201}
				<p>You've been added to the waitlist successfully!!. 😊</p>

				<span class=" left-[5px] bottom-[5px] w-0 h-1 bg-[#9BA809] rounded animate-progress" />
			{:else if status === 409}
				<p>This email address already exists. 😥</p>

				<span
					class=" left-[5px] bottom-[5px] w-0 h-1 bg-gradient-to-r from-[#9BA809] to-gray-700 rounded animate-progress"
				/>
			{:else if checkEmptyForm}
				<p>Please fill in your email address.</p>

				<span
					class=" left-[5px] bottom-[5px] w-0 h-1 bg-gradient-to-r from-[#9BA809] to-red-700 rounded animate-progress"
				/>
			{:else}
				<p>There was an error adding you to the waitlist. Please try again another time.</p>

				<span
					class=" left-[5px] bottom-[5px] w-0 h-1 bg-gradient-to-r from-[#9BA809] to-red-700 rounded animate-progress"
				/>
			{/if}
		</div>
	{/if}
</div>
<!-- Pop up modal for the form -->

<div
	class=" mt-10 mb-8 px-3 py-2 max-w-[1224px] flex flex-col items-center justify-center lg:gap-24 gap-10 container mx-auto "
>
	<!-- The image and circular text container -->

	<div class="relative hero-image-container">
		<!-- Circular Text -->

		<p class="text-[#aeb08e] absolute -top-[3em] circle-text md:scale-[.8]" id="circleText">
			ent & Properties R
		</p>

		<!-- Circular Text -->

		<!-- Image -->

		<img
			src="/assets/Hero.png"
			alt="A minimalist living space with a white backdrop and a single two sitter sofa with couple of wooden tables"
			class="h-[25em] object-cover md:h-[37em] image"
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
			<p class="text-lg text-left">
				Getting an apartment can be backbreaking! Uruggo makes it easy for house seekers to get
				their desired apartments. <br />
				We are building an all in one property and rent solution. Would you like to know when we launch?
				Kindly drop your email below.
			</p>

			<!-- Form to get waiting users email -->

			<form
				class="rounded-[50px] h-[60px] flex border w-full hero-form items-center justify-between gap-4"
				on:submit|preventDefault={submitUseremail}
			>
				<input
					type="email"
					name="email-input"
					aria-label="email-input"
					class="bg-[transparent] w-[70%] h-full p-2 outline-none border-[#DCDCDC]"
					bind:value={userEmail}
					placeholder="Enter your email"
				/>
				{#if loading}
					<button
						aria-label="submit button"
						class="text-black w-28 h-full submit-btn bg-[#9BA809] hover:bg-[#EAF19F] py-2 px-4"
						type="submit"
					>
						<div class="flex justify-center">
							<div
								class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"
							/>
						</div>
					</button>
				{:else}
					<button
						aria-label="submit button"
						class="text-black w-28 h-full submit-btn bg-[#9BA809] hover:bg-[#EAF19F] py-2 px-4"
						type="submit"
					>
						Submit
					</button>
				{/if}
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

	@media screen and (max-width: 375px) {
		.circle-text {
			top: 5em;
			left: 2.3em;
			scale: 0.6;
		}
		.image {
			width: 100%;
			object-fit: cover;
		}
		.hero-image-container {
			position: static;
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

	.loader {
		border-top-color: #333;
		-webkit-animation: spinner 1.5s linear infinite;
		animation: spinner 1.5s linear infinite;
	}

	@-webkit-keyframes spinner {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
