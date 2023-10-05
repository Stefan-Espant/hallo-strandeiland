<script>
	import Navbar from '$lib/components/navigatiebalk/navigatie.svelte';
	import Reactie from '$lib/components/reacties/reactie.svelte';
	import Searchbar from '$lib/components/searchbar/searchbar.svelte';

	export let data;
	console.log(data);
</script>

<Navbar />

<main>
	<Searchbar />

	<section>
		{#each data.wishes as wish}
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
			</article>
		{/each}
	</section>
</main>

<style>
	main {
		width: 100%;
		height: 100vh;
		padding: var(--unit-default);
		background-color: var(--color-accent-75);
	}

	section {
		display: grid;
		grid-template-columns: 1;
		gap: var(--unit-default);
		margin: auto;
	}

	article {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 20rem 1fr;
		padding: var(--unit-default);
		border: 1px solid;
		border-radius: var(--unit-small);
	}

	article img {
		width: 100%;
		height: 20rem;
		object-fit: cover;
        margin-bottom: var(--unit-default);
	}

	article h2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
        margin: var(--unit-default) 0 var(--unit-small);
	}
	mark {
		width: fit-content;
		height: fit-content;
		display: flex;
		gap: var(--unit-small);
		padding: var(--unit-small);
	}

	time {
		display: flex;
		align-items: center;
		gap: var(--unit-small);
		margin-bottom: var(--unit-default);
	}

	@media (min-width: 30rem) {
		section {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 60rem) {
		section {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
