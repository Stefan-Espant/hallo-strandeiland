<article class="searchbar">
    <form method="get" action="/">
    	<label hidden for="search">Zoeken</label>
    	<input id="search" type="search" name="q" />
    	<button>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
            </svg>
         zoeken
        </button>
    </form>
</article>

<style>

    .searchbar {
        width: 66vw;
        margin: 0 auto;
        margin-bottom: var(--unit-default);
    }

	form {
        display: flex;
        flex-direction: row;
        gap: var(--unit-small);
        width: 100%;
        background-color: var(--color-secundary);
        border: var(--unit-nano) solid var(--color-accent-50);
        border-radius: var(--unit-small);
        border-radius: var(--unit-small);
        padding: var(--unit-small);
        box-shadow: var(--shadow-default);
        position: relative;
    }

    input {
        width: inherit;
        border-radius: var(--unit-small);
        border: unset;
        padding-left: var(--unit-small);
    }

    button {
        display: flex;
        align-items: center;
        gap: var(--unit-micro);
        border: unset;
        border-radius: var(--unit-small);
        padding: var(--unit-micro) var(--unit-default) var(--unit-micro) 0.8em;
        transition: 0.2s ease-in-out;
    }

    button:is(:hover, :focus) {
        background-color: var(--color-blue);
        color: var(--color-secundary);
    }
</style>
