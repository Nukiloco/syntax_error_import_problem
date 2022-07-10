
<script context="module" lang="ts">
	import {houdiniClient} from '@lib/client/init';
	
	houdiniClient.init();
</script>

<svelte:head>
	<title>Website</title>
</svelte:head>

<slot/>