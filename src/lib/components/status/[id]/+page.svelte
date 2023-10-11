<script>
    // 	import {load} from '/src/routes/api/statusupdate/statusupdate.js';
    // load();
	export let data;

	// console.log(load.status);
</script>
<h2>Status wens</h2>

<section>
    <p>11-10-2023</p>
    <span></span>
    <p>Wens is gezien en wordt besproken bij de eerst volgende vergadering</p>
</section>

<style>
    h2{
        padding: 1em;
    }
    section{
        display: flex;
        padding: 1em;
        width: 100%;
        justify-content: space-between;
        margin-top: 2em;
    }
    span{
        width: 2em;
        height: 2em;
        background-color: rgba(13, 158, 255, 0.5);
        display: inline-block;
        border-radius: 50%;
    }
    p{
        font-size: 14px;
    }
    section  > P:nth-of-type(2){
        border: 2px solid rgba(13, 158, 255, 0.5);
        padding: 1em;
        width: 20em;
    }
</style>