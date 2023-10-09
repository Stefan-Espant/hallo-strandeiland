<section class="section-nav">
    <nav class="nav-boven">
        <a class="nav-link1" href="">iets plaatsen</a>
        <a class="nav-link1" href="">inloggen of registreren</a>
    </nav>

    
    <nav class="nav-beneden">
        <a href="/"><img src="https://hallostrandeiland.nl/blobs/gebiedsplatform/w250h250/98691/2022/50/hseTekengebied_8.png" alt="logo" /></a>
        <a class="nav-link2" href="">Berichten</a>
        <a class="nav-link2" href="">Activiteiten</a>
        <a class="nav-link2" href="">Over Strandeiland</a>
        <a class="nav-link2" href="">Planning</a>
        <a class="nav-link2" href="">Participatieteam</a>
        <a class="nav-link2" href="">Personen</a>
        <a class="nav-link2" href="">Organisaties</a>
        <a class="Wensen" href="">Wensen</a>
    </nav>
</section>


<style>
    .root{
        /* font-family: poppins; */
    }
    
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
        background-color: var(--color-secundary-pure);
       
        
        justify-content: space-evenly;
        border-bottom-style: solid;
        border-width: .5px;
        
    }

    .nav-beneden img {
        width: 86.5px;
        aspect-ratio: 1/1;
    }

    
    .nav-link2{
        margin-top: 30px;
        text-decoration: none;
        color: black;
    }

    .nav-link2:hover{
        transform: scale(1.1);
	    transition-duration: 1s;
	    
    }
    
    .Wensen{
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


    @media (max-width: 900px){
        .nav-beneden{
        
            display: flex;
            background-color: var(--color-secundary-pure);
            /* flex-direction: column; */
            
            justify-content: space-evenly;
            border-bottom-style: solid;
            border-width: .5px;
        
    }
}
</style>    