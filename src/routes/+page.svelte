<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	const handlePlaceOrder = () => {
		console.log('placing your order');
		goto('/products', { replaceState: true });
	};

	beforeNavigate((navigation) => {
		console.log('beforeNavigate:-', navigation);
	});
	afterNavigate((navigation) => {
		console.log('afterNavigate:-', navigation);
	});
</script>

<h1>Welcome Home</h1>

<a href="/blog">Blog</a>
<a href="/products">Products</a>

<button on:click={handlePlaceOrder}>Place order</button>
