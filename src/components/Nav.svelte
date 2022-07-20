<script lang="ts">
	import { user } from '$lib/userStore';
	import { supabase } from '$lib/db';

	const handler = () => {
		supabase.auth.signOut();
	};
</script>

{#if $user}
	<a href="/">Home</a>
	<a href="/about">About</a>
	<button on:click={handler}>Sign Out</button>
{/if}
