<script type="ts">
	import { tasks } from '$lib/taskStore';
	import Task from './Task.svelte';
</script>

<h1>Task List</h1>
{#if $tasks}
	{#each $tasks as task}
		{#if task.completed}
			<Task {task} />
		{:else}
			<Task {task} />
		{/if}
	{/each}
{/if}
