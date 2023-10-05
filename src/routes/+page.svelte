<script>
    import Navbar from '$lib/components/navigatiebalk/navigatie.svelte';
    import Reactie from '$lib/components/reacties/reactie.svelte';
    import Searchbar from '$lib/components/searchbar/searchbar.svelte';

    export let data
    console.log(data)
</script>

<Navbar />

<main>
    <Searchbar />

    <Reactie />
</main>

<style>
    main {
        width: 100%;
        height: 100vh;
        padding: var(--unit-default);
        background-color: var(--color-accent-75);
    }
</style>

<Reactie />