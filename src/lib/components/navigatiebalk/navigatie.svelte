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

        <details>
            <summary role="button">
                <div class="dropdown">
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
                    
                </div>
            </summary>
            <ul>
                <li>
                    <a href="/">
                        Berichten</a
                    >
                </li>
                <li>
                    <a href="/">
                        Activiteiten</a
                    >
                </li>
                <li>
                    <a href="/">
                        Over Strandeiland</a
                    >
                </li>
                <li>
                    <a href="/">
                        Planning
                </li>
                <li>
                    <a href="/">
                        Participatieteam
                </li>
                <li>
                    <a href="/">
                        Personen
                </li>
                <li>
                    <a href="/">
                        Organisaties
                </li>
                <li>
                    <a href="/">
                        Wensen
                </li>
               
			</ul>
            

	</nav>

	
</section>

<style>

    /* Image */

    img{
    max-width: 70px;
    max-height: 100px;
}

	/* Mobile nav */
	.nav-beneden {
		display: flex;
		background-color: var(--color-secundary-pure);
		justify-content: space-evenly;
		border-bottom-style: solid;
		border-width: 0.5px;
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
        display: none;
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
        display: none;
	}

	.Wensen:hover {
		transform: scale(1.1);
		transition-duration: 1s;
	}

	@media (min-width: 970px) {
        .nav-link2{
            display: block;
        }
        .Wensen{
            display: block;
        }
        svg{
            display: none;
        }
        details{
        display: none;
        
    }
	}

    svg{
        width: 20px;
    }

    details .dropdown svg {
		fill: var(--color-primary);
	}

    details{
        margin: 10px;
        margin-top: 30px;
    }
  
  
    ul{
        list-style-type: none;
        padding-top: 10px;
    }
    li{
        text-decoration: none;
        padding: 5px;
        border-radius: 10px;
    }

    li:hover{
        transform: scale(1.1);
        transition-duration: 1s;
        background-color: yellow;
    }

    a{
        text-decoration: none;
        color: black;
    }

	details > summary {
  list-style: none;
}

details summary::-webkit-details-marker {
  display:none;
}





</style>
