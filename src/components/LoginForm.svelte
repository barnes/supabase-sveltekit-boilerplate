<script>
	import { supabase } from '$lib/db';
	let email = 'your email here';

	const handleLogin = async () => {
		console.log('handle login');
		try {
			await supabase.auth.signIn({ email });
		} catch (error) {
			console.error(error);
		} finally {
			email = '';
		}
	};
</script>

<form on:submit|preventDefault={handleLogin}>
	<input type="text" class="p-3 bg-gray-200 border border-gray-400" bind:value={email} />
	<button type="submit" class="p-3 bg-gray-200 border border-gray-400">Submit</button>
</form>
