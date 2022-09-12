<script>
	import Navbar from '../components/Navbar.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
</script>

<div class="md:mx-10 mx-2">
	<Navbar />

	<slot />
	<Footer />
</div>
