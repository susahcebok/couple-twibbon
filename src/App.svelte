<script>
	export let name;
</script>

<main>
	<h1>Couple {name}!</h1>
        <div id='full' style="display:none;">
        
        <div class="canvas-container">
        <canvas></canvas>
        </div>
    
        <div class="form-group">
        <input type='file' id='full-img' accept='image/*'>
        </div>

        <div class="form-group">
        <label for='full-zoom'>Zoom:</label>
        <input type='range' id='full-zoom' min='0' max='1' step='0.01' value='1'>
        </div>

        <div class="form-group">
        <label for='full-alpha'>Filter:</label>
        <input type='range' id='full-alpha' min='0' max='1' step='0.01' value='0.5'>
        </div>

        <div class="form-group">
        <div class="save myth">
        <div>Unduh</div>
        </div>
        </div>
        </div>

<div id='divide'>
	  
<p></p><canvas></canvas></p>

<div class="row">
<div class="column">
<label class="dropbox" for='divide-left-img'>Photo 1</label>
<p><input type='file' id='divide-left-img' accept='image/*' hidden></p>
<label for='divide-left-zoom'>Zoom:</label>
<p><input type='range' id='divide-left-zoom' min='0' max='2' step='0.01' value='1'></p>
<label for='divide-left-alpha'>Filter:</label>
<input type='range' id='divide-left-alpha' min='0' max='1' step='0.01' value='0.5'>
</div>
<div class="column">
<label class="dropbox" for='divide-right-img'>Photo 2</label>
<p><input type='file' id='divide-right-img' accept='image/*' hidden></p>
<label for='divide-right-zoom'>Zoom:</label>
<p><input type='range' id='divide-right-zoom' min='0' max='2' step='0.01' value='1'></p>
<label for='divide-right-alpha'>Filter:</label>
<input type='range' id='divide-right-alpha' min='0' max='1' step='0.01' value='0.5'>
</div>
</div>

<p><button id="click" class="save myth" disabled>Unduh</button></p>
</div><!-- divide -->

  <div id="intro" style="display:none;">
    <div id="choose">选择类型...</div>
    <div id="choice">
      <div id="choice-full" class="myth">
        <div>全景</div>
      </div>
      <div id="choice-divide" class="myth">
        <div>分割</div>
      </div>
    </div>
    <div id="return-intro" class="myth">
      <div>更改类型</div>
    </div>
  </div>
</main>

<footer>
  <p><a target="_blank" rel="noopener" href="https://github.com/susahcebok/stunning-couscous">Copyright © 2024 Ferry Ayunda.</a></p>
</footer>

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
