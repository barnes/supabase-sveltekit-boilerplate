<script lang="ts">
	import { user } from '$lib/userStore';

	import LoginForm from '../components/LoginForm.svelte';
	import TaskForm from '../components/TaskForm.svelte';
	import TaskList from '../components/TaskList.svelte';
</script>

{#if $user != null}
	<h1>Welcome {$user.email}</h1>
	<TaskForm />
	<TaskList />
{:else if $user == null}
	<LoginForm />
{/if}
