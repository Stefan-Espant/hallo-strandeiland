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



<section>
<article>
    <button class="knop">Ik deel deze wens</button>
    <button class="knop">Ik wil helpen</button>
    <button class="knop">Ik wil trekker zijn</button>
</article>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<p>Deel dit: <a href=""><i style="font-size:24px" class="fa">&#xf08c;</i></a> 
             <a href=""><i style="font-size:24px" class="fa">&#xf09a;</i></a></p>
</section>


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


    article{
        padding-top: 50px;
    }

    button{
        background-color: black;
        color: white;
        margin: 5px;
    }

    button:hover{
        background-color: yellow;
        color: black;
    }

    .knop{
        padding: 10px;
    }
</style>