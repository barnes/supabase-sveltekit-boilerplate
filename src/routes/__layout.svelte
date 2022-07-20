<script type="ts" context="module">
	import '../app.css';
	import { supabase } from '$lib/db';
	import { user } from '$lib/userStore';
	import { tasks, getTasks, userIn } from '$lib/taskStore';
	import { onMount } from 'svelte';
	import Nav from '../components/Nav.svelte';

	export async function load() {
		let user = supabase.auth.user();
		if (user) {
			tasks.set(await getTasks(user));
		}
	}

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
		<Nav />
		<slot />
	</div>
</div>
