<section class="section-nav">
	<nav class="nav-boven">
		<a class="nav-link1" href="/">iets plaatsen</a>
		<a class="nav-link1" href="/">inloggen of registreren</a>
	</nav>

	<nav class="nav-beneden">
		<img
			src="https://hallostrandeiland.nl/blobs/gebiedsplatform/w250h250/98691/2022/50/hseTekengebied_8.png"
			alt="logo"
		/>
		<a class="nav-link2" href="/">Berichten</a>
		<a class="nav-link2" href="/">Activiteiten</a>
		<a class="nav-link2" href="/">Over Strandeiland</a>
		<a class="nav-link2" href="/">Planning</a>
		<a class="nav-link2" href="/">Participatieteam</a>
		<a class="nav-link2" href="/">Personen</a>
		<a class="nav-link2" href="/">Organisaties</a>
		<a class="Wensen" href="/">Wensen</a>
	</nav>

	<details>
		<summary>
			<a class="dropdown" href="/">
				<figure>
					<svg
						width="40"
						height="32"
						viewBox="0 0 44 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="44" height="4" fill="" />
						<rect y="14" width="44" height="4" fill="" />
						<rect y="28" width="44" height="4" fill="" />
					</svg>
					<figcaption>menu</figcaption>
				</figure>
			</a>
		</summary>
		<ul>
			<li>
				<a class="nav-link2" href="/">Berichten</a>
			</li>
			<li>
				<a class="nav-link2" href="/">Activiteiten</a>
			</li>
			<li>
				<a class="nav-link2" href="/">Over Strandeiland</a>
			</li>
			<li>
				<a class="nav-link2" href="/">Planning</a>
			</li>
			<li>
				<a class="nav-link2" href="/">Participatieteam</a>
			</li>
			<li>
				<a class="nav-link2" href="/">Personen</a>
			</li>
			<li>
				<a class="nav-link2" href="/">Organisaties</a>
			</li>
			<li>
				<a class="Wensen" href="/">Wensen</a>
			</li>
		</ul>
	</details>
</section>

<style>
	/* Mobile nav */
	.nav-beneden {
		display: flex;
		background-color: var(--color-secundary-pure);
		justify-content: space-evenly;
		border-bottom-style: solid;
		border-width: 0.5px;
	}

	details .dropdown svg {
		fill: var(--color-primary);
	}

	@media (min-width: 60rem) {
		details {
			display: none;
		}
	}

	.nav-boven {
		text-align: right;
		background-color: #333;
		padding: 20px;
	}
	.nav-link1 {
		padding: 5px;
		color: var(--color-secundary);
		text-decoration: none;
		border-bottom: 2px;
		border-bottom-style: solid;
		margin: 10px;
	}

	.nav-beneden img {
		width: 86.5px;
		aspect-ratio: 1/1;
	}

	.nav-link2 {
		margin-top: 30px;
		text-decoration: none;
		color: black;
	}

	.nav-link2:hover {
		transform: scale(1.1);
		transition-duration: 1s;
	}

	.Wensen {
		background-color: yellow;
		text-decoration: none;
		color: black;
		padding: 20px;
		border-radius: 20px;
		margin: 10px;
	}

	.Wensen:hover {
		transform: scale(1.1);
		transition-duration: 1s;
	}

	@media (max-width: 900px) {
		.nav-beneden {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;
			text-align: center;
		}
	}
</style>
