<script>
	export let productId = 100;
</script>

<a href="/">Home</a>

<h1>Product List</h1>
<a href="/products/1">
	<h2>Product 1</h2>
</a>
<a href="/products/2">
	<h2>Product 2</h2>
</a>
<a href="/products/3">
	<h2>Product 3</h2>
</a>
<a href="/products/{productId}">
	<h2>Product {productId}</h2>
</a>
<a href={`/products/${productId + 1}`}>
	<h2>Product {productId + 1}</h2>
</a>
