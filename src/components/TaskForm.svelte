<script lang="ts">
	import { createTask, getTasks, tasks } from '$lib/taskStore';
	import type { Task } from '$lib/taskStore';
	import { user } from '$lib/userStore';

	let newTask: Task = {
		uuid: $user.id,
		text: '',
		completed: false
	};

	const handler = async () => {
		try {
			await createTask(newTask);
		} catch (error) {
			console.error(error);
		} finally {
			newTask.text = '';
			await getTasks($user);
		}
	};
</script>

<form on:submit|preventDefault={handler}>
	<input type="text" class="p-3 bg-gray-200 border border-gray-400" bind:value={newTask.text} />
	<button type="submit" class="p-3 bg-gray-200 border border-gray-400">Submit</button>
</form>
