<script>
    import Navbar from '$lib/components/navigatiebalk/navigatie.svelte';
    import Reactie from '$lib/components/reacties/reactie.svelte';

    export let data
</script>

<Navbar />

<main>
{#if data.wishes && data.wishes.length > 0}
{#each data.wishes as wish}
<section>
    <img src="{wish.image}" alt="foto van {wish.heading}" />
    <h2>{wish.heading}</h2>
    <time>
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 14h14v-9h-14v16"></path>
     </svg>
     Geplaatst op: {wish.date}</time>
    <p>{wish.discription}</p>

</section>
<mark>{wish.label}</mark>

{/each}
  <p>Geen wensen beschikbaar.</p>
{/if}
</main>

<Reactie />

<style>
    main {
        padding: var(--unit-default);
    }

    section {
        padding: var(--unit-default);
    }

    mark {
        padding: var(--unit-small);
    }

    time {
        display: flex;
        align-items: center;
        gap: var(--unit-small);
        margin-bottom: var(--unit-default);
    }
</style>