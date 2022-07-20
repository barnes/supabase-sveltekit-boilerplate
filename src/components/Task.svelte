<script lang="ts">
	import { deleteTask, getTasks, updateTask, type Task } from '$lib/taskStore';
	import { user } from '$lib/userStore';

	export let task: Task;

	let newTask = task;

	const handler = async () => {
		console.log(newTask);
		newTask.completed = !newTask.completed;
		await updateTask(newTask);
		await getTasks($user);
	};

	const deleteHandler = async () => {
		await deleteTask(task);
		await getTasks($user);
	};
</script>

<div class="p-4 grid grid-cols-4 {task.completed ? 'bg-red-300' : ''} items-center">
	{task.id}
	<h2 class="text-xl">{task.text}</h2>
	<div>
		<label id={task.text} for={task.text}>Complete</label>
		<input id={task.text} type="checkbox" bind:checked={task.completed} on:click={handler} />
	</div>
	<button on:click={deleteHandler} class="p-4 bg-gray-100 border border-gray-400">Delete</button>
</div>
