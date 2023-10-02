<script>
    import Navbar from '$lib/components/navigatiebalk/navigatie.svelte';
    import Reactie from '$lib/components/reacties/reactie.svelte';
    import Searchbar from '$lib/components/searchbar/searchbar.svelte';
</script>

<header>
    <Navbar />
</header>

<main>

<Searchbar />

<Reactie />

</main>

<style>
    main {
        padding: var(--unit-default);
    }
</style>

