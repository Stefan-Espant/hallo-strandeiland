<script>
	import Navbar from '$lib/components/navigatiebalk/navigatie.svelte';
	import Reactie from '$lib/components/reacties/reactie.svelte';

	export let data;

    console.log(data)
</script>

<Navbar />

<main>
    {#if data.wish}
      <section>
        <img src={data.wish.image.url} alt="foto van {data.wish.heading}" />
        <h2>{data.wish.heading}</h2>
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
        <p>{data.wish.discription}</p>
      </section>
      <mark>{data.wish.label}</mark>
    {:else}
      <p>Geen wens beschikbaar.</p>
    {/if}
    <Reactie />
  </main>  

<style>
	main {
		padding: var(--unit-default);
	}

	section {
        width: 75vw;
		padding: var(--unit-default);
	}

    section img {
        width: 50%;
    }

    section p {
        max-width: 30rem;
    }

	mark {
		padding: var(--unit-small);
        margin-bottom: var(--unit-default);
	}

	time {
		display: flex;
		align-items: center;
		gap: var(--unit-small);
		margin-bottom: var(--unit-default);
	}
</style>
