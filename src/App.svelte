<script>
	export let name;
</script>

<main>
	<h1>Couple {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
	    width: 600px;
	    margin: 5em auto;
	    padding: 2em;
	    background-color: #fdfdff;
	    border-radius: 0.5em;
	    box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
       }

	h1 {
		text-transform: uppercase;
	}

	@media (max-width: 700px) {
        main {
            margin: 0 auto;
            width: auto;
        }
        }
</style>
