<script type="ts">
	import { tasks } from '$lib/taskStore';
	import Task from './Task.svelte';

	let taskArray = Object.values($tasks);
</script>

<h1>Task List</h1>
{#if $tasks}
	{#each $tasks as task}
		<Task {task} />
	{/each}
{/if}
