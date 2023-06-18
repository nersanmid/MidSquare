<script>

async function onConnect() {
	console.log('Hello world');
}

window.addEventListener('load', async () => {
  $("#btn-connect").on("click", () => {onConnect() });
});

</script>   
