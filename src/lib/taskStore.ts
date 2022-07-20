import { writable } from 'svelte/store';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/db';

export const userIn = supabase.auth.user();

export const tasks = writable();

export interface Task {
	id?: number;
	uuid: string;
	text: string;
	completed: boolean;
}

export const createTask = async (task: Task) => {
	const { data, error } = await supabase.from('demo').insert(task);
	if (error) {
		console.error(error);
	} else {
		console.log('CREATE: ' + data);
	}
};

export const deleteTask = async (task: Task) => {
	const { data, error } = await supabase.from('demo').delete().eq('id', task.id);
	if (error) {
		console.error(error);
	} else {
		console.log('DELETE:' + data);
	}
};

export const updateTask = async (task: Task) => {
	console.log(supabase.auth.session());
	const { data, error } = await supabase.from('demo').update(task).eq('id', task.id);
	if (error) {
		console.error(error);
	} else {
	}
};

export const getTasks = async (user: User) => {
	const { data, error } = await supabase.from('demo').select('*').eq('uuid', user.id);
	if (error) {
		console.error(error);
	} else {
		tasks.set(data);
		return data;
	}
};
