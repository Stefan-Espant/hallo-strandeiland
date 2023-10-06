<!-- Personen component -->
<section class="persoon_section">
	<article class="persoon_artikel">
		<p class="persoon_naam">Elske Rollema</p>
	</article>

	<article class="persoon_foto">
		<img src="assets/elske_rollema.webp" alt="Foto van persoon" />
	</article>

	<article class="persoon_beschrijving">
		<h2 class="beschrijving_titel">Mijn werk en hobbies</h2>
		<p class="beschrijving">
			Kom in je kracht en krijg inzichten in jezelf. Vind je balans en je eigen wijsheid door middel
			van coaching, counselling, werken met dromen, dagdroom therapie, hypnose, etc. Kom langs voor
			een gratis intake en kennismaking.
		</p>
	</article>
</section>

<style>
	.persoon_section {
		display: flex;
		margin-top: 4rem;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		background-color: var(--color-secundary);
		padding-top: 3rem;
	}

	.persoon_artikel {
		align-self: center;
		border: 2px solid var(--color-primary);
		width: 20rem;
		height: 7rem;
	}

	.persoon_artikel:hover {
		background-color: var(--color-primary);
		color: white;
		cursor: pointer;
		transition: 0.3s;
	}

	.persoon_naam {
		margin-top: 2.5rem;
		font-weight: bold;
		font-size: 22px;
	}

	.persoon_foto {
		align-self: center;
		border: 2px solid var(--color-primary);
		width: 15rem;
		height: 15rem;
	}

	.persoon_beschrijving {
		align-self: center;
		margin-top: 2rem;
		width: 15rem;
	}

	.beschrijving_titel {
		font-size: 22px;
		text-align: left;
	}

	.beschrijving {
		font-size: 16px;
		text-align: left;
	}
</style>
