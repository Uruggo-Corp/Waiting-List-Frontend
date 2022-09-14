<script>
	import Navbar from '../components/Navbar.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
</script>

<div class="lg:mx-5">
	<Navbar />
	<slot />
	<Footer />

</div>

