<article class="searchbar">
  <form method="get" on:submit={handleSubmit}>
    <label hidden for="search">Zoeken</label>
    <input
      id="search"
      type="search"
      name="q"
    />
    <button>
            <figure>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
            </svg>
            <figcaption>
                zoeken
            </figcaption>
        </figure>
        </button>
    </form>
</article>

<style>

    .searchbar {
        margin: 0 auto;
        margin-bottom: var(--unit-default);
    }

	form {
        display: flex;
        flex-direction: row;
        gap: var(--unit-small);
        width: 100%;
        background-color: var(--color-secundary);
		border: 1px solid var(--color-accent-100);
        border-radius: var(--unit-small);
        padding: var(--unit-small);
        position: relative;
    }

    input {
        width: inherit;
        border-radius: var(--unit-micro);
        border: unset;
        padding-left: var(--unit-small);
    }

    figure {
        display: flex;
        align-items: center;
        gap: var(--unit-small);
    }
</style>
