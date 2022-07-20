<script>
	import '../app.css';
	import { supabase } from '$lib/db';
	import { user } from '$lib/userStore';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(supabase.auth.user());
	});
</script>

<div class="container mx-auto">
	<div class="header bg-purple-300 text-center py-6">
		<h1 class="text-4xl">supabase/svelte boilerplate</h1>
		<p>A quick prototyping boilerplate using Sveltekit, TailwindCSS and Supabase</p>
	</div>
	<div class="content p-6">
		<slot />
	</div>
</div>
