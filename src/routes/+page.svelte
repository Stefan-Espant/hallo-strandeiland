<script>
	import Navbar from '$lib/components/navigatiebalk/navigatie.svelte';
	import { onMount } from 'svelte';

	export let data;

	let searchInput = null;
	let filteredWishes = data.wishes;

	// Functie om te zoeken
	function searchWishes() {
		const searchTerm = searchInput.value.toLowerCase();
		filteredWishes = data.wishes.filter((wish) => wish.heading.toLowerCase().includes(searchTerm));
	}

	onMount(() => {
		searchInput.addEventListener('input', searchWishes);
	});
</script>

<Navbar />

<main>
	<section>
		<!-- Alle wensen uit de Hygraph API  -->
		{#each filteredWishes as wish}
			<article class="card_article">
				<div class="card_image">
					<img
						src={wish.image.url}
						alt="foto van {wish.heading}"
						width={wish.image.width}
						height={wish.image.height}
						class="card_img"
					/>
					<div class="card_image_body">
						<h3>Beschrijving:</h3>
						<p class="card_description">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
							has been the industry's standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into electronic t
						</p>
					</div>
				</div>

				<div class="card_data">
					<h2>{wish.heading}</h2>
					<span class="card_date">Geplaats op: {wish.date}</span>
					<div class="card_label">
						<svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 448 512"
							><style>
								svg {
									fill: #c2c2c2;
								}
							</style><path
								d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
							/></svg
						>
						<span>{wish.label}</span>
					</div>
					<h3>Supporters: <span>4</span></h3>
					<a href="/wens/{wish.id}" class="button">Lees meer</a>
				</div>
			</article>
		{/each}
	</section>
</main>

<style>
	main {
		width: fit-content;
		height: 100%;
		margin: auto;
		padding: var(--unit-default);
		background-color: var(--color-accent-75);
	}

	section {
		width: fit-content;
		display: grid;
		grid-template-columns: 1;
		gap: var(--unit-default);
		margin: auto;
		margin-bottom: var(--unit-default);
	}

	/* David overzichtspagina */
	.card_article {
		width: 20rem;
		border-radius: 1.25rem;
		background-color: var(--color-secundary);
		overflow: hidden;
		border: 1px solid;
		margin-bottom: 0;
	}

	.card_article:hover .card_image_body {
		z-index: 10;
		transition: ease-in-out;
	}

	.card_head {
		display: flex;
		justify-content: space-between;
	}

	.card_label {
		margin-top: 10px;
	}

	.card_label span {
		margin-left: 5px;
	}

	.card_head .card_date {
		font-size: 86%;
		font-variant-caps: all-small-caps;
	}

	.card_image_body {
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		position: absolute;
		background: #1f3d4738;
		backdrop-filter: blur(5px);
		padding: 30px;
		color: white;
	}

	.card_image_body h3 {
		margin-bottom: 5px;
	}

	.card_image_body p {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 7;
		line-height: 20px;
	}

	/* Card Image */
	.card_image {
		position: relative;
		margin-bottom: -0.75rem;
		height: 260px;
	}

	.card_img {
		width: 100%;
		margin: 0 auto;
		height: 100%;
		position: relative;
		z-index: 5;
		object-fit: cover;
	}

	.card_data {
		background-color: #fff;
		transition: 0.3s;
		padding: 1.5rem 2rem;
		border-radius: 1rem;
		position: relative;
		z-index: 10;
		padding-bottom: 80px;
		border-top: 1px solid;
		height: 280px;
	}

	.card_data p {
		font-weight: 500;
		margin-bottom: 1.75rem;
	}

	.card_data h2 {
		margin-bottom: 10px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.card_data h3 {
		position: absolute;
		font-weight: 500;
		bottom: 82px;
	}

	.card_data h3 span {
		font-weight: 600;
	}

	.button {
		border: none;
		font-size: 16px;
		padding: 8px 16px;
		background-color: var(--color-blue);
		border-radius: 6px;
		text-decoration: none;
		color: white;
		bottom: 25px;
		position: absolute;
	}

	.button:hover {
		color: white;
		background-color: black;
	}
	/* Einde david overzichtspagina */

	.searchbar {
		width: 100%;
		margin: 0 auto;
		margin-bottom: 0px;
		margin-bottom: var(--unit-default);
		height: auto;
		display: block;
		padding: 0;
	}

	.searchbar form {
		display: flex;
		flex-direction: row;
		gap: var(--unit-small);
		width: 100%;
		background-color: var(--color-secundary);
		border-radius: var(--unit-small);
		padding: var(--unit-small);
		position: relative;
	}

	.searchbar input {
		width: inherit;
		border-radius: var(--unit-micro);
		border: unset;
		padding-left: var(--unit-small);
	}

	.searchbar figure {
		display: flex;
		align-items: center;
		gap: var(--unit-small);
	}

	@media (min-width: 42rem) {
		section {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 64rem) {
		section {
			width: fit-content;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	/* Stefan overzichtspagina */

	/* article {
		width: 20rem;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 20rem 1fr;
		padding: var(--unit-default);
		border-radius: var(--unit-small);
		background-color: var(--color-secundary);
	}

	article div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	article a {
		color: var(--color-primary-50);
		padding: var(--unit-small) var(--unit-default);
		transition: var(--animation-default) ease-in-out;
	}

	article a:is(:hover, :focus) {
		color: var(--color-secundary-pure);
		background-color: var(--color-blue);
	}

	article img {
		width: 100%;
		height: 20rem;
		object-fit: cover;
		margin-bottom: var(--unit-default);
		background-color: var(--color-primary-50);
		border-radius: var(--unit-micro);
	}

	article h2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin: var(--unit-default) 0 var(--unit-small);
	}

	time {
		display: flex;
		align-items: center;
		gap: var(--unit-small);
		margin-bottom: var(--unit-default);
	} */
</style>

<!-- !!!! Stefan overzichtspagina !!!! -->

<!-- <main> -->
<!-- De zoekbalk voor het zoeken naar wensen
	<article class="searchbar">
		<form method="get" action="/">
			<label hidden for="search">Zoeken</label>
			<input bind:this={searchInput} id="search-wishes" type="search" name="q" />
			<button>
				<figure>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-search"
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
						<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
						<path d="M21 21l-6 -6" />
					</svg>
					<figcaption>zoeken</figcaption>
				</figure>
			</button>
		</form>
	</article>

	<section class="wishes">
		Alle wensen uit de Hygraph API -->
<!-- {#each filteredWishes as wish}
			<article>
				<img
					src={wish.image.url}
					alt="foto van {wish.heading}"
					width={wish.image.width}
					height={wish.image.height}
				/>
				<h2>{wish.heading}</h2>
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
					Geplaatst op: {wish.date}</time
				>
				<div>
					<mark>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-tag"
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
							<path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
							<path
								d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z"
							/>
						</svg>
						{wish.label}
					</mark>
					<a href="/wens/{wish.id}"> Bekijk deze wens </a>
				</div>
			</article>
		{/each}
	</section>
</main> -->
