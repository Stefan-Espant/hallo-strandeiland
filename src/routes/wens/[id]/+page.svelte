<script>
	import Navbar from '$lib/components/navigatiebalk/navigatie.svelte';
	import Reactie from '$lib/components/reacties/reactie.svelte';
	import Rollen from '$lib/components/detailpagina/rollen.svelte';

	export let data;

	console.log(data);
</script>

<Navbar />

<main>
	<span>
		<a href="/"
			><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
				><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<path
					d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"
				/></svg
			>
			Terug</a
		>
	</span>

	<section>
		<p>Wens</p>
		<span>
			<h2>{data.wish.heading}</h2>
			<mark>{data.wish.label}</mark>
		</span>
		<img src={data.wish.image.url} alt="foto van {data.wish.heading}" />
		<time>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-flag-2"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M5 14h14v-9h-14v16" />
			</svg>
			Geplaatst op: {data.wish.date}</time
		>
		<p>{data.wish.description}</p>
	</section>

	<Rollen />

<Reactie />
</main>


<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;800&display=swap');
	main {
		padding: var(--unit-default);
		background-color: var(--color-accent-50);
	}

	section {
		width: 35rem;
		display: flex;
		flex-flow: column wrap;
		margin-left: 20%;
		background-color: white;
	}

	mark {
		padding: 0em 0em 2em 3em;
		margin-bottom: var(--unit-default);
	}

	time {
		display: flex;
		align-items: center;
		gap: var(--unit-small);
		margin-bottom: var(--unit-default);
	}

	section img {
		width: 100%;
		height: 20rem;
		object-fit: cover;
		margin-bottom: var(--unit-default);
		background-color: var(--color-primary-50);
		border-radius: var(--unit-micro);
	}
	h2 {
		font-family: 'Poppins', sans-serif;
		font-weight: 800;
		color: #333;
		font-size: 1.7em;
		padding: 0em 0em 0em 1.8em;
	}
	section p:first-child {
		padding: 3em 0em 2em 3em;
		font-variant-caps: all-small-caps;
	}
	section p {
		padding: 1em 0em 1em 2em;
	}

	a {
		text-decoration: none;
	}
	a:visited {
		color: black;
	}

	main > span {
		font-size: 14px;
	}
</style>
