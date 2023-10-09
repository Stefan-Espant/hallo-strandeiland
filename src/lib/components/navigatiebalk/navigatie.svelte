<section class="section-nav">
    <nav class="nav-boven">
        <a class="nav-link1" href="">iets plaatsen</a>
        <a class="nav-link1" href="">inloggen of registreren</a>
    </nav>

    
   
    <nav class="nav-beneden">
        <a href="/"><img src="https://hallostrandeiland.nl/blobs/gebiedsplatform/w250h250/98691/2022/50/hseTekengebied_8.png" alt="logo" /></a>
        <a class="nav-link2" href="/">Berichten</a>
        <a class="nav-link2" href="/">Activiteiten</a>
        <a class="nav-link2" href="/">Over Strandeiland</a>
        <a class="nav-link2" href="/">Planning</a>
        <a class="nav-link2" href="/">Participatieteam</a>
        <a class="nav-link2" href="/">Personen</a>
        <a class="nav-link2" href="/">Organisaties</a>
        <a class="Wensen" href="/">Wensen</a>
 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>

    </nav>
</section>


<style>
   
    .nav-boven{
        text-align: right;
        background-color: #333;
        padding: 20px;

    }
    .nav-link1{
        padding: 5px;
        color: var( --color-secundary);
        text-decoration: none;
        border-bottom: 2px;
        border-bottom-style: solid;
        margin: 10px;
    }
   

    .nav-beneden{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }


    .nav-beneden img {
        width: 86.5px;
        aspect-ratio: 1/1;
        
    }

    
    .nav-link2{
        display: none;
        margin-top: 30px;
        text-decoration: none;
        color: black;
    }

    .nav-link2:hover{
        transform: scale(1.1);
	    transition-duration: 1s;
	    
    }
    
    .Wensen{
        display: none;
        background-color: yellow;
        text-decoration: none;
        color: black;
        padding: 20px;
        border-radius: 20px;
        margin: 10px;
    }

    .Wensen:hover{
        transform: scale(1.1);
	    transition-duration: 1s;
	    
    }


    @media (min-width: 980px){
        .nav-beneden{
        
            display: flex;
            background-color: var(--color-secundary-pure);

            justify-content: space-evenly;
            border-bottom-style: solid;
            border-width: .5px;
        
    }
    .Wensen{
        display: flex;
    }
    .nav-link2{
        display: flex;
    }

    svg{
    display: none;
    
}
}

svg{
    margin-right: 40px;
    width: 20px;
}

</style>    