<script lang="ts">
	import { user } from '$lib/userStore';

	import LoginForm from '../components/LoginForm.svelte';
	import TaskForm from '../components/TaskForm.svelte';
</script>

{#if $user != null}
	<h1>Welcome {$user.email}</h1>
	<TaskForm />
{:else if $user == null}
	<LoginForm />
{/if}
